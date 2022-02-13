---
title: "Layouts and Structure"
date: 2021-03-05
summary: "Positioning, layouts, and responsive design"
---

## Normal Flow

With HTML, the normal flow is a top-to-bottom rendering of the elements.

Every block-level element appears on a new line, causing each item to appear lower down the page than the previous one. *Inline elements appear adjacent to each other.* 

```HTML
<h1>Normal Flow</h1>
<p>
  With HTML, the normal flow is a top-to-bottom rendering of the html file.
</p>
<p>
  Every block-level element appears on a new line, causing each item to appear lower down the page than the previous one. <em> Inline elements appear adjacent to each other.</em>
</p>
```

- This depends on the default `display` property of each element. Review: [Inline vs. Block Elements]({{<ref "01-html.md#inline-vs-block-elements">}})


## Change the Display properity

Any element’s display property can be changed by overriding the default behavior with CSS. 

For example, `<div>` elements by default have the property `display: block;`, for example, but this can be adjusted by adding `display: inline` and specifying a `width` property for `div` in CSS.

- `inline` displays an element as an inline element (ex. `li{ display: inline; }`)
- `block` displays an element as a block element (ex. `img{ display: block; }`)
- `inline-block` displays an element as an inline-level block container. The inside of this block is formatted as block-level box, and the element itself is formatted as an inline-level box (ex. `div.columns{ display: inline-block; }`) and allows you to define a width and height. 
  - Note: Because it is an inline element, white spaces between elements are treated in the same way as white spaces between words of text. You may get unwanted gaps appearing between elements.
