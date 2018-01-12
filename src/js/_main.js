function inicializaSwiper(){
	if (detectmob()){
		var swiper = new Swiper('.swiper-container', {
			direction: 'horizontal',
			loop: false,

	        // If we need pagination
	        pagination: {
				el: '.swiper-pagination',
			},
	        // autoplay: false,
	        
	        // Navigation arrows
	        mousewheelControl: true,
	        slidesPerView: 4,
	        spaceBetween: 32,
	        breakpoints: {
	        	1024: {
	        		slidesPerView: 7,
	        		spaceBetween: 32
	        	},
	        	768: {
	        		slidesPerView: 2.75,
	        		spaceBetween: 32
	        	},
	        	640: {
	        		slidesPerView: 1.5,
	        		spaceBetween: 32
	        	},
	        	320: {
	        		slidesPerView: 1.5,
	        		spaceBetween: 32
	        	}
	        }
	    });
	}

}

window.onload = inicializaSwiper();
// window.onresize = inicializaSwiper();

