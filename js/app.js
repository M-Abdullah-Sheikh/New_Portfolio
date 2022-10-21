
$(document).ready(function () {

    $(".sidemenu-toggler").click(function () {
        $(".sidemenu").addClass("active");
        console.log("abcd");
    });

    $(".close").click(function () {
        $(".sidemenu").removeClass("active");
    });

    $(window).scroll(function () {
        var sc = $(window).scrollTop();
        if (sc > 150) {
            $(".header").addClass("sticky");
        }
        else {
            $(".header").removeClass("sticky");
        }
    });

    $(window).on("load", function () {
        var $container = $('.portfolioContainer');
        $container.isotope({
            filter: '*',
            animationOptions: {
                queue: true
            }
        });

        $('.portfolio-nav li').click(function () {

            $('.portfolio-nav .current').removeClass('current');
            $(this).addClass('current');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    queue: true
                }
            });
            return false;
        });
    });
    $('#portfolio-item').mixItUp;




});


mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




// let progressBar = document.querySelector("#cir1");
// let valueContainer = document.querySelector("#value1");

// let progressValue = 0;
// let progressEndValue = 90;
// let speed = 20;

// let progress = setInterval(() => {
//     progressValue++;
//     valueContainer.textContent = `${progressValue}%`;
//     progressBar.style.background = `conic-gradient( #3bb78f ${progressValue * 3.6}deg , #212529 ${progressValue * 3.6}deg)`;
//     if (progressValue == progressEndValue) {
//         clearInterval(progress);
//     }


// }, speed);



// let progressBar2 = document.querySelector("#cir2");
// let valueContainer2 = document.querySelector("#value2");

// let progressValue2 = 0;
// let progressEndValue2 = 50;
// let speed2 = 20;

// let progress2 = setInterval(() => {
//     progressValue2++;
//     valueContainer2.textContent = `${progressValue2}%`;
//     progressBar2.style.background = `conic-gradient( #3bb78f ${progressValue2 * 3.6}deg , #212529 ${progressValue2 * 3.6}deg)`;
//     if (progressValue2 == progressEndValue2) {
//         clearInterval(progress2);
//     }


// }, speed);


// let progressBar3 = document.querySelector("#cir3");
// let valueContainer3 = document.querySelector("#value3");

// let progressValue3 = 0;
// let progressEndValue3 = 80;
// let speed3 = 20;

// let progress3 = setInterval(() => {
//     progressValue3++;
//     valueContainer3.textContent = `${progressValue3}%`;
//     progressBar3.style.background = `conic-gradient( #3bb78f ${progressValue3 * 3.6}deg , #212529 ${progressValue3 * 3.6}deg)`;
//     if (progressValue3 == progressEndValue3) {
//         clearInterval(progress3);
//     }


// }, speed);



// let progressBar4 = document.querySelector("#cir4");
// let valueContainer4 = document.querySelector("#value4");

// let progressValue4 = 0;
// let progressEndValue4 = 60;
// let speed4 = 20;

// let progress4 = setInterval(() => {
//     progressValue4++;
//     valueContainer4.textContent = `${progressValue4}%`;
//     progressBar4.style.background = `conic-gradient( #3bb78f ${progressValue4 * 3.6}deg , #212529 ${progressValue4 * 3.6}deg)`;
//     if (progressValue4 == progressEndValue4) {
//         clearInterval(progress4);
//     }


// }, speed);





