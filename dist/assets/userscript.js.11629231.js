const e=document.querySelector("#chat-input"),s=t=>{e===document.activeElement!==e&&t.key==="x"&&chrome.runtime.sendMessage({message:"keyPressed"},n=>{otherTabs=n})};window.addEventListener("keydown",s);