// Created by sam mok 2015(Siso brand interactive team).

"use strict";

var app = {
    create: function (){
        //  limit browser drag move
        document.addEventListener('touchmove', function (e) {
            e.preventDefault();
        },true);
        app.mySwiper = new Swiper ('.swiper-container', {
            direction: 'vertical',
            parallax : true,
            noSwiping: false,
            // init
            onInit: function () {
            },
            onTransitionStart: function (swiper) {
            },
            onTransitionEnd: function (swiper) {
                $('.scene').removeClass('active');
                switch (swiper.activeIndex){
                    case 1:
                        $('.scene02').addClass('active');
                        break;
                    case 2:
                        $('.scene03').addClass('active');
                        break;
                    case 3:
                        $('.scene04').addClass('active');
                        break;
                }
            }
        });

        function ViewScale(){
            var ViewWidth = $('body').width();
            if(ViewWidth > 540){
                ViewWidth == 540
            }
            var ViewScale = ViewWidth / 320;
            var style = '-webkit-transform:scale3d(' + ViewScale + ',' + ViewScale + ',' + ViewScale + '); -webkit-transform-origin : 0% 0%;'+'transform:scale3d(' + ViewScale + ',' + ViewScale + ',' + ViewScale + '); transform-origin : 0% 0%;';
            document.body.setAttribute('style',style);

        }
        ViewScale();


        //  first time play BGM
        var initSound = function () {
            //  delay play
            $('#music')[0].play();
            document.removeEventListener('touchstart', initSound, false);
        };
        document.addEventListener('touchstart', initSound, false);
    },

    start: function (){
        this.create();
    }
};

$(function (){
    // init app
    app.start();
    console.log('app started success...');
});