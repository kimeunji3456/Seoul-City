
/**
 * @val() ->
 * @새창으로열기 js
 * @placeholder
 * @autoplay.start
 * @autoplay.stop
 * @attr
 * @탑버튼js
 * @window.scrollTo({top:0,behavior:'smooth'});
 * 
 * 
 */
    $('.btn-go').click(function(e){
        e.preventDefault();
        url = $('#language').val();
        window.open(url);
    })
    $('.sc-visual .title').click(function(e){
        e.preventDefault();
        $(this).parent().addClass('active').siblings().removeClass('active');
        if ($(this).parent().hasClass('slide1')) {
            // 주욘뉴스
            slide1.autoplay.start();
            slide2.autoplay.stop();
        } else {
            //시민참여
            slide1.autoplay.stop();
            slide2.autoplay.start();
        }
    })

    const slide1 = new Swiper(".slide1 .swiper", {
        autoplay:{
            delay:1000,
            disableOnInteraction: false,
        },
        loop:true,
         pagination: {
            el: ".fraction",
            type: "fraction",
        },
        navigation:{
            nextEl:'.next',
            prevEl:'.prev'
        }
    });
    const slide2 = new Swiper(".slide2 .swiper", {
        autoplay:{
            delay:1000,
            disableOnInteraction: false,
        },
        loop:true,
         pagination: {
            el: ".fraction",
            type: "fraction",
        },
        navigation:{
            nextEl:'.next',
            prevEl:'.prev'
        }
    });
    
    slide2.autoplay.stop();

    $('.slide1 .autoplay').click(function(e){
        e.preventDefault();
        // 클릭할려고한는데 혹시 오토플레이가 on이있나요?
        if ($(this).hasClass('on')) {
            $(this).removeClass('on').text('자동재생 정지').attr('aria-label','자동재생 정지');
            slide1.autoplay.start();
        } else { //없어요!
            $(this).addClass('on').text('자동재생 적용').attr('aria-label','자동재생 적용');
            slide1.autoplay.stop();
        }
    })

    $('.slide2 .autoplay').click(function(e){
        e.preventDefault();
        // 클릭할려고한는데 혹시 오토플레이가 on이있나요?
        if ($(this).hasClass('on')) {
            $(this).removeClass('on').text('자동재생 정지').attr('aria-label','자동재생 정지');
            slide2.autoplay.start();
        } else { //없어요!
            $(this).addClass('on').text('자동재생 적용').attr('aria-label','자동재생 적용');
            slide2.autoplay.stop();
        }
    })









    const bannerSlide = new Swiper(".sc-banner3 .swiper", {
        loop:true,
        slidesPerView:3,
        spaceBetween:43,
        autoplay:{
            delay:1000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".fraction",
            type: "fraction",
        },
        navigation:{
            nextEl:'.next',
            prevEl:'.prev'
        }
    });

    $('.sc-banner3 .autoplay').click(function(e){
        e.preventDefault();
        // 클릭할려고한는데 혹시 오토플레이가 on이있나요?
        if ($(this).hasClass('on')) {
            $(this).removeClass('on').text('자동재생 정지').attr('aria-label','자동재생 정지');
            bannerSlide.autoplay.start();
        } else { //없어요!
            $(this).addClass('on').text('자동재생 적용').attr('aria-label','자동재생 적용');
            bannerSlide.autoplay.stop();
        }
    })




    $('.link-related.child').click(function(e){
        e.preventDefault();

        if ($(this).hasClass('on')) {

            $('.link-related.child').removeClass('on')//전체다제거
            $('.sub-area').stop().slideUp();

        } else {
            $('.link-related.child').removeClass('on')//전체다제거
            $(this).addClass('on') //개인

            $('.sub-area').stop().slideUp();
            $(this).siblings('.sub-area').stop().slideDown();
        }

    })




    $('.btn-top').click(function(e){
        e.preventDefault();
        window.scrollTo({top:0,behavior:'smooth'});
        // $('html,body').animate({scrollTop:0},300)
    })

    /* $('.tab > h2').click(function (e) {
        e.preventDefault();

        $(this).addClass('active').siblings('h2').remove('active');
    }); */

    // $('.tab h2').click(function (e) {
    //     e.preventDefault();

    //     $($(this).find('a')).addClass('active').siblings('a').removeClass('active');
    // });

    // setInterval(function () {
    //     $('.main-slide .swiper-wrapper').animate({
    //         'margin-left': '-100%'

    //     }, function () {
    //         $('.main-slide .swiper-slide').first().appendTo('.main-slide .swiper-wrapper');

    //         $('.main-slide .swiper').css({ 'margin-left': '0' });
    //     });

    //     var swiper = new Swiper(".main-swiper", {
    //         pagination: {
    //             el: ".swiper-pagination",
    //             type: "fraction",
    //         },
    //     });
    // }, 3000);


    // setInterval(function () {
    //     var swiper = new Swiper(".banner", {
    //         slidesPerView: 3,
    //         spaceBetween: 30,
    //         freeMode: true,
    //         pagination: {
    //             el: ".swiper-pagination",
    //             type: "fraction",
    //         },
    //     });
    // }, 3000);


    //**** 마우스오버  ****//

    //서브메뉴 숨기고 시작
    //$(".list-menu").hide();

    // 마우스 오버
    /* $(".menu-item").mouseover(function () {
        $('.list-menu').stop().slideDown(300);

    }).mouseout(function () {
        $('.list-menu').stop().slideUp(300);
    }); */

    //$('.list-menu').css('display', 'none');

    //$(".list-menu").hide();

    $('.menu').click(function (e) {
        e.preventDefault();

        $(this).addClass('now-menu').find('.menu').removeClass('now-menu');
    });

    $('.menu').click(function (e) {
        e.preventDefault();

        if ($(this).siblings().css('display') === "block") {
            $('.list-menu').stop().slideUp();

        } else {
            $('.list-menu').stop().slideUp();
            $(this).siblings().stop().slideDown();
        }
    });
