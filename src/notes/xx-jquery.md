---
title: "jQuery and JSON"
date: 2021-04-08
summary: "Objects in JavaScript"
draft: true
---

## jQuery

jQuery is an easier way to write JavaScript: it is a JavaScript Library (think “plugin”) — a library of pre-written JavaScript which allows for easier development of JavaScript-based applications. jQuery is basically JavaScript, but it takes a lot of common tasks that require many lines of JavaScript code to process, and wraps them into *methods* that you can call with a single line of code.

### Document Object Model

The DOM represents the document as nodes and objects. In this way, programming languages can connect to the page. When a web page is loaded, the browser builds up a model of the document’s structure and uses this model to draw the page on the screen.

You can think a HTML document as a nested stracture of html as a tree of objects. Here’s an example document:

```html
<!doctype html>
<html>
  <head>
    <title>DOM tree example</title>
  </head>
  <body>
    <h1>Title goes here</h1>
    <h2>Subtitle goes here</h2>
    <p>Body goes here with a <a>link</a></p>
  </body>
</html>
```

### How to implement jQuery

You can either [download jQuery](https://jquery.com/download) or import it from a CDN.

*Download*: Select the “compressed, production jQuery” package of the latest version. Locate the jQuery script you download into your project’s JavaScript folder, and link to it before including your own JavaScript files.

```html
<!DOCTYPE html>
<html>
<head>
  <title>How to implment jQuery</title>
  <script src="js/jquery-3.4.1.min.js"></script>
  <script src="js/yourscript.js"></script>
</head>
<body>
...
</body>
</html>
```

If you don’t want to download and host jQuery yourself, you can include it from a CDN (stands for Content Delivery Network). It means a system of computers that exist all over the world and cache files for users to access. CDNs can reduce the load time of a page by offering files at a higher bandwidth from a server that is physically closer to your visitor than your web server might be. The jQuery library will already be cached in the visitor’s browser if they visited another website that references the same jQuery library. In this case, the visitor won’t even have to download the jQuery library.

You can copy-paste the [jQuery CDN](https://code.jquery.com/) into the `<head></head>` of your document.
```
<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
```


### How to use jQuery

When you write JavaScript using jQuery, you should always wrap the JavaScript in a special jQuery function that waits to run the code until the rest of the document (DOM) has finished loading.

```js
$(function() {
  // Your JavaScript goes here.
});
```

The jQuery basic syntax is `$(selector).action()`:

- `$` sign define jQuery.
- A `(selector)` defines “query (or find)” HTML elements
- A `action()` to be performed on the element's.


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

