---
title: "JavaScript"
date: 2022-03-24
summary: "Writing instructions"
order: 8
---

Unlike HTML and CSS, Javascript is a programming language and can perform all sorts of actions. JavaScript is list of instructions to be interpreted and executed by your computer, either by a browser or other JavaScript interpreter (in the command line.) 

- content, HTML
- form, CSS
- **behavior, JavaScript**

Javascript can add interactivity to a page by manipulating the DOM (Document Object Model).
- Access the content of the page
- Modify the content of the page
- Program rules or instructions the browser can follow
- React to events triggered by the user or browser
- Use an API via HTTP(S)


## Setup
Like CSS, JavaScript can be included within the `<head></head>` your `html` file as well as linked as an external file. It can also be included at the bottom of your document, right before the closing `</body>` tag.

```html
<!-- Internal JavaScript -->
<script language="javascript" type="text/javascript">
  JavaScript code 
</script>

<!-- External JavaScript -->
<script language="javascript" src="js/filename.js"></script>
```

## Output
When you instruct Javascript to perform a task, it will usually give you some output, but it won’t automatically display it anywhere. You can verify your result by using the Console of your browser.
```js
<script language="javascript" type="text/javascript">
	console.log("Hello World!");
</script>
```

## Comments
Comments are important to keep your code legible — they help you execute the program in your head.  They’re a great tool to keep track of the purpose of each line of your script. They also help future you (and others) read and understand your code.

```js
<script language="javascript" type="text/javascript">
      
      // ”//” starts a single line comment.

      /* “/*” opens a multiline comment,
         and “*/” closes it. */

</script>
```

## Syntax
A script is a series of instructions that a computer can follow one-by-one. Each individual instruction or step is known as a *statement*. Statements should end with a semicolon (`;`) Statements are composed of *values*, *operators*, *expression*, *keywords*, and *comments*. Semicolons are not needed after curly brackets `}` (except when it is an expression.)

|type|description|example|
|---|---|---|
|values| Fixed values are called *literals*, such as numbers or texts (strings). Variable values are called *variables*.|`"Hello!"` `23`|
|operators| Operators determine the relationship between the left and right side of the operand. There are different categories of operators|`var x = 5;` `(5 + 6) * 9;`|
|expression| An expression is a combination of values, variables, and operators, which computes to a value. The computation is called an evaluation.| `(5 + 6) * 9;` `"Web" + " " + "Design";` `x * 10;`|
|keywords | Keywords are used to identify actions to be performed.| `let x = 5;`|


```js
<script language="javascript" type="text/javascript">

      alert("hi");

      if (…) {
       …
      } else {
       …
      }

      function foo() {
        return true;
      }

      let foo = function() {
        return true;
      }; // this is an expression

      for (let i=0; i < 10; i++) {
         // actions 
      } 

</script>
```

## Data types

### Strings
In programming languages, any textual content that is not part of the programming instructions must be surrounded in single or double quotes (just make sure they match, and that they’re not curly quotes.) 

```js
"Hello World";   // works
'Hi';            // works
"This';         // won’t work
```

### Numbers
Numbers do not need to be surrounded in quotes `""`. 

```js
1    // integers
0.5  // non-integers with decimal digits are called floats
```

