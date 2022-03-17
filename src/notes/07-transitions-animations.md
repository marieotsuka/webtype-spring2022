---
title: "Tweening"
date: 2022-03-17
summary: "CSS transitions, animations, and transforms"
order: 7
category: "terms"
---

## CSS Transitions
Transitions allow (animatable) property changes in CSS values to occur smoothly over a specified duration. Transitions requires a trigger (such as `:hover`) to take effect. They are declared to the element targeted for the change. (Note that by specifying the transition on the element itself, you define the transition to occur in both directions. )

`transition: background-color 1s ease-in 2s;`


\* This is shorthand notation that combines the following properties. The first unit of time is always the duration; the second the delay.

| property | description | example | 
| --- | --- | --- | 
| transition-property| property being transitioned (or use `transition-property: all`) — see [list of properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties) | `transition-property: background-color`|
| transition-duration | duration of effect, in seconds (s) or milliseconds (ms) | `transition-duration: 1s;`|
| transition-timing-function | transition style — see [common easing effects](https://codepen.io/stephengreig/pen/bHzqm) | `transition-timing-function: ease-in; `|
| transition-delay | delay until starting effect, in seconds (s) or milliseconds (ms) | `transition-delay: 2s;`


## CSS Animations

Using just CSS, you can create animation sequences for any element. (Animations allow motion without triggers.)
Animations consist of *two separate sets* of CSS declarations:
- **@keyframes**: specifies the state of the element at a certain time point (relative to defined timing of animation.)
- **animation properties** apply the keyframe animation to one or many elements

```css
@keyframes changecolor {
  0% {
    background-color: blue;
  }
  50% {
    background-color: yellow;
    color: rgba(200,155,20,0.8);
  }
  100% {
    background-color: green;
  }
}

#animated-div{
  animation: changecolor 3.5s linear 0.2s infinite alternate;
}
```

<div id="animated div" style="padding: 1em; margin: 1em; animation: changecolor 3.5s linear 0.2s infinite alternate;">
  Animation Demo
</div>


- `changecolor` is the identifier — your name for the animation. This must match the name used to declare animation properties
- The nested brackets, or keyframes are the timestamps / waypoints in the animation. You can use `from`,`to`, `%` to specify these points.


\*This animation shorthand notation that combines the following properties. The first unit of time is always the duration; the second the delay.

| property | description | example | 
|---|---|---|
| animation-name | identifier given to animation in @keyframes declarations, any name without spaces | `animation-name: changecolor;`|
| animation-duration | duration of animation, which is broken up into the waypoints defined in keyframes, in seconds (s) or milliseconds (ms) | `animation-duration: 3.5s;`|
| animation-timing-function | animation style, same as transitions | `animation-timing-function: linear; `|
| animation-delay | delay until starting animation, in seconds (s) or milliseconds (ms) | `animation-delay: 0.2s;`|
| animation-iteration-count | number of times the animation runs, `infinite` or numbers | `animation-iteration-count: 3;`|
| animation-direction | from what direction the animation begins, `normal`, `reverse`, `alternate`, `alternate-reverse` | `animation-direction: alternate;`|
| animation-play-state |whether to play or pause, `running` (default), `paused` | `animation-play-state: running;`|
| animation-fill-mode | whether to apply styles before and after the animation executes, `none` (default), `forwards`, `backwards`, `both` | `animation-fill-mode: none;`|

### Animations and transforms
Transitions and animations can also be combined with any “animatable” CSS property, but we should be careful as some properties may eat up some of your performance (and your animation may appear choppy.) Not all properties are “animatable.” Transform properties lend well to transitions and animations. Variable font properties can also be animated.


## CSS Transforms 
CSS transform allows you to change the shape and position of HTML elements without disrupting the normal flow. For 2dimensional transforms, the x-value is declared first, then the y-value.

Syntax: `transform: { transform-type(units) }`


### Transform Origin

`transform-origin` specifies the origin point of the transformation performed. This can be specified in multiple forms, including keywords, `%` values, and `px`. It is at the center of the element by default.

```css
.example {
  transform: rotate(-10deg);
  transform-origin: bottom left;
}
```

<div class="diagram" style="height: 150px">
<div class="square dotted" style="position: absolute;">
</div>
<div class="square marked" style="position: absolute; transform: rotate(-10deg); transform-origin: bottom left;">
</div>
</div>

### Rotate
`rotate()` Rotates the div clockwise or counter-clockwise(-), specified in degrees (deg).

```css
.rotate {
  transform: rotate(30deg);
}
```

<div class="diagram" style="height: 150px">
<div class="square dotted" style="position: absolute;">
</div>
<div class="square marked" style="position: absolute; transform: rotate(30deg); ">
</div>
</div>



### 2D Translate
`translate()` moves an element sideways, up, or down. This can be specified in any length unit.

```css
.translate{
  transform: translate(40px, 20px);
}
```

<div class="diagram" style="height: 150px">
<div class="square dotted" style="position: absolute;">
</div>
<div class="square marked" style="position: absolute; transform: translate(40px, 20px);">
</div>
</div>

### Scale
`scale()` stretches an element horizontally and/or vertically. Scale values are unitless. This also applies to the font-size, padding, height, and width of an element.

```css
.scale-preserve-ratio {
  transform: scale(.7);
}

.scale-xy {
  transform: scale(.5, 1.5);
}
```

<div class="diagram" style="height: 150px">
<div class="square dotted" style="position: absolute;">
</div>
<div class="square marked" style="position: absolute; transform: scale(.7);">
</div>
</div>

<div class="diagram" style="height: 150px">
<div class="square dotted" style="position: absolute;">
</div>
<div class="square marked" style="position: absolute; transform: scale(.5, 1.5);">
</div>
</div>


### Skew
`skew()` stretches an element horizontally and/or vertically. Skews are defined in degrees. Contained elements, such as text, will also be skewed.

```css
.skew {
  transform: skew(10deg,30deg);
}
```

<div class="diagram" style="height: 150px">
<div class="square dotted" style="position: absolute;">
</div>
<div class="square marked" style="position: absolute; transform: skew(10deg,30deg);">
</div>
</div>


### Combining transforms

Multiple transforms can be applied to the same element with a space in between. (Note: you cannot declare transforms separately; the latter will override the former.) Transforms are applied in the order they are declared.
[More on transforms](https://learn.shayhowe.com/advanced-html-css/css-transforms/) including perspectival / 3D effects.

```css
.combined-example {
  transform: scale(.3, 1.2) rotate(30deg) skewY(-15deg) translate(50px, 20%);
}
```

<div class="diagram" style="height: 150px">
<div class="square dotted" style="position: absolute;">
</div>
<div class="square marked" style="position: absolute; transform: scale(.3, 1.2) rotate(30deg) skewY(-15deg) translate(50px, 20%);">
</div>
</div>


## CSS Filters

While transforms are one way of modifying the shapes on the page, filters and blend-modes provide similar functions to Photoshop effects and layers.

See [Filter Effects](https://alligator.io/css/css-filter-examples/)

## CSS Blend Modes
Like Layer Styles in Photoshop, you can also use blend-modes to achieve desired overlapping effects.
There are two kinds of blend modes:
- `background-blend-mode` for background images
- `mix-blend-mode` for html elements 

See more about [background blend modes](https://css-tricks.com/almanac/properties/b/background-blend-mode/) and [mix blend modes](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode). 

