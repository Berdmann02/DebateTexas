// smooth scroll
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});

// accordion function

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// accordion-light function

var accLight = document.getElementsByClassName("accordion-light");
var j;

for (j = 0; j < accLight.length; j++) {
  accLight[j].addEventListener("click", function() {
    this.classList.toggle("active");
    var panelLight = this.nextElementSibling;
    if (panelLight.style.maxHeight) {
      panelLight.style.maxHeight = null;
    } else {
      panelLight.style.maxHeight = panelLight.scrollHeight + "px";
    }
  });
}