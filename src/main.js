import App from './App.svelte';

// GLOBAL
import {fetch as fetchPolyfill} from 'whatwg-fetch'; // fetch for IE11 対応
	window.fetchPolyfill = fetchPolyfill;

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;
