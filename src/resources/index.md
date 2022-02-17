---
title: "Troubleshooting"
---

## Troubleshooting Tips
Try to be patient when writing code. So much of programming is debugging; typos are one of the most common errors! If you find yourself stuck, try breaking your issue down into smaller, more manageable parts. 

Search Google or [Stack Overflow](http://stackoverflow.com) for how to solve those parts, one at a time. While frustrating, these bugs may lead you to discover something new you would not have considered before. Code can be an unforgiving but rewarding medium. If you cannot solve a problem a way you anticipate, try “hacking” it—tackling the issue with the means you currently have.

Below are some common errors to watch out for:

### HTML
* Are your HTML elements wrapped in open and close tags?
* Are your HTML elements properly nested?
* Do your attribute values have matching quotation marks around them?
* Are your directory paths correct? Double check your link / path syntax.

### CSS
* Do you have opening and closing brackets?
* Does your property and value pairs have colons in between them?
* Do you have a semicolon at the end of each declaration?
* Are your class / id names properly spelled, in the right case?

### File management
It is critical to keep your web files organized, and that you have a clear understanding of where the files working together are located within your computer system (on your local hard drive.) 

As you make multiple sites, you will find that you will have many files named `index.html` or `style.css`. Make sure you are working with files in the desired folder location. 

To move a folders/files, make sure to save and close out of them in your text editor first, then reopen after moving the file. (If you keep your file open in your text editor and try to save, it might try resave in the original location.)

### Naming
Because of the way special characters and spaces are treated in URLs, it’s best to avoid them when naming files and folders for web. *Hyphens* are used instead of spaces. It’s also recommended to use all *lowercase*, because of the way some systems may or may not be case-sensitive. 
* Rename `Folder Name/Filename Test.html` → `folder-name/filename-test.html`

### Web Inspector
Keep your browser’s web inspector handy — it’s a critical tool in understanding how your code is being interpreted by your browser, whether its your HTML tree structure (in the *DOM*,) or how your styles are being inherited (your *CSS*). 

* When in doubt, remember the shortcut `Option + Command + i`
* More on the [Chrome Inspector](https://developer.chrome.com/docs/devtools/dom/)
* More on the [Firefox Inspector](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector)
