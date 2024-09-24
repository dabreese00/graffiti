# Graffiti

Graffiti is a firefox add-on to let us mess around with how our favorite (or least favorite) websites display.

## How to

1. Clone this repository.

2. Open Firefox and load the add-on temporarily from the `about:debugging` page, as described [here](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension#installing).

3. Visit a website that has graffiti written for it (check the `taggers/my_taggers.json` file for the current list of graffiti).

4. Look and see the graffiti.

5. Go edit the `taggers/my_taggers.json` file and add your own graffiti!

## Reading and writing graffiti

Graffiti consists of a CSS selector, and a CSS property/value which will be set on all elements that match that selector.

A list of CSS selector/property/value triplets (also called "tags") gets applied to specific web pages based on the associated *matcher*, a regular expression that matches the page's URL.

The astute among us might observe that this is pretty much just a CSS stylesheet, but written funny, and less flexible.  We reserve the right to just start using stylesheets instead one day, if we ever learn how to be that smart.

## Contributing

If you make some cool graffiti to add, send it over!

You're also welcome to try to fix an issue on the Issues page, and/or to raise a new one if you find an improvement to suggest.
