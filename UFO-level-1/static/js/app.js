// from data.js
var tableData = data;

// Select html tag for table location
const tbody = d3.select("tbody");

// log tableData in console
console.log(tableData)

// Function to create table
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

// Create function to filter data based on input value
function runEnter(){
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element, get the raw HTML node and get the value property
    const inputValue = d3.select("#datetime").property("value");

    // log d3.event.target and inputValue in console
    console.log(d3.event.target);
    console.log(inputValue);

    // Create new variable for filtered data
    let filteredData = tableData

    // Create if condition to filter data that matches inputValue 
    if (inputValue); {
        
        filteredData = filteredData.filter(info => info.datetime === inputValue);
    
    // Create table with filtered data
    createTable(filteredData);
    }

}

// Select button
var button = d3.selectAll("#filter-btn");

// Select form
var form = d3.selectAll("form")

// Create Listening Event
button.on("click", runEnter);
form.on("submit", runEnter);

// Return to default table
createTable(tableData);