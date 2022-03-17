class Car {
  constructor(license, maker, model, color, owner, price, discount) {
    this.license = license;
    this.maker = maker;
    this.model = model;
    this.color = color;
    this.owner = owner;
    this.price = price;
    this.discount = discount;
  }
}

const carArr = [
  {
    license: "",
    maker: "",
    model: "",
    color: "",
    owner: "",
    price: "",
    discount: "",
  },
];

searchCar = (e) => {
  let search = document.querySelector("#searchInput").value; // works
  let table = document.querySelector("#table");
  let rows = table.querySelector("tr");
  let result = "";
  let rowLength = table.querySelectorAll("tr").length;

  ////////////////////////////////

  for (let i = 1; i < rowLength; i++) {
    let license = table.rows[i].cells[0].textContent;
    let maker = table.rows[i].cells[1].textContent;
    let model = table.rows[i].cells[2].textContent;
    let color = table.rows[i].cells[3].textContent;
    let owner = table.rows[i].cells[4].textContent;
    let price = table.rows[i].cells[5].textContent;
    let discount = table.rows[i].cells[6].textContent;

    // / Version 1
    if (search === table.rows[i].cells[0].textContent) {
      console.log(`License number is ${table.rows[i].cells[0].textContent}`);
      result = `License number is ${license} is ${maker} ${model} and it belongs to ${owner}. The discount price is €${discount}`;
    }

    document.querySelector("#carSearchResult").textContent = result;
  }
};

resetCar = (e) => {
  e.preventDefault();
  document.querySelector("#licenseInput").value = "";
  document.querySelector("#makerInput").value = "";
  document.querySelector("#modelInput").value = "";
  document.querySelector("#colorInput").value = "";
  document.querySelector("#ownerInput").value = "";
  document.querySelector("#priceInput").value = "";
};

submitCar = (e) => {
  e.preventDefault();
  let license = document.querySelector("#licenseInput").value;
  let maker = document.querySelector("#makerInput").value;
  let model = document.querySelector("#modelInput").value;
  let color = document.querySelector("#colorInput").value;
  let owner = document.querySelector("#ownerInput").value;
  let price = Number(document.querySelector("#priceInput").value);
  // let discount = (price) => price / 100; test algorithm

  let discount = (price) => {
    if (price > 20000) {
      return price * 0.75;
    } else if (price <= 4999) {
      return price * 0.9;
    } else {
      return price * 0.85;
    }
  };

  let newCar = new Car(
    license,
    maker,
    model,
    color,
    owner,
    price,
    discount(price)
  );

  carArr.push(newCar);

  // Creates a table and inserts the new row
  const table = document.querySelector("#table");
  const row = table.insertRow(-1); //this sets new row to the bottom

  // const row = table.insertRow(1); //this sets new row to the top DONT USE UNLESS TO PUT THINGS AT THE TOP

  const licenseRow = row.insertCell(0);
  const makerRow = row.insertCell(1);
  const modelRow = row.insertCell(2);
  const colorRow = row.insertCell(3);
  const ownerRow = row.insertCell(4);
  const priceRow = row.insertCell(5);
  const discountRow = row.insertCell(6);

  // collects the data from array and appends to the table
  licenseRow.textContent = newCar.license;
  makerRow.textContent = newCar.maker;
  modelRow.textContent = newCar.model;
  colorRow.textContent = newCar.color;
  ownerRow.textContent = newCar.owner;
  priceRow.textContent = newCar.price;
  discountRow.textContent = newCar.discount;
};

document.querySelector("#submit").addEventListener("click", submitCar);
document.querySelector("#reset").addEventListener("click", resetCar);
// document.querySelector("#searchButton").addEventListener("click", searchCar);
