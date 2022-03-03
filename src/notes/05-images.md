---
title: "Image Optimization"
summary: "Optimizing your images for the web"
order: 5
---

## Image formats
In order keep file sizes to a minimum but retain the quality needed, make sure you are saving your images in the right image format. 

### Raster / Bitmap
A raster graphics image, or bitmap, is a dot matrix data structure representing a generally rectangular grid of pixels, or points of color, viewable via a monitor, paper, or other display medium. Raster graphics are resolution dependent. They cannot scale up without loss of quality. (`.jpg`, `.gif`, `.png`, `.webp`) 

Main file formats for raster images on the web: PNG, GIF, and JPG. 
- JPG best for photography and detailed line art with subtle shifts in tonal range. 
- PNG is best suited for logos and shapes with a few number of colors. PNGs allow for transparency. 
- GIF is best for solid blocks of color. Is similar to PNG and allows for transparency, but has animation capabilities.
- WEBP is intended to substitute all of the above with better compression, developed by Google. It is not supported in older browsers.

### Vector
Use geometrical primitives like points, lines, curves and shapes that can be mathematically expressed to represent them in a graphic. Thus vector graphics are not resolution dependent. They can scale up or down without loss in quality. (i.e. `.svg`, and font files)

- SVGs are a great way to display outline / vector-based graphics. You can even style SVGs in your stylesheet if you embed the SVG code itself (instead of loading it in via an `<img>` tag.)

You can always use [CSS shapes](https://css-tricks.com/the-shapes-of-css/) for simple color blocks.

## Compression
Image compression algorithms seek to eliminate or reduce redundancy in the image data in order to be able to store or transmit data efficiently. 

Photoshop’s *Save for Web* function helps you determine optimal compression.


## Reference
- [Web.dev: Optimize your Images](https://web.dev/fast/#optimize-your-images)
- [MDN: Image file type and format guide](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types)
- [Chen Hui Jing: Using Responsive Images Now](https://alistapart.com/article/using-responsive-images-now/)