### Boolean
A binary value of either `true` or `false`. These are useful for [conditionals](#conditionals).

```js
let x = false;
if (x) {
  // this code is not executed
}
```

### Variables
A variable is a named location for storing a value. That way an unpredictable value can be accessed through a predetermined name; it can serve as a container for anything (numbers, strings, booleans, arrays, other variables.)

```js
let x = 9;
let school = "RISD";
```

### Variable naming conventions
You can call a variable pretty much anything you like, but there are limitations. Generally, you should stick to just using Latin characters (0-9, a-z, A-Z) and the underscore character.
- Avoid underscores at the start of variable names — this is used in certain JavaScript constructs to mean specific things, so may get confusing.
- Avoid numbers at the start of variables.
- A safe convention to stick to is so-called "lower camel case", where you stick together multiple words, using lower case for the whole first word and then capitalize subsequent words. `camelCase`
- Make variable names intuitive, so they describe the data they contain. Avoid single letters/numbers, or big long phrases.
- Variables are case sensitive — so myage is a different variable from myAge.
- Avoid using JavaScript [reserved words](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords) as your variable names — like `var`, `function`, `let`, and `for` — since browsers recognize them as code.


### Arrays
An array is a data type that contains a group of values. This can be a list of anything—strings, integers, variables. An array is defined by a comma-separated list of items in square brackets `[]`.

```js
let colors = ["red","green","blue"];
````

You can access array items by their *index,* or numerical label, inserted between square brackets`[]`. The starting position is `0`, not `1.`  The `length` property will give you the number of items in an array. 

```js
colors[0] // red
colors[1] // green
colors.length // 3
```

### Objects
An object is a collection of data, where each data in the collection has a unique name that identifies it. An object is defined by a comma-separated list of `key: value` pairs in curly brackets `{}`.

```js
let numbers = {e: 2.7183, pi: 3.1416};
```

Each item in the object has a *key* and a *value.* You use the key to get at the value! You can access the value either by a `.` before the key or by inserting the key within square brackets `[]`. If using square brackets, make sure to surround the key in quotes `''`. 
```js
numbers.e // 2.7183
numbers['pi'] // 3.1416
```

## Operators
### Assignment operators
The assignment operator `=` assigns the right-hand value to the left-hand operand.
```js
let name = "Beatrice"; // assigns Beatrice to the name variable
name = "Betty"; // updates the value of name to Betty

let count = 5; //assigns 5 to the variable count
count = count + 3; // updates the count variable by adding 3 to itself. count is now 8. 
```

There is a shorthand for variables to cumulatively assign new values to itself.
```js
count += 3; // same as count = count + 3
count ++; // same as count += 1, or count = count + 1
```

### String operators
The concatenation operator (`+`) concatenates two string values together, returning another string that is the union of the two operand strings. 
```js
var mystring = "alpha";
mystring += "bet"; // evaluates to "alphabet" and assigns this value to mystring.
```

### Comparison operators
Comparison evaluates an expression, returning a boolean, `true` or `false`.
Below are some examples — these are **strict** comparison formats, meaning they will check both the data type and the value.

|operator|description|
|---|---|
|`===`| checks whether they are equal
|`!==`| checks whether they are NOT equal
|`<` or `>`| checks that the number on the left is less than or greater than the right

### Logical operators
Logical operators combine multiple conditions

|operator|description|
|---|---|
|`&&`| logical AND <br> `3 < 5 && 2 > 9 // evaluates to false`
|`||`| logical OR <br> `3 < 5 || 2 > 9 // evaluates to true`


## Conditionals
Conditionals allow you to declare different actions based on different conditions. You can use If `if` / Then `else if` / Else `else` logic to define your scenarios.
```js
let x = 2
if (x === 2) {
  console.log("x is 2");
}
else if (x === 3){
  console.log("x is 3");
}
else {
  console.log("x is neither 2 nor 3");
}
```

## Functions
A function is a set of actions to be performed. These can include built-in functions, like `console.log` or `alert`, or you can define your own function. Most functions are groups of other functions.

After declaring a function, you can execute its statements by calling the function. While it’s possible to call a function before it’s declared, it’s best practice to declare your functions before you call them.

```js
// define custom function we called sayHi. This only defines the function and does not execute it.
function sayHi() { 		
  console.log("Hi!");  // native function console.log
  alert("Hi");  // native function alert
}

//call (execute) the sayHi function
sayHi();			

````

### Parameters and arguments
A function may need inputs to process its statements. These inputs are known as *parameters* and are used as variables in the function’s statements — you can give them whatever name is appropriate. *Arguments* are inputs passed into the function when it is called. When you expect a function to provide an answer or output, it’s know as the *return value*. 

The above function can be re-written to be more general.
```js
//sets up "something" as a parameter.
function saySomething(something) { 	
  console.log(something);	
  alert(something);					
}

//call saySomething function via the function name and parentheses (). 
saySomething("Hi"); // executes the same statements as above
```

You can also define multiple arguments
```js
//define function with parameters width and height
function getArea(width, height) {
   return width*height;
}

//call getArea function with arguments 3 and 5
getArea(3, 5); //returns 15

```

## Loops
For loops allow you to run a function by specifying the number of iterations you want it to repeat; it uses a counter as its condition to run.

```js
// logs "Hello" in the console 5 times
for(var i = 0; i < 5; i++){ // i is the index, or the count value of the loop. It start at 0 and will increment (i++) every iteration, untill it’s no longer < 10.
	console.log(i, "Hello"); 
}
```

Expected output in Console
```
0 Hello
1 Hello
2 Hello
3 Hello
4 Hello
```

## Objects, properties, and methods

Objects are containers for named values, which could *properties* or *methods*.
*Properties* are data (see data types above) associated to the particular object, and *Methods* are specific functions for ane object; both are accessible as *key*s of the object. Below are two examples of JavaScript objects. 

### The Document Object

The most important object in JavaScript is the Document Object: it represents an HTML web page. 
- *Properties* describe characteristics of the current web page (such as the title of the page).
- *Methods* perform tasks associated with the document currently loaded in the browser (such as getting information from a specified element or adding new content).
- *Events*, such as a user clicking or tapping on an element, can be used as triggers for methods

We will use the [jQuery](https://jquery.com/) library to navigate and manipulate the DOM.


### The Math Object
There is a `Math` object in JavaScript can be used to work with numbers, and it comes with several *methods*. The outputs of these can be scaled to your desired range.

|method|description|
|---|---|
|`Math.random()`|generates a number [0, 1) that is, from 0 (inclusive) up to but not including 1 (exclusive).|
|`Math.floor()`|returns the largest integer less than or equal to a given number|
|`parseInt()`|converts its first argument to a string, parses it, and returns an integer or NaN (not a number.)|


```js
// get a random integer between 2 numbers, including the min and max.
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

getRandomNumber(0, 5); // returns a random number: 0, 1, 2, 3, 4, or 5.
```

