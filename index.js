const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1.0";
        }
    });
};

const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.3,
    rootMargin: "1px"
});

const targets = document.querySelectorAll("section");
targets.forEach(target => {
    observer.observe(target);
});