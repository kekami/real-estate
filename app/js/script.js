// Navbar

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll === 0) {
      $('.navbar').css('backgroundColor', 'transparent');
    } else {
      $('.navbar').css('backgroundColor', '#2F3137');
    }
});

// Side menu

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    $('.navbar__hamburger').hide();
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    $('.navbar__hamburger').show();
}

// Showcases

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow__mySlides");
  var dots = document.getElementsByClassName("dots__item");

  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
  dots[slideIndex+1].className += " active";
}


// Offers section
var $grid = $('.grid').masonry({
  itemSelector: '.offers__item',
  columnWidth: '.offers__sizer',
  percentPosition: true
});

$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});


// Google Maps

function initMap() {
  var locations = [
    ['Office 1', 59.334641, 18.063606, 4],
    ['Office 2', 59.337160, 18.053689, 5],
    ['Office 3', 59.341526, 18.059468, 3]
  ];
  var stockholm = {lat: 59.334591, lng: 18.063240};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: stockholm,
    scrollwheel: false,
  });

  var marker, i;
  for (i = 0; i < locations.length; i++) {  
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
}

