function initialLoad2(e) {
	const contentQuery = document.querySelector('#content');
	const header = document.createElement('h2');
	header.textContent = 'P---I---Z---Z---A---2';
	const divFlex = document.createElement('div');
	const divBottom = document.createElement('div');
	const div = document.createElement('div');
	const img1 = document.createElement('img');
	img1.src = '/assets/restaurant.jpg';
	const img2 = document.createElement('img');
	img2.src = '/assets/restaurant-stairs.jpg';
	const img3 = document.createElement('img');
	img3.src = '/assets/restaurant-bar.jpg';

	if (e) {
		divBottom.textContent = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but
    also the leap into electronic typesetting, remaining essentially
    unchanged.`;

		divFlex.classList.add('flex-wrapper');
		divBottom.classList.add('bottom');
		contentQuery.appendChild(header);
		divFlex.appendChild(div);
		div.appendChild(img1);
		div.appendChild(img2);
		div.appendChild(img3);
		contentQuery.appendChild(divFlex);
		divFlex.appendChild(divBottom);
	}
}

export { initialLoad2 };
