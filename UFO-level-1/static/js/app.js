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

var inputfield = d3.select("#datetime");
