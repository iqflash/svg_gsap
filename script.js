var background = document.getElementById("background"),
    rastr = document.getElementById("rastr"),
    big_x5F_square = document.getElementById("big_x5F_square"),
    circle = document.getElementById("circle"),
    rectangle = document.getElementById("rectangle"),
    mask_x5F_rounde = document.getElementById("mask_x5F_rounde"),
    square = document.getElementById("square"),
    box = document.getElementById("box"),
    text_x5F_1 = document.getElementById("text_x5F_1"),
    text_x5F_2 = document.getElementById("text_x5F_2"),
    btn_x5F_1 = document.getElementById("btn_x5F_1"),
    btn_x5F_1_x5F_in = document.getElementById("btn_x5F_1_x5F_in_2_"),
    btn_x5F_1_x5F_out = document.getElementById("btn_x5F_1_x5F_out_2_"),
    btn_x5F_2 = document.getElementById("btn_x5F_2"),
    btn_x5F_2_x5F_in = document.getElementById("btn_x5F_2_x5F_in"),
    btn_x5F_2_x5F_out = document.getElementById("btn_x5F_2_x5F_out"),
    test_banners = new TimelineMax({delay:1});

TweenMax.set([rastr,big_x5F_square,circle,rectangle,mask_x5F_rounde,square,box,text_x5F_1,text_x5F_2,btn_x5F_1,btn_x5F_2], {
  transformOrigin:'50% 50%', smoothOrigin:true
});

TweenMax.set([rastr,big_x5F_square,circle,rectangle,mask_x5F_rounde,square,box,text_x5F_1,text_x5F_2], {
  autoAlpha:0
});
TweenMax.set([square,text_x5F_1], {
  x:-120
});
TweenMax.set([text_x5F_2], {
  x:120
});

TweenMax.set([btn_x5F_1_x5F_out,btn_x5F_2_x5F_out], {
  opacity:0
});

test_banners
.from(btn_x5F_1, .5, {autoAlpha:0, ease: Power2.easeInOut})
.from(btn_x5F_2, .5, {autoAlpha:0, ease: Power2.easeInOut}, "-=.5")
.to(square, .5, {autoAlpha:1, x:0,  ease: Power2.easeInOut}, "-=.5")
.to(square, 1, {rotation:360, ease: Power2.easeInOut})
.to(square, .5, {scale:2, ease: Back.easeInOut})
.to(square, .5, {y:"-=20", ease: Back.easeInOut})
.to(text_x5F_1, .5, {autoAlpha:1, x:0, ease: Power2.easeInOut}, "-=.5")
.to(text_x5F_2, .5, {autoAlpha:1, x:0, ease: Power2.easeInOut}, "-=.5")
.to(square, .5, {scale:1, ease: Back.easeInOut}, "-=.5")
;

btn_x5F_1.onmouseover = function(e) {
    TweenMax.to(btn_x5F_1_x5F_out, .5, {opacity:1, ease: Power2.easeInOut});
  };

btn_x5F_1.onmouseout = function(e) {
    TweenMax.to(btn_x5F_1_x5F_out, .5, {opacity:0, ease: Power2.easeInOut});
  };
btn_x5F_2.onmouseover = function(e) {
    TweenMax.to(btn_x5F_2_x5F_out, .5, {opacity:1, ease: Power2.easeInOut});
  };

btn_x5F_2.onmouseout = function(e) {
    TweenMax.to(btn_x5F_2_x5F_out, .5, {opacity:0, ease: Power2.easeInOut});
  };