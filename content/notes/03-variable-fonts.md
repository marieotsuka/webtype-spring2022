---
title: "Variable Fonts"
date: 2021-03-25
summary: "Type Design Basics and Variable Fonts"
category: "terms"
---

> “By writing directly into a mechanical form rather than a manuscript (as we’re doing right now) the writer would be working closer to the nature of the multiplied result, and through an increasing awareness and gradual mastery of the form’s new limitations and possibilities \*the writing itself would evolve;\* the shorter the distance between the raw material of words and their processed output, the more entwined the content and form from the outset. This line of thinking was more famously expounded by Benjamin in his 1936 essay ‘The Work of Art in the Age of Mechanical Reproduction,’ which more broadly argues that an authentic, pertinent art is the result of engagement with the latest technological innovations.” — [Dexter Sinister: Letter & Spirit](http://www.servinglibrary.org/journal/3/letter-and-spirit)

For our variable font project, we will be using [Glyphs 2](https://glyphsapp.com/), since RISD provides a site license for this software. Glyphs has some robust [tutorials](https://glyphsapp.com/tutorials) as well as an active [forum](https://forum.glyphsapp.com/), which may be useful in your research.

Below are some key terms we will be using in type design.

* Begin with the Glyphs tutorial on [Multiple Masters](https://glyphsapp.com/tutorials/multiple-masters-part-1-setting-up-masters).
* See also [pixel font tutorial](https://glyphsapp.com/learn/pixelfont)

## Terms

**Design Space**
The range of design variations belonging to one type family.

**Master**
A set of drawn characters. Every typeface needs to have at least one master. When drawing a typeface, you are usually drawing a master.
  - The number of masters will determine the **design space**
  of the typeface.

**Instance**
A specified slice within the design space of the typeface. 
  - Masters are usually also instances, but not necessarily.
  - The type designer determines how many instances will be interpolated from the given masters.

**Interpolation**
The process of programmatically generating instances in-between masters.

**Node**
Any specified point of your glyph. Nodes can be either on-curve or off-curve.
  - A node along the path is called an **Oncurve** point
  - A node off the edge of a path, serving as an endpoint of a handle connected to an oncurve node is called an **Offcurve** point

## Interpolation

In order for a glyph to interpolate across masters, it needs [compatible outlines](https://glyphsapp.com/tutorials/multiple-masters-part-2-keeping-your-outlines-compatible), which means satisfying the following conditions.

**number of paths**
all masters have the same amount of paths, nodes and handles, as well as components

**path order**
all components, paths, nodes and handles are in the same order across all masters. 

**within a path**
Make sure the *triangular node*, which marks the first node, is in the same location for each path across masters. I recommend choosing a specific corner to be consistent (for example, the node that is that the bottom left of the glyph.) To change the first node, right click the node and select *Make Node First*. 

**within a glyph**
Make sure the order of the paths are in the same order. Go to *Filter* > *Fix compatibility* to view the order of your shapes.

**anchors**
all masters have the same set of anchors (Anchors are used to generate diacritic marks. We will not be using anchors for the scope of our project.)

**off-curve compatibility**
avoid off-curves that intersect with each other: keep in mind the invisible triangle formed by your point structures

## Variable Fonts
A single font file contains many different variations of a typeface, instead of having a separate font file for every width, weight, or style. This format was developed in collaboration by Adobe, Apple, Google, and Microsoft.

### Advantages of variable fonts
- Font loading
	- HTTP requests
	- KB of data (depends on character set and design space)
- Purer expression of type design process
- Options

### Disadvantages of variable fonts
- Lack of support
- [Souless clone armies](https://vimeo.com/251494096)

## Variable Fonts and CSS
The properties of variable fonts can be set by CSS, as with any other CSS property. You can serve a variable font in the same way [as any other typeface]({{<ref "/notes/02-css.md#typefaces" >}}); although currently there are still few commercially available variable fonts. 

```css
@font-face {
  font-family: 'Magmatic';
  src: url('../fonts/magmatic-vf.woff2') format('woff2-variations');
}

p{
  font-family: 'Magmatic', sans-serif;
  font-variation-settings: 'wght' 300,'wdth' 120, 'XHGT' 1; 👈
}
```

The `font-variation-settings` is the CSS propety for variable fonts. - Values for multiple axes, are separated by `,`
- Each axes is in in between `''`, with the value after it
- Standard axes for variation are in lowercase,  custom axes are in uppercase.

### Standard (registered) axes
|syntax| description | Non-VF equivalent 
|---|---| ---
|wght| weight | `font-weight` 
|wdth| width | `font-stretch`
|opsz| optical sizing | `<font></font>-optical-sizing`
|ital| italicization | `font-style: italic` 
|slnt| slant | `font-style: oblique ` 

- Read a [caveat for italics](https://rwt.io/typography-tips/getting-bent-current-state-italics-variable-font-support)

## Spacing

If you did not draw a monospace / grid font, you will most likely need to space your glyphs. The overall flow of spacing is as follows:

- Space the control characters, `H` and `O` for uppercase, `n` and `o` for lowercase.
- Space the other characters to be evenly spaced in between these control characters 
- `D` would be spaced by viewing the string `HHDHOHODOO`
- `d` would be spaced by viewing the string `hhdohodoo`

Check out Cyrus Highsmith’s Spacing Manual (sent via Slack) for more detailed instructions on spacing.


## Tools

While Glyphs App has a lot of built-in features, there are a lot small custom  tools that can help supplement the drawing process. See more about [extending Glyphs](https://glyphsapp.com/learn/extending-glyphs)

All scripts you can execute in Glyphs are located in your `/Users/[yourusername]/Library/Application Support/Glyphs/Scripts` folder. You can navigate directly there by clicking `Go > Go to Folder` in your Finder window.

After copying any scripts into that folder, hold down the `Option` key and click `Script > Reload Scripts` (Cmd-Opt-Shift-Y) to refresh your menu.

You can then tie your Scripts to keyboard shortcuts for easy access.

* See more about scripting on the [Glyphs App tutorials](https://glyphsapp.com/learn/scripting-glyphs-part-1)


## Tools and Resources

* [Font Goggles](https://fontgoggles.org/) for desktop viewing
* [Wakamai Fondue](https://wakamaifondue.com/) for a web-based inspector
* [Type-X](https://chrome.google.com/webstore/detail/type-x/bfnfnnicdjkkialkldogjjmmfeiopbin?hl=en) Chrome Extension
* [Dinamo Darkroom](https://dinamodarkroom.com/gauntlet/)
* A [Variable Fonts primer](https://variablefonts.io/)
* See more on [Resources page](/type-help/#type-technology)