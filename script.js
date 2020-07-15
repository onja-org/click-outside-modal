const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');
const newBtn = document.querySelector('.openModal');

const handleCardButtonClick = event => {
	const button = event.currentTarget;
	// select the closest parent with the .card class
	const card = button.closest('.card');

	const imgSrc = card.querySelector('img').src;
	const desc = card.dataset.description;
	const name = card.querySelector('h2').textContent;

	modalInner.innerHTML = `
        <img height="600" width="600" src="${imgSrc.replace('200', '600')}" alt="${name}"/>
        <p>${desc}</p>
    `;
	// show the modal
	modalOuter.classList.add('open');
};
const closeModal = () => {
	modalOuter.classList.remove('open');
};
modalOuter.addEventListener('click', event => {
	const isOutside = !event.target.closest('.modal-inner');
	closeModal();
});
window.addEventListener('keydown', event => {
	if (event.key === 'Escape') {
		closeModal();
	}
});
cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick));

const handleNewBtn = () => {
	// launch my new Modal;
	modalInner.innerHTML = `
        <div class="card">
            <h2>HELLO ONJA STUDENTS</h2>
            <p>I love modals. They are really useful to create small windows on screen!</p>
            <h2>Look at this beautiful pic</h2>
            <img src="https://picsum.photos/400" alt="random pic"/>
        </div>
        
    `;
	modalOuter.classList.add('open');
};

newBtn.addEventListener('click', handleNewBtn);