- There are [other possible properties](https://developer.mozilla.org/en-US/docs/Web/CSS/display) for `display`. 

# Positioning

``` static | relative | absolute | fixed ```

Positioning allows you to control the layout of a page using the position property. Positioning allows you to establish elements independent of the normal flow. By default, all elements have a `position: static` CSS property which gives them their normal flow.

## Relative Positioning
This offsets an element from the position it would be in normal flow, shifting it to the top, right, bottom, or left of where it would have been placed. This does not affect the position of surrounding elements; they stay in the position they would be in in normal flow.

```HTML
<div>...</div>
<div class="example">...</div>
<div>...</div>
```

```CSS
.example {
  background: blue;
  position: relative; 
  top: -15px;
  left: 100px;
}
```

<div class="diagram">
  <div class="line"></div>
  <div class="line marked" style=" position: relative;
  top: -15px;
  left: 100px;"></div>
  <div class="line"></div>
</div>

## Absolute Positioning
The element’s box is completely removed from the flow of the document and positioned with respect to its [containing block](#the-container), which may be another element in the document or the initial containing block. Whatever space the element might have occupied in the normal document flow is closed up, as though the element did not exist. 

```HTML
<div>...</div>
<div class="example">...</div>
<div>...</div>
```

```CSS
.example {
  background: red;
  position: absolute; 
  top: 0; 
  right: 0;
  width: 60%;
}
```

<div class="diagram">
  <div class="line"></div>
  <div class="line marked" style="background: red; position: absolute; top: 0;
  right: 0;
  width: 60%; "></div>
  <div class="line"></div>
</div>

## Fixed Positioning
The element’s box behaves as though it were set to absolute, but its containing block is the viewport.
Viewport refers to the boundaries of browser window. This means that fixed position elements don’t move when the page is scrolled, because it is always relative to the window (instead of the document.)

```HTML
<div>...</div>
<div class="example">...</div>
<div>...</div>
```

```CSS
.example {
  background: blue;
  position: fixed; 
  bottom: 0;
  right: 0;
  width: 40px;
}
```

<div class="diagram">
  <div class="line"></div>
  <div class="line" style="background: grey; position: fixed; bottom: 0;
  right: 0;
  width: 40px; "></div>
  <div class="line"></div>
</div>

### Z-index

The `z-index` value specifies the stack order of an element for any non-standard positioned elements. This is similar to how layers work in Photoshop. 

An element with a bigger number is always in front of an element with a smaller number. 

The default is 0. It is good to use intervals of 10 in case additional elements need to be placed in between.


```HTML
<div class="square">...</div>
<div class="square">...</div>
<div class="square" >...</div>
```

```CSS
.square{
  width: 80px;
  height: 80px;
  background: grey;
  display: inline-block;
}

.square:nth-child(2) {
  background: blue;
  z-index: 10; 
  position: relative;
  top: 40px;
  left: -40px;
}

.square:nth-child(3) {
  position: relative;
  top: 80px;
  left: -80px;
}
```

<div class="diagram" style="height: 200px;">
  <div class="square" style="display: inline-block;"></div>
  <div class="square marked" style="display: inline-block; position: relative; top: 40px; left:-40px; z-index: 10;"></div>
  <div class="square" style="display: inline-block; position: relative; top: 80px; left:-80px;"></div>
</div>

## The Container
When positioining elements, the containing block / parent is your positioning context or reference point.
- Elements can be visually positioned outside of their containing block, but still operate with the same parent-childe relationship. 
- For relatively positioned elements, the containing block is formed by the content edge of the nearest `block`-level, `tablecell`, or `inline-block` parent. The reference point is the position the block would take if it were not moved.
- For absolutely positioned elements the containing block is set to the nearest ancestor (of any kind) that has a position value other than static (which is the default.)
  - Note: ancestor, not necessarily parent (since parent may have static positioning)
  - If the ancestor is `block`-level, the containing block is set to that element’s padding edge; in other words, the area that would be bounded by a border. 
  - If the ancestor is `inline`-level, the containing block is set to the content edge of the ancestor. 


## Overflow
```visible | hidden | scroll | auto | inherit```

Overflow accounts for when your content doesn’t fit within the container and specifies how the text overflows.

```HTML
<div class="container">
  <div class="line">...</div>
  <div class="line">...</div>
  <div class="line">...</div>
</div>
```

```CSS
.container {
  overflow: hidden; 
  height: 80px;
}

.line {
  height: 1.5em;
  background: #e6e6e6;
  margin-bottom: .5em;
}
```

<div class="diagram" style="overflow: hidden; height: 80px;">
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
</div>


# Hierarchy & Structure

Visual hierarchy is the order in which the eye perceives what it sees. This order is created by visual contrast between forms in a perceptual field.

- Read more about typography and visual hierarchy with [Ellen Lupton: Thinking with Type](http://thinkingwithtype.com/text/#line-spacing)

### Content Types
*Structure within a chunk of content:* the typographic organization of repeating groups of text. In order to structure your typography, we can begin to identify what categories of content there are.

- What types of content tend to be chunked together?
- What "metadata" is important?
- How can this pattern be abstracted and reused?
- Read more about [Content Display Patterns](https://superfriendlydesign.systems/articles/content-display-patterns/)

### Wireframes
*Structure within a page:* the visual organization of display patterns laid out within a webpage. Different types of pages will have diffent skeletons.

### Sitemap
*Structure within a website:* the organization of sections of content within a website. 

- All of these structures will inform your HTML markup, or how the elements are nested within another.

## Grids and Columns

### CSS Grid
CSS Grid allows you to define the column-row structure for all of your content. By declaring  `display: grid` on a container element, child elements need to be defined where they align to on the grid.
- [Learn CSS Grid](https://learncssgrid.com/)
- Read more on [CSS Grid properties](https://css-tricks.com/snippets/css/complete-guide-grid/)
- Tutorial: [CSS Grid Garden](https://cssgridgarden.com/)

```HTML
<div class="container">
  <div class="cell item">
    .item
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
  <div class="cell">
  </div>
</div>
```

```CSS
.container {
  display: grid; 
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 2fr 1fr;
  column-gap: .5em;
  height: 200px;
}
 
.item {
  grid-column-start: 1;
  grid-column-end: 4;
}
```

<div class="diagram" style="display: grid; grid-template-columns: repeat(4, 1fr); grid-template-rows: 2fr 1fr; column-gap: .5em; height: 200px;" >
  <div class="line" style="height: auto; grid-column-start: 1; grid-column-end: 4;"> .item
  </div>
  <div class="line" style="height: auto;">
    
  </div>
  <div class="line" style="height: auto;">
    
  </div>
  <div class="line" style="height: auto;">
    
  </div>
  <div class="line" style="height: auto;">
    
  </div>
  <div class="line" style="height: auto;">
    
  </div>
</div>

### Flexbox model
Flex box is a popular method for creating “flexible” columns of containers. By declaring `display: flex` on a container element, child elements could be made to shrink or expand according to specified properties. 

- See [how it works](http://learnlayout.com/flexbox.html)
- Read more on [flex-box properties](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- A starting point for a [responsive flex grid](https://css-tricks.com/dont-overthink-flexbox-grids/)
- Tutorial: [Flexbox Froggy](https://flexboxfroggy.com/)

```HTML
<div class="container">
  <div class="col">
    stuff
  </div>
  <div class="col">
    stuff
  </div>
  <div class="col">
    stuff
  </div>
</div>
```

```CSS
.container{
  display: flex; 
  column-gap: .5em;
}

.col{
  flex: 1;
}

```

<div class="diagram" style="display: flex; column-gap: .5em;">
  <div class="line" style="flex: 1; margin-right: 0.5em;">
    stuff
  </div>
  <div class="line" style="flex: 1; margin-right: 0.5em;">
    stuff
  </div>
  <div class="line" style="flex: 1">
    stuff
  </div>
</div>

- container element still is set to fill the entire document width and has the property `display: flex; `
- elements within the container will automatically scale to fit the available width, unless specified
- advantage: you can combine a fixed-width column and a responsive, scalable column (instead of having both be percentage-based)

### Grid vs. Flexbox
- CSS Grid is better used for defining larger content areas
- CSS Flexbox is better suited for organizing chunks within those areas
