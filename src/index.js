import { initialLoad } from './onLoad.js';
import { initialLoad2 } from './onLoad2.js';
import { initialLoad3 } from './onLoad3.js';
console.log('Webpack Works');

const versionToggle = document.querySelectorAll('button');

versionToggle.forEach((e) => {
	e.addEventListener('click', (e) => {
		if (e.target.id === '2') {
			initialLoad2(true);
			console.log('okaaay');
		}
		if (e.target.id === '3') {
			initialLoad3(true);
			console.log('okaaay');
		}
	});
});
