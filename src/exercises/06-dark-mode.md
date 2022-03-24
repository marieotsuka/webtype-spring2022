---
title: "Dark Mode"
date: "2022-03-24"
---

## Responding to the visitor’s environment

Responsive design takes into account the need for a design to adapt to different platforms and screensizes. With the introduction of “dark mode,” this has also expanded to responding to different light conditions. In the same way that operating systems are setting up color schemes for low-light conditions, websites are setting up alternate color ways.

Through this exercise, we will use JavaScript & jQuery to create a switch that toggle between two modes of your class website.

### Technical Notes
- [jQuery](/notes/09-jQuery/)
- [Code Lab Tutorial](https://github.com/RISD-Code-Lab/spring2021/tree/main/session-01)

1. Create and style a button that will serve as a dark mode trigger in the HTML of your page

```html
<button id="darkmode">Your Button</button>
```

2. Setup your dark-mode styles in your `.css` file, consider how CSS styles cascade through the webpage, and how you can write specific tags using a parent class. Try and be as efficient as possible by changing your page’s appearance based on a single class.

```css
.darkmode{
  background: black;
  color: white;
}

.darkmode h1{
  color: yellow;
}
``` 

3. Add a jQuery script tag in the `<head>` of your document to load in the jQuery library

```js
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
```

4. Create a new blank `script.js` file, and add a link to it under your jQuery script tag

```js
<script type="text/javascript" src="script.js"></script>
```


5. Connect your button to toggle the class for your darkmode settings. Here, we will toggle the styles by adding a class to the containing body. This way, we can write new rules for elements that have a body with the container class.

Your code may look something like this:

```js
$(document).ready(function(){
     $("#darkmode").click(function(){ $('body').toggleClass('darkmode');});
});
```

6. As you add new style rules, think about how you want your “darkmode” to function. You might consider experimenting with other adjustments instead of styling an inverse-color theme. Think about how your typography might adapt to a darker background. Consider the potential of this visual toggle beyond what may be expected.


### References

* [iOS Dark Mode](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/dark-mode)
* [Mac OS Dark Mode](https://support.apple.com/guide/mac-help/use-a-light-or-dark-appearance-mchl52e1c2d2/mac)
* [Android Dark Theme](https://developer.android.com/guide/topics/ui/look-and-feel/darktheme)
* [A Friend is Writing](http://a-friend-is-writing.new-document.net/)

### Resources

* [JQuery Get Started](https://www.w3schools.com/jquery/jquery_get_started.asp)
* [JQuery Toggle Class](https://api.jquery.com/toggleclass/)
* [CSS Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
* [A Complete Guide to Dark Mode on the Web](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/)
