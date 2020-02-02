// Get the modal
var modal = document.getElementById("myModal");

var sectA = document.getElementsByClassName("sectionA")[0];

var sectB = document.getElementsByClassName("sectionB")[0];

var sectC = document.getElementsByClassName("sectionC")[0];

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("clickable")[0];

var modalH = document.getElementById("modalHeader");

var pOne = document.getElementById("pOne");

var pSec = document.getElementById("pSecond");

var modF = document.getElementById("modalFooter");

sectA.onclick = function() {
	 
	modalH.innerHTML = "Professional";
	pOne.innerHTML = "HTML5 - CSS3 - JS are the fundamentals to develop web applications";
	pSec.innerHTML = "We need to have a good knowledge of these languages";
	modF.innerHTML = "this is a modal";
  modal.style.display = "block";
}

sectB.onclick = function() {
	modalH.innerHTML = "Personal";
	pOne.innerHTML = "Communication is necessary to have a good work environment and to be synchronized when we are working";
	pSec.innerHTML = "Creativity makes the things we do special";
	modF.innerHTML = "this is a modal";
  modal.style.display = "block";
}

sectC.onclick = function() {
	modalH.innerHTML = "Software";
	pOne.innerHTML = "A good front end developer must know some tools that let him create things that improve the UX/UI";
	pSec.innerHTML = "UX/UI is very important to create web applications";
	modF.innerHTML = "this is a modal";
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}