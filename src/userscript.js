const chatInput = document.querySelector('#chat-input');

const respondToClick = (e) => {
	if ((chatInput === document.activeElement) === chatInput) return;
	if (e.key === 'x') {
		chrome.runtime.sendMessage({ message: 'keyPressed' }, (response) => {
			otherTabs = response;
		});
	}
};

window.addEventListener('keydown', respondToClick);
