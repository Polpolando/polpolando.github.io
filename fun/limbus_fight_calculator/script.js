class Character {
   constructor(baseValue, coinValue, coinAmount, sanity) {
      this.baseValue = baseValue;
      this.coinValue = coinValue;
      this.coinAmount = coinAmount;
      this.sanity = sanity;
   }
   debug = () => {
      console.table(this)
   }
}

const calculateOdds = (clasher1, clasher2) => {
   // TODO
}

player = new Character(10, 2, 2, 0);
enemy = new Character(10, 2, 2, 0);



