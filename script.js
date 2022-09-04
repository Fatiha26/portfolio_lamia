//portfolio img details

function detail() 
{
    var showdetail = document.getElementById("detail-sec");
    showdetail.style.display = "flex";  
    showdetail.style.zIndex = "2";
} 
function crossdetail()
{
    var showdetail = document.getElementById("detail-sec");
    showdetail.style.display = "none";
}

function detailT()
{
    var showdetail = document.getElementById("detail-sec2");
    showdetail.style.display = "flex";
    showdetail.style.top = "100%";
    showdetail.style.left = "50%";

}
function crossdetailT()
{
    var showdetail = document.getElementById("detail-sec2");
    showdetail.style.display = "none";
}
function detailTH()
{
    var showdetail = document.getElementById("detail-sec3");
    showdetail.style.display = "flex";
    showdetail.style.top = "100%";
    showdetail.style.left = "-50%";

}
function crossdetailTH()
{
    var showdetail = document.getElementById("detail-sec3");
    showdetail.style.display = "none";
}
function detailF()
{
    var showdetail = document.getElementById("detail-sec4");
    showdetail.style.display = "flex";
    showdetail.style.top = "0%";
    showdetail.style.left = "170%";

}
function crossdetailF()
{
    var showdetail = document.getElementById("detail-sec4");
    showdetail.style.display = "none";
}
function detailFv()
{
    var showdetail = document.getElementById("detail-sec5");
    showdetail.style.display = "flex";
    showdetail.style.top = "0%";
    showdetail.style.left = "50%";

}
function crossdetailFv()
{
    var showdetail = document.getElementById("detail-sec5");
    showdetail.style.display = "none";
} 
function detailS()
{
    var showdetail = document.getElementById("detail-sec6");
    showdetail.style.display = "flex";
    showdetail.style.top = "0%";
    showdetail.style.left = "-70%";

}
function crossdetailS()
{
    var showdetail = document.getElementById("detail-sec6");
    showdetail.style.display = "none";
}

//sticky nav bar part

window.addEventListener('scroll', function(){
   var header = document.querySelector(".header-content");
   header.classList.toggle("sticky", window.scrollY > 0);
});

//skills progress bar

 $('svg.radial-progress').each(function( index, value ) { 
$(this).find($('circle.complete')).removeAttr( 'style' );
});

$(window).scroll(function(){
$('svg.radial-progress').each(function( index, value ) { 
if ( 
    $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
    $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
) {
    percent = $(value).data('percentage');
    radius = $(this).find($('circle.complete')).attr('r');
    circumference = 2 * Math.PI * radius;
    strokeDashOffset = circumference - ((percent * circumference) / 100);
    $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
}
});
}).trigger('scroll');

//scroll top button

    var scrollBtn = document.getElementById("scroll-top");
    window.onscroll = function() {scrollFunction()};

function scrollFunction(){
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
      scrollBtn.style.display = "block";
    }
else
{
     scrollBtn.style.display = "none";
}
}

function topFunction()
{
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
}
function roundFunction()
{
    document.getElementById("scroll-top").style.borderRadius = "50%";
}
function sqrFunction()
{
    document.getElementById("scroll-top").style.borderRadius = "5px";
    document.getElementById("scroll-top").style.transition = "0.5s";
}

//responsive nav bar

function menuopen()
{
    var navmenu = document.getElementById("nav-menu");
    var toggle = document.getElementById("toggle");
    var toggle2 = document.getElementById("toggle2");

    navmenu.style.opacity = "1";
    toggle.style.display = "none";
    toggle2.style.display = "block";

}
function menuclose()
{
    var navmenu = document.getElementById("nav-menu");
    var toggle = document.getElementById("toggle");
    var toggle2 = document.getElementById("toggle2");

    navmenu.style.opacity = "0";
    toggle.style.display = "block";
    toggle2.style.display = "none";
}

//animation on scroll

  AOS.init();

