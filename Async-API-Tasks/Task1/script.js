// Promise Task 1 - Programming Quotes AP1

//Elements creation;
const container = document.createElement("div");
container.setAttribute("class", "container");
const heading1 = document.createElement("h1");
heading1.setAttribute("class", "heading");
heading1.innerHTML = "Programming Quotes API by Mouli Bhaskaran";
const heading2 = document.createElement("h3");
heading2.setAttribute("class", "heading2");
heading2.innerHTML = " - Exceptional Programming Quotes from Great Authors";
const row = document.createElement("div");
row.setAttribute("class", "row");
const br1 = document.createElement("br");

//Appending the elements;

container.append(heading1, heading2, br1, row);
document.body.append(container);

//API Interaction;

async function task2() {
  let data1 = await fetch("https://programming-quotes-api.herokuapp.com/quotes");
  let data2 = await data1.json();
  //console.log(dta2);
  for (let i = 0; i < data2.length; i++) {
    let columns = document.createElement("div");
    columns.setAttribute("class", "col-md-12");
    columns.innerHTML = `<div class="card text-black bg-dark mb-3" style="max-width: 100%;">
        <div class="card-header"><h5 class="card-title">Author : ${data2[i].author}</h5></div>
        <div class="card-body">
          <p class="card-text"><q>${data2[i].en}</q></p>
        </div>
      </div>`;
    row.append(columns);
  }
}
task2();
