const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// Flèches //

const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');

leftArrow.addEventListener('click', function () {
  console.log('Flèche gauche cliquée');
  });

rightArrow.addEventListener('click', function () {
  console.log('Flèche droite cliquée');
  });



  // Dot //
  
const dotsContainer = document.querySelector('.dots');

slides.forEach((slide, index) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (index === 0) {
    dot.classList.add('dot_selected');    
  }
  dotsContainer.appendChild(dot);
});



// Dynamisme des flèches, MAJ des dots et du texte //

let i = 0;

function updateCarousel(index) {
  const imageElement = document.querySelector('.banner-img');
  const textElement = document.querySelector('#banner p');

  imageElement.src = `./assets/images/slideshow/${slides[index].image}`;

  textElement.innerHTML = slides[index].tagLine;

  const allDots = document.querySelectorAll('.dot');
  allDots.forEach(dot => dot.classList.remove('dot_selected'));
  allDots[index].classList.add('dot_selected');


}



 // Carrousel qui tourne //  

const arrowRight = document.querySelector('.arrow_right');
const arrowLeft = document.querySelector('.arrow_left');

arrowRight.addEventListener('click', () => {
  i++;
  if (i >= slides.length) {
    i = 0;
  }
  updateCarousel(i);
});

arrowLeft.addEventListener('click', () => {
	i--;
	if (i < 0) {
    i = slides.length - 1;
  }
	updateCarousel(i);
});











