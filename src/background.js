chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
	if (request.message === 'keyPressed') {
		const currentTab = chrome.tabs.query(
			{
				active: true,
				currentWindow: true,
			},
			(currentTabs) => {
				chrome.tabs.query({ currentWindow: true, active: false }, (tabs) => {
					chrome.tabs.update(tabs[0].id, { active: true });

					setTimeout(() => {
						chrome.tabs.update(currentTabs[0].id, { active: true });
					}, 100);
				});
			}
		);
	}
});
