const searchInput = document.querySelector(".search");
function fclick() {
		searchInput.classList.toggle("on");
}

searchInput.addEventListener("click", fclick);