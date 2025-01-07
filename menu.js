function menuClick() {
    console.log("clicked")
    const nav = document.querySelector("header .nav");
    nav.classList.toggle("show")

    console.log(nav.getBoundingClientRect())
}