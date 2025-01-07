let figures = document.querySelectorAll("#gallery .gallery-container figure");

const minX = -200;
const maxY = 5;
const minY = 15;

let count = 0;
for (let figure of figures) {
    const rect = figure.getBoundingClientRect();
    const top = rect.top + window.scrollY;  // Absolute top position
    const left = rect.left + window.scrollX; // Absolute left position 

    let newY = Math.random() * (rect.height / 4)
    console.log(newY)
    console.log(rect.y)
    if (Math.random() < 0.5) {
        newY = newY;
    } else {
        newY = 5 - newY;
    }


    figure.style.transform = `translate(${(rect.width + 20) * count}px, ${newY}px)`
    figure.newY = newY;
    count++;
}

let start;

function step(timestamp) {
    if (start === undefined) {
        start = timestamp;
    }

    const elapsed = timestamp - start;

    for (let figure of figures) {
        const rect = figure.getBoundingClientRect();

        if (rect.x + rect.width > 0) {
            figure.style.transform = `translate(${rect.x - (elapsed / 10)}px, ${figure.newY}px)`
        } else {
            console.log("less than 0!")
            let greaterX = 0;

            for (let figure of figures) {
                const otherRect = figure.getBoundingClientRect();
                if (otherRect.x + otherRect.width + 20 > greaterX) {
                    greaterX = otherRect.x + otherRect.width + 20;
                }
            }

            console.log(greaterX)
            console.log(figure.style.transform)
            figure.style.transform = `translate(${greaterX}px, ${figure.newY}px)`
        }
    }

    start = timestamp;
    requestAnimationFrame(step);
}

requestAnimationFrame(step);
