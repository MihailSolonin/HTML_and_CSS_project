const entities = [
	{
	  city: 'Rostov-on-Don<br>LCD admiral',
	  apartment: '81 m2<br><br>',
	  time: '3.5 months<br><br>',
	  img: './images/projects/image.jpg'
	},
	{
	  city: 'Sochi<br>Thieves',
	  apartment: '105 m2<br><br>',
	  time: '4 months<br><br>',
	  img: './images/projects/image2.jpg'
	},
	{
	  city: 'Rostov-on-Don<br>Patriotic',
	  apartment: '93 m2<br><br>',
	  time: '3 months<br><br>',
	  img: './images/projects/image3.jpg'
	}
]

const city = document.querySelector('.city')
const apartment = document.querySelector('.apartment_area')
const time = document.querySelector('.repair_time')
const img = document.querySelector('.projects__image')
const link = document.getElementsByClassName('projects__items-item')
const linkArea = document.getElementById('link_area')
const dots = document.getElementsByClassName('dot')
const dotsArea = document.getElementById('dots-block')
  
const setEntity = (index) => {
	city.innerHTML = entities[index].city
	time.innerHTML = entities[index].time
	apartment.innerHTML = entities[index].apartment
	img.style.backgroundImage = `url(${entities[index].img})`
	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove('dot-active');
		link[i].classList.remove('projects__items-item-active');
	}
	dots[index].classList.add('dot-active');
	link[index].classList.add('projects__items-item-active');
}
  
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
let currentIndex = 0

function currentSlide (n) {
    setEntity(index = n)
}
  
prev.addEventListener('click', () => {
	if (currentIndex == 0) {
        currentIndex = entities.length;
    }
	setEntity(currentIndex - 1);
	currentIndex -= 1;
})

next.addEventListener('click', () => {
	if (currentIndex == entities.length - 1) {
        currentIndex = -1;
    }
	setEntity(currentIndex + 1);
	currentIndex += 1;
})

dotsArea.onclick = function (e) {
    for (let i = 0; i < dots.length + 1; i++) {
        if (e.target.classList.contains('dot') && e.target == dots[i]) {
            currentSlide(i);
        }
    }
}
linkArea.onclick = function (e) {
    for (let i = 0; i < link.length + 1; i++) {
        if (e.target.classList.contains('projects__items-item') && e.target == link[i]) {
            currentSlide(i);
        }
    }
}










//let dots = document.getElementsByClassName('dot'),
//	dotsArea = document.getElementById('dots-block'),
//	link = document.getElementsByClassName('projects__items-item'),
//	linkArea = document.getElementById('link_area'),
//	slides = document.getElementsByClassName('projects__image'),
//	city = document.getElementsByClassName('city'),
//	repairTime = document.getElementsByClassName('repair_time'),
//    apartmentArea = document.getElementsByClassName('apartment_area'),
//    mediaSlides = document.getElementsByClassName('media-img__image'),
//    prev = document.getElementById('projects__arrow-left'),
//    next = document.getElementById('projects__arrow-right'),
//    mediaPrev = document.getElementById('media-img__arrow_left'),
//    mediaNext = document.getElementById('media-img__arrow_right'),
//    slideIndex = 1;
//    mediaSlidesIndex = 1;
//	cityIndex = 1;
//	repairTimeIndex = 1;
//	apartmentAreaIndex = 1;
//
//showSlides(slideIndex,cityIndex,repairTimeIndex,apartmentAreaIndex,mediaSlidesIndex);
//
//function showSlides (n) {
//    if (n < 1) {
//		slideIndex = slides.length;
//		cityIndex = city.length;
//		repairTimeIndex = repairTime.length;
//        apartmentAreaIndex = apartmentArea.length;
//        mediaSlidesIndex = mediaSlides.length - 1;
//    } else if (n > slides.length) {
//		slideIndex = 1;
//		cityIndex = 1;
//		repairTimeIndex = 1;
//        apartmentAreaIndex = 1;
//        mediaSlidesIndex = 1;
//    }
//    for (let i = 0; i < slides.length; i++) {
//		slides[i].style.display = 'none';
//		city[i].style.display = 'none';
//		repairTime[i].style.display = 'none';
//        apartmentArea[i].style.display = 'none';
//        mediaSlides[i].style.display = 'none';
//    }
//    for (let i = 0; i < dots.length; i++) {
//		dots[i].classList.remove('dot-active');
//		link[i].classList.remove('projects__items-item-active');
//    }
//	slides[slideIndex - 1].style.display = 'block';
//	city[cityIndex - 1].style.display = 'block';
//	repairTime[repairTimeIndex - 1].style.display = 'block';
//    apartmentArea[apartmentAreaIndex - 1].style.display = 'block';
//    mediaSlides[mediaSlidesIndex - 1].style.display = 'block';
//	dots[slideIndex - 1].classList.add('dot-active');
//    link[slideIndex - 1].classList.add('projects__items-item-active');
//}
//
//function plusSlides (n) {
//	showSlides(slideIndex += n, cityIndex += n, repairTimeIndex += n, apartmentAreaIndex += n, mediaSlidesIndex += n);
//}
//function currentSlide (n) {
//    showSlides(slideIndex = n, cityIndex = n, repairTimeIndex = n, apartmentAreaIndex = n, mediaSlidesIndex = n);
//}
//
//prev.onclick = function () {
//    plusSlides(-1);
//}
//next.onclick = function () {
//    plusSlides(1);
//}
//mediaPrev.onclick = function () {
//    plusSlides(-1);
//}
//mediaNext.onclick = function () {
//    plusSlides(1);
//}
//dotsArea.onclick = function (e) {
//    for (let i = 0; i < dots.length + 1; i++) {
//        if (e.target.classList.contains('dot') && e.target == dots[i - 1]) {
//            currentSlide(i);
//        }
//    }
//}
//linkArea.onclick = function (e) {
//    for (let i = 0; i < link.length + 1; i++) {
//        if (e.target.classList.contains('projects__items-item') && e.target == link[i - 1]) {
//            currentSlide(i);
//        }
//    }
//}
