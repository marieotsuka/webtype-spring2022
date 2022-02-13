---
title: "Glossary"
category: "terms"
---

**Tag**
a tag is used for creating an element, which consists of the name of an HTML element in angle brackets. (i.e. `<p>` for paragraph.)

**Element**
An element is a part of a webpage. A typical element includes an opening tag with some attributes, enclosed text content, and a closing tag. (i.e. `<h1 class="news"> Heading </h1>`)

**Attribute**
An attribute extends a tag, changing its behavior or providing metadata. An attribute always has the form `name=value`, such as defining the link location (`<a href="index.html">Link</a>`), setting the image path (`<img src="path-to-image/image.png" />`) or adding a class `<h1 class="news"> Heading </h1>`.

**Parent**
In nested HTML structures, the parent refers to the element that contains another element. i.e. Below, `<article>` is the parent element for `<h1>` and `<p>`.
```html
<article>
	<h1>This is a heading</h1>
	<p>This is a paragraph.</p>
</article>
```
**Child**
In nested HTML structures, the child refers to an element contained (nested within) another element. i.e. Above, `<h1>` and `<p>` are children of the `<article>` element.

**Inline Element** Inline elements are those which only occupy the space bounded by the tags defining the element, instead of breaking the flow of the content. An inline element does not start on a new line and only takes up as much width as necessary. (i.e. `<a>, <img>, <em>, <strong>, <span>`)(Opposite of block level elements)

**Block Element** A block-level element occupies the entire space of its parent element (container), creating a "block." It always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can). You can visualize them as a stack of boxes. (i.e. `<h2>, <p>, <section>, <li>, <div>`)(Opposite of inline elements)

**BoxModel** Every element within a document is structured as a rectangular box inside the document layout. The size and spacing around the box can be tweaked using some specific CSS properties such as `width`, `height`, `padding`, `border`, `margin`, `overflow` (depending on whether the element is `inline` or `block`)

**CSS**
Cascading Style Sheets is a language that controls how webpages look in the browser. A style declaration consists of a selector (the targeted element, i.e. `p`), a property (what you're styling, i.e. `font-size`), and value (how you're styling it, i.e. `1em`)
```css
p { 
	font-size: 1em;
	color: blue;
}

.news {
	font-weight: bold;
}

#intro {
	font-style: italic;
}
```

**class**
Classes allows you to apply a set of styling rules to multiple elements. The CSS class selector matches HTML elements based on the contents of their `class` attribute (`<h1 class="news"> Heading </h1>`). In CSS, you add a period (`.`) before the class name to create a class selector (i.e. `.news`). You can appy multiple classes to an element by space-sparating them. (`<h1 class="news special"> Heading </h1>`).

**id**
IDs allows you to apply a set of styling rules to one specific element in the document. The CSS ID selector matches an HTML element based on the contents of the `id` attribute. (`<p id="intro">Intro paragraph</p>`). In CSS, you add a hashtag (`#`) before the class name to create an ID selector (i.e. `#intro`). Elements can only have one ID.

Definitions adapted from the [MDN Glossary](https://developer.mozilla.org/en-US/docs/Glossary)


