const url = browser.runtime.getURL("taggers/my_taggers.json");

const myRequest = new Request(url);

function tagTheDOM() {
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
            elements = document.querySelectorAll(tag.selector)

            for (const e of elements) {
              console.debug(`Applying styles to ${e.tagName}`);
              e.style.setProperty(tag.property, tag.value);
            }
          }
        }
      }
    })
  
    .catch((error) => {
      console.error(`Error: ${error.name}: ${error.message}`);
    });
};

if (document.readyState === "loading") {
  // Loading hasn't finished yet
  document.addEventListener("DOMContentLoaded", tagTheDOM);
} else {
  tagTheDOM();
}
