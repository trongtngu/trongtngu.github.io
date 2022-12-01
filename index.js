const landing = document.getElementById("landing");

let arr = Array.from(document.getElementsByClassName("detail"))

for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener("mouseover", () => {
        landing.setAttribute("data-activeIndex", i)
    })
}

const aboutPage = document.getElementById('page-about-me');
// 01/12/2022:
// Up to making a link send you to another page