chrome.runtime.onMessage.addListener(async(e,s,a)=>{e.message==="keyPressed"&&chrome.tabs.query({active:!0,currentWindow:!0},t=>{chrome.tabs.query({currentWindow:!0,active:!1},r=>{chrome.tabs.update(r[0].id,{active:!0}),setTimeout(()=>{chrome.tabs.update(t[0].id,{active:!0})},100)})})});
