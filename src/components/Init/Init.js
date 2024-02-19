import './Init.css'

export const Init = () => {
    const main = document.querySelector("main");
    main.innerHTML = "";
    const sectionInit = document.createElement("section");
    sectionInit.classList.add("components", "sectionInit");
    const img = document.createElement("img");
    img.src = "https://cdn.pixabay.com/photo/2021/02/18/20/52/goku-6028390_960_720.png";
    img.alt = "myself";
    const h1 = document.createElement("h1");
    h1.textContent = "Welcome to my curriculum vitae";
    sectionInit.appendChild(img);
    sectionInit.appendChild(h1);
    main.appendChild(sectionInit);
}