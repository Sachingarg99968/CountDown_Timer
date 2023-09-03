let h1 = document.querySelector("h1");
let input = document.querySelector("input");
let button = document.querySelector("button");
let container = document.querySelector(".container"); 

button.addEventListener("click", (e) => {
    let value = input.value;
    if (!value) return;

    container.classList.add("loading");

    let id = setInterval(() => {
        h1.innerText = value;
        value--;
        if (value < 0) {
            clearInterval(id);


            container.classList.remove("loading");
        }
    }, 1000);
});
