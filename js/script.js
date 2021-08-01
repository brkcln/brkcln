// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
for (var i = 0, length = btn.length; i < length; i++) {
	btn[i].onclick = function () {
		modal.style.display = "block";
	};
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};
document.addEventListener("DOMContentLoaded", function () {
	var elms = document.getElementsByClassName("splide");
	for (var i = 0, len = elms.length; i < len; i++) {
		new Splide(elms[i]).mount();
	}
});
new Splide(".splide").mount();
document.addEventListener("DOMContentLoaded", function () {
	var secondarySlider = new Splide("#secondary-slider", {
		fixedWidth: 100,
		height: 60,
		gap: 10,
		cover: true,
		isNavigation: true,
		focus: "center",
		breakpoints: {
			600: {
				fixedWidth: 66,
				height: 40,
			},
		},
	}).mount();

	var primarySlider = new Splide("#primary-slider", {
		type: "fade",
		heightRatio: 0.5,
		pagination: false,
		arrows: false,
		cover: true,
	}); // do not call mount() here.

	primarySlider.sync(secondarySlider).mount();
});
