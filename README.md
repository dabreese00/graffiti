# Graffiti

Graffiti is a firefox add-on to let us mess around with how our favorite (or least favorite) websites display.

## How to

1. Clone this repository.

2. Open Firefox and load the add-on temporarily from the `about:debugging` page, as described [here](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension#installing).

3. Visit a website that has graffiti written for it (check the `taggers` directory).

4. Look and see the graffiti.

5. Now try tagging a website yourself!

## Tagging a website

So you want to draw all over a website?

Make a [CSS file](https://developer.mozilla.org/en-US/docs/Web/CSS) to override that site's styles, in whatever way you like.

Put the CSS file in the `taggers` directory.

For examples, just go look and see what's in the `taggers` directory right now.

Now you need to apply your CSS file to a website.

Create a [Regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions) to tell Graffiti what website(s) you want your CSS file to apply to.

Add the regular expression, and the path to the CSS file, to the `tagMaps` constant at the top of `graffiti.js`.

For examples, just go look and see what's in `graffiti.js` right now.

Once you've done that, reload the extension, browse to your target web page, and you should see your graffiti!

## Contributing

If you make some cool graffiti to add, send it over!

You're also welcome to try to fix an issue on the Issues page, and/or to raise a new one if you find an improvement to suggest.
