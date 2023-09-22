(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/userscript.js.11629231.js")
    );
  })().catch(console.error);

})();
