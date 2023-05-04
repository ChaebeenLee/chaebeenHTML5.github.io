/* header scroll event */
const headerScrollevent = document.querySelector(".globalNavigation");



document.addEventListener("scroll", () => {
    if (window.pageYOffset > 50) {
        headerScrollevent.classList.add("active");
    } else {
        headerScrollevent.classList.remove("active");
    }
});



/* contact a 링크 막기 */
function preventClick(e){
	e.preventDefault();
}


