---
title: "CSS Basics"
date: 2021-03-05
summary: "Basic syntax, inheritance, the cascade, and selectors"
reference: 
 - title: "The Cascade"
   link: "https://miro.medium.com/max/1000/1*X8t46W-iH2VGgYOB5aG1nA.jpeg"
 - title: "Color names"
   link: "http://www.colors.commutercreative.com/grid/"
 - title: "Box Model"
   link: "https://css-tricks.com/the-css-box-model/"
 - title: "Collapsing Margins"
   link: "https://css-tricks.com/what-you-should-know-about-collapsing-margins/"
---


CSS is the language determining the look and feel of HTML elements.
Every element in web design is a rectangular box styled with CSS.

- content, HTML
- **form, CSS**
- behavior, JavaScript


## Cascading Stylesheets

CSS = **C**ascading **S**tyle**s**heets

CSS defines the form of a website’s content by listing rules for how elements should appear.

```
p {
  color: blue;
}
```

### Anatomy
- **selector** (targeted html element)  `p`
- opening curly brackets `{`
- **declaration** (rules applied to that element) `color: blue;`
	- **property** what you’re formatting, such as size and color) `color`
	- colon  `:`
 	- **value** (what you’re setting the specified property to be)`blue`
	- semicolon `;`
- closing curly brackets `}`

## Inline CSS

Inline styles are specified as an attribute inside of an individual HTML element with the syntax style="property: value;" and applies only to that element. This is the least desirable way, as it can be inefficient and lead to inconsistencies.

`<p style= "color: blue;"> First paragraph text. </p>`
`<p> Second paragraph text. </p>`

<p style= "color: blue;">First paragraph text.</p>
Second paragraph text.


## Internal CSS

Internal CSS is declared within the head of the document. Selectors apply to all instances of that page. This keeps the HTML markup clean and uncluttered. It’s much more efficient than inline styling, but not as effective as external stylesheets.
```
<html>
<head>
	<style type="text/css">
		p  {
		 color: blue;
		}
	</style>
</head>
<body>
  <p>First paragraph text.</p>
  <p>Second paragraph text.</p>
</body>
</html>
```


## External CSS
External CSS keeps all css declarations in a separate document that gets pulled into the webpage with  `<link rel="stylesheet" type="text/css" href="styles.css">` 

Selectors apply to *all instances of elements in all webpages that use the same stylesheet*. This method is the ideal method of formatting your site, since it ensures consistency across pages. It also keeps things flexible: by changing one property in the external stylesheet, all instances could be easily changed.
 

## Inheritance

Inheritance refers to how children take on css properties of their parents if they don’t have that property specified. Not all css declarations are inherited.  


```CSS
div {
  color: blue;
  border: 1px solid gray;
}

span {
  color: red;
}
```


<h1>Cascading <span>Style</span> Sheets</h1>

## The Cascade 

Cascade refers to the way the stylesheet processes and assigns weights to rules that apply to the same element, ultimately determining which properties will modify a given element. 

### Origin 
Stylesheets may come from 3 different sources, processed in the following order
1. **User agent** The browser’s default style sheet.
2. **User** Such as the user’s browser options.
3. **Author** This is the CSS provided by the page (whether inline, embedded or external.) Inline > Internal > External 

### Specificity
when rules within the same stylesheet conflict, the type of selector determines which has more weight

### Rule order
between style rules of identical weight, last one wins

※ note: the `!important` rule allows overrides to this hierarchy, but should be used sparingly

## Selectors

By understanding inheritance and the cascade, we can write overarching rules that apply to most elements, then override the properties on individual elements. Selectors help tailor our rules to define specific elements. The more specific the selector, the higher its priority.

### Element selector
We’ve already seen the type selector that matches element names. 

```CSS
h2 {
	font-size: 3em;
}
```

### Multiple selection
By separating selectors with commas, you can apply the same rule to multiple HTML elements.

```CSS
h2, .introduction {
	font-size: 3em;
}
```

### Classes and IDs

By assigning a **class** to elements (with the `class` attribute) in your HTML, we can apply your rule to just elements that have that particular class. In your stylesheet, all class names are preceded by a period (`.`). 


```CSS
.highlight {
	background: yellow;
}

#demo {
	font-weight: bold;
}
```


```HTML
<p id="demo">This is Demo text </p>
<p class="highlight"> Paragraph text 1 </p>
<p> Paragraph text 2 </p>
<ul>
	<li class="highlight">List item 1 </li>
	<li>List item 2</li>
	<li>List item 3</li>
</ul>
```


**Ids** work similarly to classes, but only one element may be given a particular id. You define id names by preceding them with a hash symbol (`#`) 

- Class and IDs names should not include spaces or weird characters. 


## Use the Inspector
The element inspector is a great way to verify the CSS properties applied to your elements.
When thinking about CSS properties, imagine that there is an invisible box around each HTML element.

## Understanding CSS Properties
Color, text, and the box model

### Color
Color can be specified in various formats. You can inspect color codes by using the color picker in your dev tools (inspector.)

|format|sample syntax|
|--- |--- |
|RGB(A)| `color: rgb (255,0,0); color: rgba (255,0,0,0.5);` |
|HSL(A)| `color: hsl(0,100%,50%); color: hsla(0,100%,50%,0.5);`|
|Hex| `color: #ff0000; color: #f00;`|
|Color name| `color: red;`|

※ note: the `color` css property only specifies the foreground text-color of elements. Use `background-color` to specify the color of your entire element area.


## Text
Some common text-styling properties:

