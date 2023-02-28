
// 메인비쥬얼 슬라이드
$(function(){
  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");
  var swiper = new Swiper(".swiper",{
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
  })

  var swiper = new Swiper(".swiper1",{
    slidesPerView: 4,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
  })


  // 스크롤이벤트
  $(window).on('scroll',function(){
    // var scrollValue = $(document).scrollTop(); 
    // console.log(scrollValue);

    // 섹션1
    if($(this).scrollTop()>600){

      var timer;
      $('.sec01_img').animate({marginRight:'0',opacity:'1'},1000);
      timer = setTimeout(function(){
        $('.sec01_txt').animate({marginRight:'0',opacity:'1'},1000);
      },1000);
      
      
    }

    // 섹션2
    if($(this).scrollTop()>1500){

      var timer;
      $('.sec02_img').animate({marginLeft:'0',opacity:'1'},1000);
      timer = setTimeout(function(){
        $('.sec02_txt').animate({marginLeft:'0',opacity:'1'},1000);
      },1000);
      
      
    }

    // 섹션4
    if($(this).scrollTop()>3000){
      $('.rv_wrap').animate({marginBottom:'0',opacity:'1'},1000);
      
    }





  })

  // 클릭시 화면 이동
  $('.page-up').click(function(){
    var header = $('.main-top-wrap').offset().top;
    $('html').animate({scrollTop:header},500)
  })
  //////////////
})