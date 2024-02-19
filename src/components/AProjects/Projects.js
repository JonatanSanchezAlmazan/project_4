import { projects } from '../../utils/projects';
import './Projects.css'

export const Projects = () => {
    const main = document.querySelector("main");
    main.innerHTML = "";
    const sectionProjects = document.createElement("section");
    sectionProjects.classList.add("projects");
    const sectionTitle = document.createElement("section");
    sectionTitle.classList.add("title");
    const h2 = document.createElement("h2");
    h2.textContent = "Projects";
    main.appendChild(sectionProjects);
    projects.forEach((project) => {
        const divProject = document.createElement("div");
        divProject.className = "project";
        const img = document.createElement("img");
        img.src = `${project.img}`;
        const h2 = document.createElement("h2");
        h2.textContent = `${project.name}`;
        const p = document.createElement("p");
        p.textContent = `${project.text}`;
        const a = document.createElement("a");
        a.textContent = "Open Project";
        a.href = `${project.url}`
        a.target = `${project.target}`
        divProject.appendChild(img);
        divProject.appendChild(h2);
        divProject.appendChild(p);
        divProject.appendChild(a);
        sectionProjects.appendChild(divProject);
    })
    main.appendChild(sectionTitle);
    sectionTitle.appendChild(h2);
    main.appendChild(sectionProjects);
}