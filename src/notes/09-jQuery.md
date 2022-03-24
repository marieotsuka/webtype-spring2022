---
title: "jQuery"
date: 2022-03-24
order: 9
---

## jQuery is an API for writing JavaScript

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
```js
<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
```


### How to use jQuery

When you write JavaScript using jQuery, you should always wrap the JavaScript in a special jQuery function that waits to run the code until the rest of the document (DOM) has finished loading.

```js
$(document).ready(function() {
  // Your JavaScript goes here.
});
```

You might also see the shorthand for this:
```js
$(function() {
  // Your JavaScript goes here.
});
```

The jQuery basic syntax is `$(selector).action()`:

- `$` sign define jQuery.
- A `(selector)` defines “query (or find)” HTML elements
- A `action()` to be performed on the elements.

