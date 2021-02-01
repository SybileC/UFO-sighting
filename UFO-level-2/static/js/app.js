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

// Select id tag with dropdown menu
const selInfo = document.querySelector("#selInfo");

// Add event handler to change category
selInfo.addEventListener("change", (event) => {
    for (i = 0; i < selInfo.length; i++) {
        
        currentOption = event.target.value
        // Log currenOption in console
        console.log(currentOption);
    }
}); 

// Create function to filter data based on input value and current option\category
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element, get the raw HTML node and get the value property
    const inputValue = d3.select("#category").property("value");

    // Create new variable for filtered data
    let filteredData = tableData;
    console.log(currentOption);

    // Create if condition to filter data that matches inputValue based on current category
    if (currentOption === "datetime") {
        filteredData = filteredData.filter(info => info.datetime === inputValue);
        // Create table with filtered data
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

    
// Select button
var button = d3.selectAll("#filter-btn");

// Select form
var form = d3.selectAll("form");

// Create Listening Event
button.on("click", runEnter);
form.on("submit", runEnter);

// Return to default table
createTable(tableData);