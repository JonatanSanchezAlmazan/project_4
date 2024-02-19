import './Link.css'

export const Link = (parentElement, link) => {
    const { name, component } = link;
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = name;
    a.href = `#${name}`;
    a.classList.add("inactive");
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
        link.classList.add('inactive');

    });
    a.classList.remove('inactive');
    a.classList.add('active');
}