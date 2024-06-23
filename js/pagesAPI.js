/// GitHub API class for creating a connection with the API, and fetching the contents of the directory from a repo
// @class pagesAPI

import { GITHUB_TOKEN } from "../config.js";
import { Octokit } from "https://esm.sh/@octokit/core";
const octokit = new Octokit({ auth: GITHUB_TOKEN });
export class pagesAPI {
    constructor(user, repo, dir='', branch='master') {
        this.#user = user;
        this.#repo = repo;
        this.#branch = branch;
        this.#dir = dir;
    }
    // Fetch the contents of the directory
    // @param {string} user - The owner of the repo
    // @param {string} repo - The name of the repo
    // @param {string} branch - The branch to fetch the contents from
    // @param {string} dir - The directory to fetch the contents from
    // @returns {Array} data - The array of files in the repos directory
    async fetchContents(user=this.#user, repo=this.#repo, dir=this.#dir, branch=this.#branch) {
        const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{dir}', {
            owner: user,
            repo: repo,
            dir: dir,
            ref: branch
        });
        const data = response.data;
        // If the retry-after response header is present,
        // you should not retry your request until after that many seconds has elapsed.
        if (response.headers['retry-after'])
            await new Promise(r => setTimeout(r, response.headers['retry-after']));
        // If the x-ratelimit-remaining header is 0,
        // you should not make another request until after the time specified by the x-ratelimit-reset header.
        // The x-ratelimit-reset header is in UTC epoch seconds.
        if (response.headers['x-ratelimit-remaining'] === 0)
            throw new Error(`Rate limit exceeded, try again after ${new Date(response.headers['x-ratelimit-reset'] * 1000).toLocaleString()}`);
        return data;
    }
    // Generate an array object containing the pages and directories, which are arrays themselves containing the files
    // Recursively generates a tree of the directories and files.
    // @returns {Object} tree - The tree object containing array of pages and tree objects of directories.
    // async generateTree(user=this.#user, repo=this.#repo, dir=this.#dir, branch=this.#branch) {
    //     // Wait a second, in case of infinite loop
    //     await new Promise(r => setTimeout(r, 1000));
    //     const files = await this.fetchContents(user, repo, dir, branch);
    //     const tree = {
    //         "name": name,
    //         "path": dir,
    //         "pages": [],
    //         "directories": []
    //     };
    //     for (const file of files) {
    //         if (file.type === "file") {
    //             tree.pages.push(file.name);
    //         }
    //         else if (file.type === "dir") {
    //             console.log(file);
    //             tree.directories.push(await this.generateTree(user, repo, file.path, branch));
    //         }
    //     }
    //     return tree;
    // }
    // GitHub REST API has a tree endpoint that can be used to get the contents of a directory
    async generateTree(user=this.#user, repo=this.#repo, dir=this.#dir, branch=this.#branch) {
        // If dir is specified, get the dirs SHA1 to use in the tree request
        let sha = '';
        if (dir) {
            const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{dir}', {
                owner: user,
                repo: repo,
                dir: dir,
                ref: branch
            });
            sha = response.data.sha;
        }

        const response = await octokit.request('GET /repos/{owner}/{repo}/git/trees/{branch}', {
            owner: user,
            repo: repo,
            branch: branch,
            tree_sha: sha,
            recursive: true
        });
        const data = response.data;
        return data;
    }


    #user;
    #repo;
    #branch;
    #dir;
}