---
title: "APIs"
date: 2022-04-21
summary: "Objects in JavaScript"
---

## JSON

JSON stands for JavaScript Object Notation is a standard text-based format for representing structured data based on JavaScript object syntax. JSON is widely used for storing, serializing, and transmitting structured data. 

JSON data is usaually loaded as an external file or request it from an API. 
You can:
- download a JSON from an online dataset 
- convert a CSV file via an [online converter](https://www.csvjson.com/csv2json)
- create your own data with Google Spreadsheets / Microsoft Excel, export as CSV, then convert to JSON

If you make your own file, make sure your JSON data is properly formatted, using tools such as [JSONLint](https://jsonlint.com/) to validate your JSON.

A JSON file will look like following, as a set of objects with properties defined in `"key":"value"` pairs.

```
{
  "r": "red",
  "g": "green",
  "b": "blue"
}
```

All property names have to be surrounded by double quotes, and only simple data expressions are allowed—no function calls, bindings, or anything that involves actual computation. Comments are not allowed in JSON.

Review how to access object items with the [JavaScript — Data Types](/lectures/07-javascript/#data-types), or read more on [Eloquent Javascript](https://eloquentjavascript.net/04_data.html#h_cqg63Sxe3o).


### How to implement JSON

First, be sure to setup a [local server](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server) at the root of your web folder to properly load JSON.

To load JSON data using jQuery, use the `getJSON()` or `ajax()` method. The `jQuery.getJSON( )` method loads JSON data from the server using a GET HTTP request.

```html
<!DOCTYPE html>
<html>
<head>
  <title>How to implement jQuery</title>
  <script src="/common/jquery-3.4.1.min.js"></script>
  <script>
         $(document).ready(function() {
            $("button").click(function(event){
               $.getJSON('yourjson.json', function(mycolor) {
                  $('#color').html('<p>Red:' + mycolor.r+ '</p>');
                  $('#color').append('<p>Green:' + mycolor.g+ '</p>');
                  $('#color').append('<p>Blue:' + mycolor.b+ '</p>');
               });
            });
               
         });
      </script>
</head>
<body>
      <div id="color">
         Color
      </div>
      <button></button>
</body>
</html>
```

* [Open Weather Map](https://openweathermap.org/)
* [RiTa.js](https://rednoise.org/rita/)
* [Data.gov APIs](https://www.data.gov/developers/apis)
* [API List](https://apilist.fun/)

