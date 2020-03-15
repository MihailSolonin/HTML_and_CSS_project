let dots = document.getElementsByClassName('dot'),
	dotsArea = document.getElementById('dots-block'),
	link = document.getElementsByClassName('projects__items-item'),
	linkArea = document.getElementById('link_area'),
	slides = document.getElementsByClassName('projects__image'),
	city = document.getElementsByClassName('city'),
	repairTime = document.getElementsByClassName('repair_time'),
	apartmentArea = document.getElementsByClassName('apartment_area'),
    prev = document.getElementById('projects__arrow-left'),
    next = document.getElementById('projects__arrow-right'),
	slideIndex = 1;
	cityIndex = 1;
	repairTimeIndex = 1;
	apartmentAreaIndex = 1;

showSlides(slideIndex,cityIndex,repairTimeIndex,apartmentAreaIndex);

function showSlides (n) {
    if (n < 1) {
		slideIndex = slides.length;
		cityIndex = city.length;
		repairTimeIndex = repairTime.length;
		apartmentAreaIndex = apartmentArea.length;
    } else if (n > slides.length) {
		slideIndex = 1;
		cityIndex = 1;
		repairTimeIndex = 1;
		apartmentAreaIndex = 1;
    }
    for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
		city[i].style.display = 'none';
		repairTime[i].style.display = 'none';
		apartmentArea[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove('dot-active');
		link[i].classList.remove('projects__items-item-active');
    }
	slides[slideIndex - 1].style.display = 'block';
	city[cityIndex - 1].style.display = 'block';
	repairTime[repairTimeIndex - 1].style.display = 'block';
	apartmentArea[apartmentAreaIndex - 1].style.display = 'block';
	dots[slideIndex - 1].classList.add('dot-active');
	link[slideIndex - 1].classList.add('projects__items-item-active');
}

function plusSlides (n) {
	showSlides(slideIndex += n, cityIndex += n, repairTimeIndex += n, apartmentAreaIndex += n);
}
function currentSlide (n) {
    showSlides(slideIndex = n, cityIndex = n, repairTimeIndex = n, apartmentAreaIndex = n)
}

prev.onclick = function () {
    plusSlides(-1);
}
next.onclick = function () {
    plusSlides(1);
}
dotsArea.onclick = function (e) {
    for (let i = 0; i < dots.length + 1; i++) {
        if (e.target.classList.contains('dot') && e.target == dots[i - 1]) {
            currentSlide(i);
        }
    }
}
linkArea.onclick = function (e) {
    for (let i = 0; i < link.length + 1; i++) {
        if (e.target.classList.contains('projects__items-item') && e.target == link[i - 1]) {
            currentSlide(i);
        }
    }
}