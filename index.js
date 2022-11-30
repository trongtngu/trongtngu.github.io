const landing = document.getElementById("landing");

let arr = Array.from(document.getElementsByClassName("detail"))

for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener("mouseover", () => {
        landing.setAttribute("data-activeIndex", i)
    })
}