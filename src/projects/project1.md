---
draft: false
title: "Querying Media"
date: 2022-02-17
tags: project
layout: page
unit: 1
---

> “In today’s highly commercialised web of multinational corporations, proprietary applications, read-only devices, search algorithms, Content Management Systems, WYSIWYG editors, and digital publishers it becomes an increasingly radical act to hand-code and self-publish experimental web art and writing projects.” <br>—J.R. Carpenter

In this project, you develop a “query” into a typographic medium of your choice, and present your research in a hand-coded, responsive, single-serve site, paying close attention to how your typographic composition reflects different device needs. This site will serve as a customized presentation format for your topic, serving both mobile and desktop audiences. Throughout this process, you will develop an expressive and flexible typographic identity system.

## Project Details

### Possible Research Topics
Use this opportunity to dig deeper into an existing topic of interest around typography and technology. Be sure to take note and cite your sources. The minimum requirement is that your text is at least 500 words.

Please post your [topic here](https://docs.google.com/spreadsheets/d/1QXocofQNNG38kJWQWjjZe7wv4ikc8Ffnzg_6qoxGSqY/edit?usp=sharing) by *Monday, February 21.* If you are having trouble choosing a topic, please reach out and I can help brainstorm. While we will be dedicating the first few weeks to develop this site, you will be presenting this over the course of the semester per the schedule above, as a way for us to familarize ourselves with interesting topics around digital typography and text.

Some topics presented in the past include:

* Methods and considerations of multilingual typesetting
* The relationship of vertical scripts with CSS typesetting
* A deep-dive into the design and use of a particular typeface
* The development of Open Source software and typefaces
* An overview of Susan Kare’s type design and iconography
* The development of unicode and emojis
* The design of multi-script fonts and the efforts of the Noto series
* The digitization of Chinese calligraphy
* An overview of Donald Knuth’s Metafont project
* The history of Optical Character Recognition and the Google Books archive
* Flat design vs. skeumorphism
* The use of machine learning in categorizing typefaces
* A range of bitmap fonts, from icons to pens
* Evolution of color fonts

### Design Questions

* How does the typography respond to the constraints of its displaying device?
* How do you architect a reading experience?
* How is the hierarchy adjusted for differeent environments?

You will be developing a design for two main viewing environments: 1. your browser, and 2. your mobile device. You can choose which format you would prefer to be your default. Typographic content types may include:

- section divisions `<section>`
- headers `<header>, <h1> — <h6>`
- paragraphs `<p>`
- phrases and words of emphasis `<em>, <strong>`
- pull quotes `<blockquote>`
- images and captions `<figure>, <img>, <figcaption>`
- footnotes and source links `<sup>, <a>`

* For this project, aim for considered simplicity — a single, consistently structured page of text (and some images), with careful attention to typographic detail. We will have the chance to explore more experimental layouts and interactivity later in the course.

### Technical Learnings
* Understand the range and use of semantic `html` tags
* Experiment and expand the range of typographic expression through `css`, including scale variation, typefaces choice, hover-states
* Gain fluency in typographic control and laying out of text content
* Utilize CSS positioning, transformations
* Understand how to use `media queries` for responsive design

## Project Schedule

### Week 1: Prepare content, initial design sketches {#week-1}

First, let’s collect the content for your site. Prepare your text and images files, and organize your research.  

Begin designing your content for 2 viewing modes: desktop and mobile. Prepare at least two design approaches. You may not need to typset your entire text; however, we should see the main content types styled. Consider how your are organizing your information — is it sequential, historical, hierarchical, freeform? How do you express your point of view through the way you present this content? Post your design sketches in Figma to the `project-1` channel in Slack.

### Week 2: Prototype in Code, default device {#week-2}

Prototype your content for desktop with HTML & CSS, with careful attention to the way you structure and “chunk” together your code as you anticipate how things transform. You may find that you will need to simplify your design in this process. Pay careful attention to your typography.

Upload your code as a working webpage, and provide a link to it from your class site.

### Week 3: Add responsivity and mobile support {#week-3}

Continue developing your website in code, adding your second breakpoint using `media queries`. Upload your code as a working webpage prior to class. You must have a working link from your class site. Continue using your inspector to fine-tune your typography and layout.

As you refine your mobile site, be sure to test out your site on your phone. Try testing out your site on your friend’s phones. 

### Refinement

Pay careful attention to your typographic details — including punctuation, type hierarchy, the spacing between them and around the page. Make sure the scale of your fonts are optimized both for your mobile and desktop layouts. 

Your topic and final website will be presented via the<br>[presentation schedule](https://docs.google.com/spreadsheets/d/1QXocofQNNG38kJWQWjjZe7wv4ikc8Ffnzg_6qoxGSqY/edit#gid=0)

## Requirements
- Specify a typeface, either imported via Adobe Fonts / Google Fonts or self-hosted via the `@font-face` method
- Use `@media` queries to adapt layouts for different devices
- Have well-defined semantic HTML
- Have appropriate CSS selectors and classes



## Resources
### Open Source Fonts

* [VTF](https://velvetyne.fr/)
* [FreeFontLibrary](https://typotheque.luuse.fun/)
* [Open Foundry](https://open-foundry.com/)
* [Adobe Fonts](https://fonts.adobe.com/) 
* [Google Fonts](https://fonts.google.com/)
* [Google Fonts Korean](https://googlefonts.github.io/korean/)
* [Google Fonts Chinese](https://googlefonts.github.io/chinese/)
* [Future Fonts](https://www.futurefonts.xyz/)
* [Use & Modify](http://usemodify.com/)
* [Collletttivo](http://collletttivo.it/)
* [⚧ LIBRE FONTS BY WOMXN](https://www.design-research.be/by-womxn/)
* [OSP Kitchen](http://osp.kitchen/)
* [League of Movable Type](https://www.theleagueofmoveabletype.com/manifesto)
* [Font Squirrel](https://www.fontsquirrel.com/) and their [webfont generator](http://www.fontsquirrel.com/tools/webfont-generator)


### Technical Resources

#### ※ you can see [class resources here](/resources/).
* Typewolf’s [Typographic Cheat Sheet](https://www.typewolf.com/cheatsheet)
* Matthew Butterick’s [Typography for Lawyers](https://typographyforlawyers.com/)
* @fontface on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face) 
* @fontface on [W3Schools](https://www.w3schools.com/cssref/css3_pr_font-face_rule.asp)
* How to use [Adobe Fonts](https://helpx.adobe.com/fonts/using/add-fonts-website.html)
* [CSS Fontstack](https://www.cssfontstack.com/)
* [Learn Layout](https://learnlayout.com/)
* A List Apart’s [Responsive Web Design](http://alistapart.com/article/responsive-web-design/) 

### Site reference

#### Online publications on the arts
* [Lined Unlined](https://linedandunlined.com/)
* [Rhizome](https://rhizome.org/)
* [E-flux](https://www.e-flux.com/)
* [Triple Canopy](https://www.canopycanopycanopy.com/)

#### Relationships betweeen image, text, footnotes
* [Altered States](https://alteredstates.risdmuseum.org/altered-states/)
* [In Terms of Performance](http://intermsofperformance.site/)
* [Kameelah Janan Rasheed](https://kameelahr.com/Ethos)

#### Alternate scrolls
* [Untold Stories](http://www.untold-stories.net/)
* [YES YES YES](http://www.yesalternativepress.com/)
* [NYT Climate Change](https://www.nytimes.com/interactive/2021/12/13/opinion/climate-change-effects-countries.html)
* [Fikra Biennial](https://fikrabiennial.com/)

#### Zines
* [HTML Output](http://htmloutput.risd.gd/)
* [New Design Congress](https://newdesigncongress.org/en/)
* [Alex Heeyon Kil](https://www.alexheeyeonkil.com/)
* [more* Workshop with Mindy Seu](https://multidimensional.link/southland)
* [Collective Black People Movement](https://www.cbpm.org/files/BlackOrganizations.html)
* [Made with MSG](http://madewithmsg.com/)
* [Responsive Logos](http://www.fridamedrano.com/4wall.html)

