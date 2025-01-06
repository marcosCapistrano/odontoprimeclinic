const callback = (entries, observer) => {

const after = document.querySelector("#hero .cover");
after.classList.add("darkene")
};

const observer = new IntersectionObserver(callback, {threshold: 1.0});

const target = document.querySelector("#hero");
observer.observe(target);

console.log(observer)