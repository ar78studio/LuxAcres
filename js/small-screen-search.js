// First Main Property Searchbox
$(document).ready(function () {
  $(".sm-buy-house").click(function () {
    $(".sm-buy ul").toggleClass("active");
  });

  $(".sm-buy ul li").click(function () {
    var text = $(this).text();
    $(".sm-buy-house").text(text);
    $(".sm-buy ul").removeClass("active");
  });

  var nav = document.querySelector(".sm-search-box");

  nav.addEventListener(
    "toggle",
    function (event) {
      // Only run if the dropdown is open
      if (!event.target.open) return;

      // Get all other open dropdowns and close them
      var dropdowns = nav.querySelectorAll(".sm-buy[open]");
      Array.prototype.forEach.call(dropdowns, function (dropdown) {
        if (dropdown === event.target) return;
        dropdown.removeAttribute("open");
      });
    },
    true
  );

  $(".sm-city-city").click(function () {
    $(".sm-city ul").toggleClass("active");
  });

  $(".sm-city ul li").click(function () {
    var text = $(this).text();
    $(".sm-city-city").text(text);
    $(".sm-city ul").removeClass("active");
  });

  $(".sm-property-type").click(function () {
    $(".sm-property ul").toggleClass("active");
  });

  $(".sm-property ul li").click(function () {
    var text = $(this).text();
    $(".sm-property-type").text(text);
    $(".sm-property ul").removeClass("active");
  });

  // Second Hidden Row 4 Column Property Searchbox
  $(".sm-bedrooms").click(function () {
    $(".sm-bed ul").toggleClass("active");
  });

  $(".sm-bed ul li").click(function () {
    var text = $(this).text();
    $(".sm-bedrooms").text(text);
    $(".sm-bed ul").removeClass("active");
  });

  $(".sm-min-price").click(function () {
    $(".sm-min ul").toggleClass("active");
  });

  $(".sm-min ul li").click(function () {
    var text = $(this).text();
    $(".sm-min-price").text(text);
    $(".sm-min ul").removeClass("active");
  });

  $(".sm-max-price").click(function () {
    $(".sm-max ul").toggleClass("active");
  });

  $(".sm-max ul li").click(function () {
    var text = $(this).text();
    $(".sm-max-price").text(text);
    $(".sm-max ul").removeClass("active");
  });

  $(".sm-bathrooms").click(function () {
    $(".sm-bath ul").toggleClass("active");
  });

  $(".sm-bath ul li").click(function () {
    var text = $(this).text();
    $(".sm-bathrooms").text(text);
    $(".sm-bath ul").removeClass("active");
  });

  // Third Hidden Row 4 Column Property Searchbox
  $(".sm-plot-size").click(function () {
    $(".sm-plot ul").toggleClass("active");
  });

  $(".sm-plot ul li").click(function () {
    var text = $(this).text();
    $(".sm-plot-size").text(text);
    $(".sm-plot ul").removeClass("active");
  });

  $(".sm-swimming").click(function () {
    $(".sm-swim ul").toggleClass("active");
  });

  $(".sm-swim ul li").click(function () {
    var text = $(this).text();
    $(".sm-swimming").text(text);
    $(".sm-swim ul").removeClass("active");
  });

  $(".sm-garage-space").click(function () {
    $(".sm-garage ul").toggleClass("active");
  });

  $(".sm-garage ul li").click(function () {
    var text = $(this).text();
    $(".sm-garage-space").text(text);
    $(".sm-garage ul").removeClass("active");
  });

  // Nothing for the fourth Column as it is an Input Search Field
});

// var nav = document.querySelector('.my-nav');
// nav.addEventListener(
//   'toggle',
//   function (event) {
// Only run if the dropdown is open
// if (!event.target.open) return;

// Get all other open dropdowns and close them
// var dropdowns = nav.querySelectorAll('.dropdown[open]');
// Array.prototype.forEach.call(dropdowns, function (dropdown) {
// if (dropdown === event.target) return;
// dropdown.removeAttribute('open');
// });
// },
// true
// );
