const URL = 'data.json';

async function handleData() {
	const response = await axios.get(URL);
	let data = response.data;
	const summaryItems = document.querySelectorAll('.app__summary-list-item');

	for (let i = 0; i < data.length; i++) {
		const img = document.createElement('img');
		const paragraph = document.createElement('p');
		const span = document.createElement('span');

		img.setAttribute('src', data[i].icon);
		img.setAttribute('alt', '');

		span.innerHTML = data[i].score;

		paragraph.appendChild(span);
		paragraph.innerHTML += ' / 100';

		summaryItems[i].appendChild(img);
		summaryItems[i].append(data[i].category);
		summaryItems[i].appendChild(paragraph);
	}
}

handleData();
