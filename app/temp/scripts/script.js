// 페이지에 따른 하단메뉴 css 변경 --- 추후 페이지 주소에 따라 수정이 필요합니다. 

if(window.location.pathname == '/p15.html' ) {
    $('.site-header__bottom-menu__series').addClass('current-page');
} else {
    $('.site-header__bottom-menu__series').removeClass('current-page');
}

if(window.location.pathname == '/p08.html' ) {
    $('.site-header__bottom-menu__dic').addClass('current-page');
} else {
    $('.site-header__bottom-menu__dic').removeClass('current-page');
}


// 셀렉트박스 
$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');
 
    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });
 
});
 

// 전페이지로 돌아가기
var goBack = function() {
    window.history.back();
}


// 슬라이더 
$('.hero-slider').slick({
   autoplay: true,
   arrows: false,
   dots: true
});

$('.doc__slider').slick({
    autoplay: false,
    arrows: false,
    dots: true
 });



// 상하단 메뉴
var hamburgerMenuIcon = $('.menu-wrapper');
var categoryMenuIcon = $('.site-header__bottom-menu__cat');

hamburgerMenuIcon.on('click', function() {
   $('.hamburger-menu').toggleClass('animate');
   $('.main-nav').toggleClass('active');
   $('body').toggleClass('lock-scroll');
   $('html').toggleClass('lock-scroll');
})

categoryMenuIcon.on('click', function() {
    docNavToggle('detail',false);
    docNavToggle('attachment',false);
    docNavToggle('rel',false);
   $('.modal-cat').addClass('active');
   $(this).addClass('active');
   $('body').addClass('lock-scroll');
   $('html').addClass('lock-scroll');
   $('.close-menu-wrapper').addClass('active');
   return false;
})

$('.close-menu').on('click', function() {
   $('.modal-cat').removeClass('active');
   categoryMenuIcon.removeClass('active');
   $('body').removeClass('lock-scroll');
   $('html').removeClass('lock-scroll');
   $('.close-menu-wrapper').removeClass('active');
})

// 상세검색
$('.show-search-condition').on('click', function() {
   $('.show-search-condition').toggleClass('active');
   $('.search-condition').toggleClass('active');
})


// 버튼
$(".btn-small").on("click", function() {
   $(this).toggleClass("active")
})

// pdf 목차정보
$(".index-toggle").click(function() {
    $('.pdf__container').slideToggle(300);
})


// 소셜공유
$('.btn-sns-share').click(function() {
   $('.sns-share__list').slideToggle(0);
})



// p04 하단메뉴
var detailBtn = $('.doc__footer__menu__detail');
var detailClose = $('.doc__footer__detail-close');
var relBtn = $('.doc__footer__menu__rel');
var relClose = $('.doc__footer__rel-close');
var attachBtn = $('.doc__footer__menu__attachment');
var attachClose = $('.doc__footer__attachment-close');

const docNavToggle = function(what, on) {
    $(".doc__footer__menu__" + what).toggleClass('active', on);
    $(".doc__footer__" + what).toggleClass('active', on);
    $(".doc__footer__" + what + "-close").toggleClass('active', on);
    $('body').toggleClass('lock-scroll', on);
    $('html').toggleClass('lock-scroll', on);
}

detailBtn.on('click', function() {
    docNavToggle('rel',false);
    docNavToggle('attachment',false);
    docNavToggle('detail',true);
})

detailClose.on('click', function() {
    docNavToggle('detail',false);
})

relBtn.on('click', function() {
    docNavToggle('detail',false);
    docNavToggle('attachment',false);
    docNavToggle('rel',true);
})
 
relClose.on('click', function() {
    docNavToggle('rel',false);
})

attachBtn.on('click', function() {
    docNavToggle('detail',false);
    docNavToggle('rel',false);
    docNavToggle('attachment',true);
})
 
attachClose.on('click', function() {
    docNavToggle('attachment',false);
})  


// 다른기록 버튼
$(".btn-for-others > .btn-small").on("click", function() {
    $(this).parent().siblings('.other-contents').toggleClass("active")
})


// 용어 메뉴
var typeNavMenu = $(".type-of-term");

for (var i = 0; i < typeNavMenu.length; i++) {

   typeNavMenu[i].onclick = function() {

       typeNavMenu.removeClass("active");
       this.classList.add("active");
 };
 
}

// 출처 버튼
$(".btn-toggle-ref").on("click", function() {
    $(this).siblings('.references').slideToggle(0);
    $(this).toggleClass("active")
})
// 관련기록물
$(".related-posts__title").on("click", function() {
    $(this).siblings('.related-posts__contents').slideToggle(0);
    $(this).toggleClass("active")
})



// 게시판 메뉴
$('.board-nav').slick({
    autoplay: false,
    arrows: true,
    dots: false,
    slidesToShow: 3
});

var boardNav = $(".board-nav__list > a");

for (var i = 0; i < boardNav.length; i++) {

  boardNav[i].onclick = function() {

      boardNav.removeClass("current-menu");
      this.classList.add("current-menu");
  };
  
} 


//첨부파일 추가
$(".btn-plus").click(function(){
   $(".board-write__attachments").prepend('<li><i class="xi-attachment"> </i><input type="file"><button class="btn btn-minus" title="삭제"><i class="xi-minus-min"></i></button></li>');
   return false;
})

//첨부파일 취소
$(".btn-del").click(function(){
   $(".board-write__attachments input").value = "";
})

//첨부파일 추가취소
$(".board-write__attachments").on("click", ".btn-minus", function(){
   $(this).parent().remove()
})

//전페이지로 돌아가기
$(".btn.cancel").click(function() {
   window.history.back();
});


//counter 
$( document ).ready( function() {
	
	jQuery(function ($) {
    	"use strict";
    
    	var counterUp = window.counterUp["default"]; 
    	var $counters = $(".counter");
    
		$counters.each(function (ignore, counter) {
			var waypoint = new Waypoint( {
				element: $(this),
				handler: function() { 
					counterUp(counter, {
						duration: 800,
						delay: 16
					}); 
					this.destroy();
				},
				offset: 'bottom-in-view',
			} );
		});

	});
 });
