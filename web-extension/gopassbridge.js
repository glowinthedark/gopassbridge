'use strict';

let currentTab;

let options = null;

const input = document.getElementById('search_input');

getSyncStorage(result => (options = result), () => alert('Could not read config options'));

browser.tabs.query({ currentWindow: true, active: true }, tabs => switchTab(tabs[0]));

browser.tabs.onActivated.addListener(switchTab);

function switchTab(tab) {
    console.log('Switching to tab ' + tab.url);
    if (tab && tab.url && tab.id) {
        currentTab = tab;
        executeOnSetting('markfields', () => {
            browser.tabs.sendMessage(currentTab.id, { type: 'MARK_LOGIN_FIELDS' });
        });
        const term = urlDomain(currentTab.url);
        if (term) {
            getLocalStorage(LAST_DOMAIN_SEARCH_PREFIX + term, values => {
                const value = values[LAST_DOMAIN_SEARCH_PREFIX + term];
                if (value) {
                    search(value);
                } else {
                    searchHost(term);
                }
            });
        }
    }
}
