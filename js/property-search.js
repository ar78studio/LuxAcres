// First Main Property Searchbox
$(document).ready(function () {
  $(".buy-house").click(function () {
    $(".buy ul").toggleClass("active");
  });

  $(".buy ul li").click(function () {
    var text = $(this).text();
    $(".buy-house").text(text);
    $(".buy ul").removeClass("active");
  });

  let nav = document.querySelector(".search-box");
  nav.addEventListener(
    "toggle",
    function (event) {
      // Only run if the dropdown is open
      if (!event.target.open) return;

      // Get all other open dropdowns and close them
      let dropdowns = nav.querySelectorAll(".buy[open]");
      Array.prototype.forEach.call(dropdowns, function (dropdown) {
        if (dropdown === event.target) return;
        dropdown.removeAttribute("open");
      });
    },
    true
  );

  $(".city-city").click(function () {
    $(".city ul").toggleClass("active");
  });

  $(".city ul li").click(function () {
    var text = $(this).text();
    $(".city-city").text(text);
    $(".city ul").removeClass("active");
  });

  $(".price-range").click(function () {
    $(".price ul").toggleClass("active");
  });

  $(".price ul li").click(function () {
    var text = $(this).text();
    $(".price-range").text(text);
    $(".price ul").removeClass("active");
  });

  // Second Hidden Row 4 Column Property Searchbox
  $(".bedrooms").click(function () {
    $(".bed ul").toggleClass("active");
  });

  $(".bed ul li").click(function () {
    var text = $(this).text();
    $(".bedrooms").text(text);
    $(".bed ul").removeClass("active");
  });

  $(".min-price").click(function () {
    $(".min ul").toggleClass("active");
  });

  $(".min ul li").click(function () {
    var text = $(this).text();
    $(".min-price").text(text);
    $(".min ul").removeClass("active");
  });

  $(".max-price").click(function () {
    $(".max ul").toggleClass("active");
  });

  $(".max ul li").click(function () {
    var text = $(this).text();
    $(".max-price").text(text);
    $(".max ul").removeClass("active");
  });

  $(".bathrooms").click(function () {
    $(".bath ul").toggleClass("active");
  });

  $(".bath ul li").click(function () {
    var text = $(this).text();
    $(".bathrooms").text(text);
    $(".bath ul").removeClass("active");
  });

  // Third Hidden Row 4 Column Property Searchbox
  $(".plot-size").click(function () {
    $(".plot ul").toggleClass("active");
  });

  $(".plot ul li").click(function () {
    var text = $(this).text();
    $(".plot-size").text(text);
    $(".plot ul").removeClass("active");
  });

  $(".swimming").click(function () {
    $(".swim ul").toggleClass("active");
  });

  $(".swim ul li").click(function () {
    var text = $(this).text();
    $(".swimming").text(text);
    $(".swim ul").removeClass("active");
  });

  $(".garage-space").click(function () {
    $(".garage ul").toggleClass("active");
  });

  $(".garage ul li").click(function () {
    var text = $(this).text();
    $(".garage-space").text(text);
    $(".garage ul").removeClass("active");
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
