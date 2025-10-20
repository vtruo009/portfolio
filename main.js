let slideIndex = [1, 1, 1, 1, 1, 1];
let slideId = ['media-communications', 'pokesteps', 'spoolify', 'camlock'];
var currSlide = 0;

// Next/previous controls
function plusSlides(n) {
	showSlides((slideIndex[currSlide] += n), currSlide);
}

function showSlides(n, no) {
	let i;
	let slides = document.getElementsByClassName(slideId[currSlide]);
	if (n > slides.length) {
		slideIndex[currSlide] = 1;
	}
	if (n < 1) {
		slideIndex[currSlide] = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	slides[slideIndex[currSlide] - 1].style.display = 'block';
}

function openModal(projectID, no) {
	document.getElementById(projectID).classList.add('active');
	document.body.style.overflow = 'hidden';
	currSlide = no;
	slideIndex[no] = 1;
	showSlides(1, no);
}

function closeModal(projectID) {
	document.getElementById(projectID).classList.remove('active');
	document.body.style.overflow = 'auto';
	currSlide = 0;
}

window.addEventListener('keydown', function (event) {
	if (event.key === 'Escape') {
		document.querySelectorAll('.modal.active').forEach((modal) => {
			modal.classList.remove('active');
		});
		document.body.style.overflow = 'auto';
	}
});

window.addEventListener('keydown', (event) => {
	if (event.key === 'ArrowRight') {
		plusSlides(1, currSlide);
	} else if (event.key === 'ArrowLeft') {
		plusSlides(-1, currSlide);
	}
});

window.onclick = function (event) {
	if (event.target.classList.contains('modal')) {
		event.target.classList.remove('active');
		document.body.style.overflow = 'auto';
		slideIndex[no] = 0;
	}
};

function showImages(project) {}
