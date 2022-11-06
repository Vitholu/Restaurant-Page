function remLoad(e) {
	console.log('wow');
	if (e) {
		const contentQuery = document.querySelector('#content');
		contentQuery.replaceChildren();
	}
}

export { remLoad };
