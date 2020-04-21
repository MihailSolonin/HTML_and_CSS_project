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
const media = document.querySelector('.media-img__image')
  
const setEntity = (index) => {
	city.innerHTML = entities[index].city
	time.innerHTML = entities[index].time
	apartment.innerHTML = entities[index].apartment
  img.style.backgroundImage = `url(${entities[index].img})`
  media.setAttribute('src', entities[index].img)
	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove('dot-active');
		link[i].classList.remove('projects__items-item-active');
	}
	dots[index].classList.add('dot-active');
	link[index].classList.add('projects__items-item-active');
}
  
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const prevMedia = document.querySelector('.prev_media')
const nextMedia = document.querySelector('.next_media')
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

prevMedia.addEventListener('click', () => {
	if (currentIndex == 0) {
        currentIndex = entities.length;
    }
	setEntity(currentIndex - 1);
	currentIndex -= 1;
})

nextMedia.addEventListener('click', () => {
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
