// Invoking Restcountries using Fetch API;

var result = fetch("https://restcountries.com/v2/all")
  .then((data) => data.json())
  .then((data1) => {
    // DOM
    var container = document.createElement("div");
    container.setAttribute("class", "container");
    var row = document.createElement("div");
    row.setAttribute("class", "row");

    var h1 = document.createElement("h1");
    h1.innerHTML = "Restcountries & Open Weather Map using Fetch API";

    //appending
    container.append(h1, row);
    document.body.append(container);
    console.log(data1);

    for (var i = 0; i < data1.length; i++) {
      var col = document.createElement("div");
      col.setAttribute("class", "col-lg-4 col-sm-12");
      col.innerHTML = `<div class="smallbox">
        <div class="card">
        <img src="${data1[i].flag}" class="card-img-top" alt="flag" height="200px" width="100px">
        <div class="card-body">
          <h5 class="card-title">${data1[i].name}</h5>
          <span class="card-text">Capital: ${data1[i].capital}</span>
          <span class="card-text">Region: ${data1[i].region}</span>
          <span class="card-text">Country Code: ${data1[i].alpha3Code}</span>
          <br>
          <button class="btn btn-primary" Onclick="opendata()">Click for Weather</button>
        </div>
        </div>
      </div>`;
      var name = data1[i].name;
      var latlong = data1[i].latlng;
      //console.log(latlong);
      opendata(name,...latlong);
      row.append(col);
    }
  })

  .catch((err) => console.log(err));

 function opendata(name, lat, lon) {
    let res = fetch("http://api.openweathermap.org/data/2.5/weather?units=metric&q=durban&appid=d6e0e85a41968aaf6240b5ed27522ebd")
    .then((res) => res.json())
    .then((res1) =>{
        console.log(`Country name:${name}, Temp:${res1.main.temp}`);
    })
    .catch((err)=>{
        console.log(error);
    })
}
