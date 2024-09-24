const url = browser.runtime.getURL("taggers/my_taggers.json");

const myRequest = new Request(url);

fetch(myRequest)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error, status = ${response.status}`);
    }
    return response.text();
  })

  .then((myText) => {
    const my_taggers = JSON.parse(myText);

    for (const tagger of my_taggers) {
      matcher = RegExp(tagger.matcher);

      if (matcher.test(window.location)) {
        for (const tag of tagger.tags) {
          document.querySelector(tag.selector).style.setProperty(tag.property, tag.value);
        }
      }
    }
  })

  .catch((error) => {
    console.error(`Error: ${error.name}: ${error.message}`);
  });
