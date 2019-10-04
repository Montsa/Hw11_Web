// from data.js
var tableData = data;

// YOUR CODE HERE!

// Create empty arrays to store  values
var datetime = tableData.map(info => info.datetime);
var city = tableData.map(info => info.city);
var state = tableData.map(info => info.state);
var country = tableData.map(info => info.country);
var shape = tableData.map(info => info.shape);
var duration = tableData.map(info => info.durationMinutes);
var comments = tableData.map(info => info.comments);
var DateSelection = {}

// Use D3 to select the table
var table = d3.select("table");

// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped
table.attr("class", "table table-striped");

// Use D3 to select the table body
var tbody = d3.select("tbody");

// // Iterate through each tableData object
// for (var i = 0; i < tableData.length; i++) {
//     // Append one table row `tr` to the table body
//     var row = tbody.append("tr");

//     // Append one cell for the datetime
//     row.append("td").text(datetime[i]);

//     // Append one cell for the city
//     row.append("td").text(city[i]);

//     // Append one cell for the state
//     row.append("td").text(state[i]);

//     // Append one cell for the country
//     row.append("td").text(country[i]);

//     // Append one cell for the shape
//     row.append("td").text(shape[i]);

//     // Append one cell for the duration
//     row.append("td").text(duration[i]);

//     // Append one cell for the comments
//     row.append("td").text(comments[i]);
// }

// Create a custom filtering function
function selectDate() {

    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime").property("value");

  // Get the value property of the input element
  DateSelection = inputElement;
  
// Iterate through each tableData object
for (var i = 0; i < tableData.length; i++) {
    if (datetime[i] == DateSelection) {
        // Append one table row `tr` to the table body
        var row = tbody.append("tr");

        // Append one cell for the datetime
        row.append("td").text(datetime[i]);

        // Append one cell for the city
        row.append("td").text(city[i]);

        // Append one cell for the state
        row.append("td").text(state[i]);

        // Append one cell for the country
        row.append("td").text(country[i]);

        // Append one cell for the shape
        row.append("td").text(shape[i]);

        // Append one cell for the duration
        row.append("td").text(duration[i]);

        // Append one cell for the comments
        row.append("td").text(comments[i]);
        continue;
    }
}

}

// Select the filter button
var filterDate = d3.select("#filter-btn");
// Use D3 `.on` to attach a click handler for the upvote


filterDate.on("click", selectDate);

