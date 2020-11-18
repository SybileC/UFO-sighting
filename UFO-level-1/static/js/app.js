// from data.js
var tableData = data;

// YOUR CODE HERE!

tbody = d3.select("tbody");

console.log(tableData)

tableData.forEach(info => {
    console.log(info);
    var row = tbody.append("tr");
    Object.entries(info).forEach(([key, value]) => {
        console.log(key, value);
        cell = row.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");

var form = d3.select("#filters")

var inputfield = d3.select("#datetime");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter(){
    d3.preventDefault();
    var inputValue = inputfield.property("value");

    console.log(d3.event.target);
    console.log(inputValue);

    var filteredData = tableData.filter(info => info.datetime === inputValue);

    console.log(filteredData);
}