|property|description|possible values|
|--- |--- |--- |
|`text-align`|alignment of text|left, right, center, justify|
|`font-family`|what typeface|see typefaces|
|`font-size`|text size|see units|
|`font-weight`|the weight of your type|normal, bolder, 700|
|`font-style`|text formatting|normal, italic, oblique|
|`line-height`|“leading” or height of box surrounding line|best declared unit-less, relative to font (see why)|
|`text-transform`|text case|capitalize, uppercase, lowercase, none|


## Typefaces
There are 3 primary sources of fonts from which you can choose:

- **System fonts** These are fonts installed on the computer. If you specify on a font that exists on your system, your website visitors must also have the font installed on their machine. There are several fonts known to be installed across Windows and Mac computers, such as Arial, Helvetica, Times New Roman, Georgia, Verdana. Choices are limited.
- **Externally hosted webfonts** Google Fonts & Adobe Fonts offer services with easy implementation — simply copy/paste the provided code.
- **Self-hosted webfonts** if you upload your own font files, you can use the `@font-face` rule. [Font Squirrel](http://www.fontsquirrel.com/tools/webfont-generator) has a web font generator that converts desktop fonts to web font formats, but you may not have the permissions. 

Read more on [How to use custom fonts](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts) on your website.


## CSS Size Units
|unit|description|
|---|---|
|`px`| absolute measurements, only relative to the resolution of the screen. The same type size will look larger when a screen has a resolution of 800x600 than it would when it is 1280x800.
|`em`| ratio relative to the element’s immediate parent container 
|`rem`| ratio relative to the document root size
|`%`| percentage ratio relative to the element’s immediate parent container, based on the size of same property of the parent element
|`vw` or `vh`| 1 viewport unit is 1% of the window width or line-height

## The Box Model
The [box model](https://css-tricks.com/the-css-box-model/) refers to how block-level elements can be controlled. 

Components of the box model
- margin: the space around the element; between the element and its surrounding elementts
- border: a line surrounding the element width
- padding: the space between the content and the edge of the element (or border)
- content: the actual content / text within the element
- width: the width of the content\*
- height: the height of the content\*


```
.box {
  width: 300px;
  height: 200px;
  border: 6px solid coral;
  background: pink;
  padding: 10px;
  margin: 5px 20px 30px auto;
}
```

<div style="width: 300px; height: 200px; border: 6px solid coral; background: pink; padding: 10px; margin: 5px 20px 30px auto;">
</div>


### Box-Model Adjustment

If you found the box model (in which the padding and border are outside of the element dimensions) to be unintuitive, you can use the `box-sizing` property. Setting this to `border-box` includes the padding and border width in the element width. So when you set `box-sizing: border-box;` on an element, the padding and border of that element no longer increase its width or height. More on box-sizing.
	
`box-sizing: border-box;`

### Collapsing margins
Collapsing margins, where two margins cancel out each other,  happens in 2 cases:

- When two vertical margins come in contact with one another. If one margin is greater than the other, then that margin overrides the other, leaving one margin.
-  Collapsing margins also occur when the margin of a child element crosses the margin of its parent. 

See examples of [collapsed margins](https://css-tricks.com/what-you-should-know-about-collapsing-margins/)


## Advanced Selectors
You could also use the structure of HTML to select elements in CSS. These include:

### Relationship Selectors

|Selector|Description|Sample Syntax|
|---|---|---|
|child `>`|matches an element that is a direct child of another|`li>a`|
|descendant ` `|matches an element that is a descendent of another, not just a direct child|`p a`|
|adjacent sibling selector `+`|matches only the specified element that immediately follows the former specified element|`h1+p`|
|general sibling selector `~`|matches the second element only if it is preceded by the first, and both share a common parent|`h1~p`|


### Attribute Selectors
If you want to select elements based on their attributes, you can use an attribute selector. 

|Selector|Description|Sample Syntax|
|---|---|---|
|existence `[attr]`|matches a specific attribute (regardless of value)|`a[target]`|
|equality `[attr="value"]`| matches a specific attribute with a specific value (needs to match exactly)|`a[target="_blank"]`|
|substring `[attr*="value"]`| matches a specific attribute whose value contains a specific substring (the specified string of letters appears somewhere in the value)|`img[alt*="art"]`|


- See full list of [attribute selectors](https://css-tricks.com/almanac/selectors/a/attribute/).

Note: `h1#page-title` and `h1[id="page-title"]` are both selectors using the `id` attribute. But the latter is more specific; with conflicting rules, the latter will override the former.	

### Pseudo-classes
A CSS pseudo-class is a keyword added to selectors that specifies a special state of the element to be selected. 
The most popular use of pseudo selectors are in links. Browsers typically show text links in blue with an underline text decoration; visited links are purple. To customize this, you can target those elements using pseudo-classes, denoted by a `:` after the element. 

```
a:link {
  color: red;
  text-decoration: underline;
}
a:visited {
  color: black;
}
a:hover {
  color: green;
  text-decoration: none;
}
a:active {
  color: blue;
  text-decoration: underline;
} 

```

### Structural Pseudo-classes
You can use pseudo selectors to target specific children of parent elements.

|Selector|Description|Sample Syntax|
|---|---|---|
|First child `element:first-child`|matches the first child element, regardless of type, in a parent element|`li:first-child`
|Last child `element:last-child`|matches the last child element, regardless of type, in a parent element|`li:last-child`
|Nth child `element:nth-child(_)`|matches a child element in relation to its position within the parent element — accepts numerals, formulas, and keywords|`li:nth-child(2)`

We might use it to style alternate rows in a table:
```
tr:nth-child(even) {
  background: #EEE;
}
```

### Pseudo-elements

Pseudo-elements allow you to style specific parts of an element or generate content around an element. 

```
p.note::before {
  content: "Note: ";
  font-weight: bold;
}
```
- More on pseudo-elements and [things you can do with them](https://css-tricks.com/pseudo-element-roundup/).

