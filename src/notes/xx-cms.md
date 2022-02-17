---
title: "Content Management Systems"
date: 2020-04-16
draft: true
summary: "aesthetics and governance"
reference:
  - title: "Yale School of Art"
    link: "https://www.art.yale.edu/"
  - title: "Parsons School of Design Thesis 2019"
    link: "https://bfacd.parsons.edu/"
---

> “... there's a fuzzy spectrum between graphic design, which might ask: ‘what does the interface look like?’, and software design, which asks: ‘what's the algorithm beneath the surface that's organizing the data.’”
– Dan Michaelson

[Dan Michaelson interviewed by Jack Balkin: Sometimes it looks like a duck, sometimes it looks like a rabbit](http://linkedbyair.net/balkin.pdf) 

A Content Management System, or CMS, is a platform that allows you to generate websites without directly writing the HTML. Using a content management system allows several additional functionalities. It can:
- allow you to build a generative system for your website
- breakdown your pages into constants and variables: parts that remain the same, and parts that change according to the page
- manage collaborative authoring: ability for multiple editors to modify the website


Some common CMSes include:
- [WordPress](https://wordpress.org/)
- [Squarespace](https://www.squarespace.com/)
- [Cargo](https://cargo.site/)
- [Persona](https://persona.co/)
- [Kirby](http://getkirby.com/)
- [Jekyll](https://jekyllrb.com/) 
- [Craft](https://craftcms.com/) 
- [Hugo](https://gohugo.io/)
- [Grav](https://getgrav.org/) 
- [Pelican](http://docs.getpelican.com/en/stable/)
- [Ghost](https://ghost.org/)

There is a large variety of CMSes with a wide range of features; however, *there is no perfect CMS.* Because a CMS handles the *process* of how to creat a website, it does not necessarily impact the output or design. Since the workflow and flexibility with which you might need to create a website differs according to project, it is important that you understand these parameters before selecting a CMS.

Every CMS consists of three main components.

## Generator / Back-end language
Building with a CMS entails breaking down your website into components; so 
every CMS needs a script that runs and compiles the parts into a website.
There are different models on how these components are organized (in a database vs. folders, or flat files) and how these are accessed (`php`, `ruby`, `python`, `js`).

[WordPress](https://wordpress.org/), for example, stores the content into a database and uses `php` to compile them.

## Templating Engine
A CMS divides your website into 2 parts: 1. theme and 2. content. 

### 1. Theme
The theme consists of different templates for each type of layout you will have on your website: for example, you might have a template for the `hompage`, `pages`(general pages, such as the about page), `posts` (ordered content), or other `custom content types`. (The exact terminology will differ according to your system.)

How you define your templates depends on the CMS.

Some common templating frameworks include:
- [Twig](https://twig.symfony.com/doc/2.x/templates.html) for `php`
- [Liquid](https://shopify.github.io/liquid/) for `ruby` 
- [Handlebars](https://handlebarsjs.com/guide/) (for various programming languages)


###  2. Content
The content is the “variable” part of, such as the actual text content, or images, etc. 

A common format to store textual content is [markdown](https://www.markdownguide.org/getting-started/). You can create a markdown file with your text editor in the same way as you would an `html` file, with a `.md` extension instead. Markdown allows you to write documents in plain text; the CMS then renders this into HTML.

Often, at the top of these markdown files are file **frontmatter**, or **metadata** that tells the CMS how to handle compiling this webpage. It’s important that the syntax used here does not have any typos and strictly follows the requirements of the CMS. 

Often, required metadata includes `title`, `date`; `categories`, `tags`. 

### Taxonomy
Category and tags are organizational keywords. While different CMSes treat them slightly differently, in general, `category` is a larger, hierarchical or ordered level of grouping content, whereas a `tag` is a keyword or attribute associated with the content — an article often has a single category, but has multiple tags. The classification structure for your website is called its *taxonomy*, and is an important part of defining the information architecture of your website. Having a well-defined taxonomy helps visitors form a better mental model of the organization of the site, and how to navigate it. It (among other things) also plays a role in SEO (search engine optimization.)

## Aesthetics & Governance
As you develop a CMS, especially for clients, you’ll find that a key decision you will be making is how flexible your system will be. What the norms, or the "default" is for your platform.

- How modular are your templates?
- What stylistic choices do you allow the user to change? (fonts, colors, images, layout placement, etc)
- Is there a word limit? (See: [Twitter](https://twitter.com/))

## Demo: using Jekyll
Jekyll is a content management system that generates a static website (that does not require a server to dynamically compile your files) and works well with Github Pages.

When you push Jekyll files onto Github, Github automatically compiles your site. Read more about [deploying your jekyll site to Github](https://jekyllrb.com/docs/github-pages/#deploying-jekyll-to-github-pages).


1. Follow instructions to [install Jekyll](https://jekyllrb.com/docs/installation/macos/) via the Terminal

2. Follow the [step-by-step tutorial](https://jekyllrb.com/docs/step-by-step/01-setup/)

After installing Jekyll, open your Terminal, then navigate to your desired Finder folder.
You can do this by typing in `cd ` (be sure to include the space) then drag-and-drop the folder into the Terminal.

- To create a new jekyll site, enter 
```
jekyll new demo --blank
```
and substitute  `demo` with your custom folder name.

- Then navigate to it:
```
cd demo
```

- Run Jekyll to compile
```
jekyll serve --watch
```

Navigate to the local server
```
http://localhost:4000/
```
