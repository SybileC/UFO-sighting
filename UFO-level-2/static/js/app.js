// from data.js
var tableData = data;

// YOUR CODE HERE!

const tbody = d3.select("tbody");

console.log(tableData)

function createTable(tableData) {
    // Clear existing table
    tbody.html("")
    
    // Loop through tableData, append table and add rows to web page 
    tableData.forEach(info => {
    console.log(info);
    const row = tbody.append("tr");
    Object.values(info).forEach((value) => {
        console.log(value);
        let cell = row.append("td");
        cell.text(value);
    });
});
}

const selInfo = document.querySelector("#selInfo");

selInfo.addEventListener("change", (event) => {
    for (i = 0; i < selInfo.length; i++) {
        
        currentOption = event.target.value
        // console.log(currentOption);
    }
}); 

function runEnter() {
    d3.event.preventDefault();
    const inputValue = d3.select("#category").property("value");

    let filteredData = tableData;
    console.log(currentOption);

    if (currentOption === "datetime") {
        filteredData = filteredData.filter(info => info.datetime === inputValue);
        createTable(filteredData);
    }

    else if (currentOption === "state") {
        filteredData = filteredData.filter(info => info.state === inputValue);
        createTable(filteredData);
    }
    else if (currentOption === "country") {
        filteredData = filteredData.filter(info => info.country === inputValue);
        createTable(filteredData);
    }
    else if (currentOption === "shape") {
        filteredData = filteredData.filter(info => info.shape === inputValue);
        createTable(filteredData);
    }
    else {
        filteredData = filteredData.filter(info => info.city === inputValue);
        createTable(filteredData);
    };


};

    
// Create Listening Event
var button = d3.selectAll("#filter-btn");

var form = d3.selectAll("form");


button.on("click", runEnter);
form.on("submit", runEnter);


createTable(tableData);