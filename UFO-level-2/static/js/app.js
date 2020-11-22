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

function runEnter(){
    d3.event.preventDefault();
    
    const inputValue = d3.select("form>input").property("value");

    console.log(d3.event.target);
    console.log(inputValue);

    let filteredData = tableData

    var selInfo = d3.getElementById("selInfo");

    for (i = 0; i < selInfo.length; i++){
        //examine current option
        currentOption = selLanguage[i];
        //print it if it has been selected
        if (currentOption.selected == true){

            if (inputValue); {
        
        filteredData = filteredData.filter(info => info.datetime === inputValue);

    createTable(filteredData);
}
}

}
}

// Create Listening Event
var button = d3.selectAll("#filter-btn");

var form = d3.selectAll("form")


button.on("click", runEnter);
form.on("submit", runEnter);

// Return to default table
createTable(tableData);