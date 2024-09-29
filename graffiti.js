const tagMaps = [
  {
    urlMatch: /https:\/\/github\.com/,
    filepath: 'taggers/github.css'
  },
  {
    urlMatch: /https:\/\/www\.youtube\.com/,
    filepath: 'taggers/youtube.css'
  },
  {
    urlMatch: /https:\/\/trello.com/,
    filepath: 'taggers/trello.css'
  }
];

browser.webNavigation.onCompleted.addListener(
  function injectTags(details) {
    for (const tagMap of tagMaps) {
      if (tagMap.urlMatch.test(details.url)) {
        const cssURL = browser.runtime.getURL(tagMap.filepath);
        const cssRequest = new Request(cssURL);
        fetch(cssRequest)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error, status = ${response.status}`);
            }
            return response.text();
          })
          .then((myCSS) => {
            browser.scripting.insertCSS({
              target: {
                tabId: details.tabId
              },
              css: myCSS,
              origin: "USER"  // prevent web pages from overriding it
            });
          })
          .catch((error) => {
            console.error(`Error: ${error.name}: ${error.message}`);
          });
      }
    }
  }
);
