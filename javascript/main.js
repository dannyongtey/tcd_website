// document.addEventListener("DOMContentLoaded", function(event){

$(document).ready(function() {
    $("#event-date").css("visibility", "hidden");
    setTimeout(function() {
        $("#event-date").css("visibility", "visible").hide().fadeIn("slow");
    }, 500)

    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 123,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });


});
$("#photos-section > div:gt(0)").hide();
setInterval(function(){
    $("#photos-section > div:first").fadeOut(1000).next().delay(1000).fadeIn(1000).end().appendTo("#photos-section");
},4000);
var eventNameTop = $(".event-name").position().top;
var eventDateTop = $(".event-date").position().top;
var prevTop = $(".prev-wong").position().top;
var prevLeft = parseInt($(".prev-wong").css("left").match(/\d+/)[0]) ;
$(window).scroll(function(e) {

        var scrollTop = $(window).scrollTop();
/*
        var percentUnscrolled = 1 - Math.floor(scrollTop) / prevTop;
        console.log(percentUnscrolled);
        if (percentUnscrolled >= 0){
        $(".prev-wong").css("top", (percentUnscrolled * (prevTop+20))-20);
        $(".prev-wong").css("left", (percentUnscrolled * (prevLeft+40)-40));
        $(".prev-wong").css("transform", ("translateX("+ -(percentUnscrolled * 50) + "%)"));
        $(".event-date").css("top", -20);
        $(".prev-wong img").css("width", (percentUnscrolled * 190)+60);
        $(".event-date").css("opacity", percentUnscrolled)
    }else{
        //$(".prev-wong").addClass("animate");
    }
    */
        if (scrollTop > prevTop) {
            var leftVal = $(".prev-wong").css("left");
            $(".prev-wong").addClass("animate")
        } else {
            $('.prev-wong').removeClass("animate")
        }
    })
    // })
