let adviceId = document.getElementById('advice-id');
let advice = document.getElementById('advice');
let diceBtn = document.getElementById('dice-btn');

const changeAdvice = () => {
	fetch('https://api.adviceslip.com/advice')
		.then((response) => response.json())
		.then((data) => {
			let id = data['slip']['id'];
			adviceId.textContent =
				'#' + (id < 10 ? '00' + id : id < 100 ? '0' + id : id);
			/* That statement above code is to add zero number at the start if that
        number is smaller than 100 */

			advice.textContent = data['slip']['advice'];

			console.log('success');
		});
};

diceBtn.addEventListener('click', changeAdvice);
changeAdvice();
