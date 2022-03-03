---
title: "Responsive Design"
summary: "A flexible typographic systems"
order: 4
---


Responsive web design refers to the ability of websites to adapt the presentation of content to a range of devices and media.

Responsive design involves:
- meta tag
- fluid layout 
- relative units
- fluid images
- media queries

## Meta tag

Insert this meta tag within the `<head></head>` of all your html pages.
This ensures that the browser will register the physical width of the device’s screen as its screen width.

```
<meta name="viewport" content="width=device-width, initial-scale=1">
```

## Fluid layout

A fluid layout often has: 
- a container element that fills the entire screen size 
- the container element responds to adjustments in browser widths
- widths of the columns nested within the container adjust accordingly
- Review the relative [CSS Units](/notes/02-css#css-size-units) 

The following CSS relative units may be useful for scalable designs.

|unit|description|example|
|---|---|---|
|rem|font size of the root element (html)| `font-size: 2rem;`|
|em|font size of parent element| `font-size: 2em;`|
|vw|1% of viewport’s width| `width: 100vw;`|
|vh |1% viewport’s height| `height: 100vh;`|

*For an example of relative units gone wrong: [Embroidery Trouble Shooting Page](https://web.archive.org/web/20060314044545/http://www.sewingandembroiderywarehouse.com/embtrb.htm)*

## Fluid Images
Any embedded assets, such as images, videos, etc will need to scale appropriately. 

Usually, the image container has defined width. The image itself then has `max-width: 100%;` to scale down if its container resizes, but would never scale up to be larger than its original size.

```HTML
<div class="container">
  <img src="image.png">
</div>
```

```CSS
.container {
  width: 33%;
}

.figure img {
  width: 100%;
}
```

### Retina displays

- 72dpi (dots  / inch, in this case pixels) used to be the standard for screen resolutions. But now with the introduction of mobile devices and retina screens, screen resolutions may be much higher.
- In order to have your images appear crisp on retina screens, you will need to provide higher resolution images (at least 2x large.) Many website prepare multiple versions of the same image so that those on a smaller screen (and a slower connection) will not need to download the higher-res image.
- Read more on various solutions to work with [retina images](https://www.smashingmagazine.com/2012/08/towards-retina-web/).


## Media queries
Media queries are the crux of responsive design. They define the **breakpoints** at which different CSS rules are applied. *Any CSS rule can be adjusted within the media queries.*

You can approach this in two ways.
1. Desktop first, defining `max-width` breakpoints to go smaller 
2. Mobile first, defining `min-width` breakpoints to go larger
    - Sometimes you need to use both `min` and `max`

- Block-level containers are rearranged according to the DOM (HTML structure)
- Breakpoints determine the browser widths at which your containers will rearrange into a single column
- Some text may be shortened or omitted on the mobile website
- See an example of [flexbox and media queries](https://codepen.io/chriscoyier/pen/yCeax)


```CSS
@media screen and (max-width: 480px){ 
  .container{
    width: 100%;
  }
} 
```

Note: nested brackets


## Common Responsive Layout Techniques

- Collapsed menu
- Collapsed columns
- Scaled type sizes
- Adjusted line-height
- Adjusted paragraph widths (measure)
- Shortened words
- Adjusted image sizes


## Reference
- [Ethan Marcotte: Responsive Web Design](https://alistapart.com/article/responsive-web-design/)
- [Smashing Magazine: Responsive Web Design](https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/)
- [Collection of examples](https://mediaqueri.es/)
- [Nick Sherman: Variable Fonts for Responsive Design](https://alistapart.com/blog/post/variable-fonts-for-responsive-design/)
- [Andrew Johnson: Live Interpolation on the Web](https://alistapart.com/article/live-font-interpolation-on-the-web/)
- [Scott Kellum: Fluid typography and the creation of Typetura](https://typetura.scottkellum.com/)

