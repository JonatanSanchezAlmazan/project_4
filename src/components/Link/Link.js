import './Link.css'

export const Link = (parentElement, link) => {
    const { name, component } = link;
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = name;
    a.href = `#${name}`;
    if (a.textContent === "Init") {
        a.classList.add("active");
    }
    li.append(a);
    a.addEventListener("click", () => {
        changeClass(parentElement, a);
        component();
    })
    parentElement.append(li);
}

const changeClass = (element, a) => {
    element.querySelectorAll("a").forEach(link => {
        link.classList.remove('active');
    });
    a.classList.add('active');
}