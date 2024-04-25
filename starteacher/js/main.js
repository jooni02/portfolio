$(document).ready(function(){
    const teacher_swiper = new Swiper('.teacher .swiper', { /* 팝업을 감싼는 요소의 class명 */
    
        slidesPerView: "auto", /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 18, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
		768: {    /* 768px 이상일때 적용 */
			slidesPerView: 4,
			spaceBetween: 16,
		},
		1024: {   /* 1024px 이상일때 적용 */
			slidesPerView: 5,
			spaceBetween: 22,
		},
		1280: {    /* 1280px 이상일때 적용 */
			slidesPerView: 5,
			spaceBetween: 24,
		},
	    },

        centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        speed: 5000,
        autoplay: {
            delay: 0,
            disableOnInteraction: true,
	    },
        
    });

    const review_swiper = new Swiper('.review .swiper', { /* 팝업을 감싼는 요소의 class명 */
    
        slidesPerView: "auto", /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
        768: {    /* 768px 이상일때 적용 */
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {   /* 1024px 이상일때 적용 */
            slidesPerView: 3,
            spaceBetween: 24,
        },
        1280: {    /* 1280px 이상일때 적용 */
            slidesPerView: 4,
            spaceBetween: 28,
        },
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        navigation: {
			nextEl: '.next',
			prevEl: '.prev',
		},
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
		el: '.swiper-pagination', /* 해당 요소의 class명 */
		clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
	},
    
    });
}) ////document.ready
