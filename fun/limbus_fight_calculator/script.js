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
   console.log("nic");
   // TODO
}

const addInputs = DOMElement => {
   const DOMElementId = DOMElement.id;
   const inputDataTypes = ["baseValue", "coinValue", "coinAmount", "sanity"];
   
   inputDataTypes.forEach(dataType => {
      inputField = createNumberInput(DOMElementId, dataType);
      DOMElement.appendChild(inputField);
   });
}

const createNumberInput = (id, dataType) => {
   const DOMElement = document.createElement("input");
   DOMElement.id = id + "-" + dataType // id-dataType
   DOMElement.class = "numberInput";
   DOMElement.placeholder = dataType;
   return DOMElement;
}

player = new Character(10, 2, 2, 0);
enemy = new Character(10, 2, 2, 0);

addInputs(document.getElementById("player"));
