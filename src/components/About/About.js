import { skills } from '../../utils/skills';
import './About.css'

export const About = () => {
    const main = document.querySelector("main");
    main.innerHTML = "";
    const sectionAbout = document.createElement("section");
    sectionAbout.classList.add("components", "about")
    const h2AboutMe = document.createElement("h2");
    h2AboutMe.textContent = "About me";
    const pAbout = document.createElement("p");
    pAbout.textContent = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset , las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.";
    const h2Skills = document.createElement("h2");
    h2Skills.textContent = "Skills";
    const ulSkills = document.createElement("ul");
    skills.forEach((skill) => {
        const liSkill = document.createElement("li");
        const labelSkill = document.createElement("label");
        labelSkill.textContent = skill.name;
        const divSkill = document.createElement("div");
        divSkill.classList.add("skill");
        const divBackfill = document.createElement("div");
        divBackfill.classList.add("backfill");
        divBackfill.style.width = `${skill.value}%`;

        divSkill.appendChild(divBackfill);
        liSkill.appendChild(labelSkill);
        liSkill.appendChild(divSkill);
        ulSkills.appendChild(liSkill);
    })
    sectionAbout.appendChild(h2AboutMe);
    sectionAbout.appendChild(pAbout);
    sectionAbout.appendChild(h2Skills);
    sectionAbout.appendChild(ulSkills);
    main.append(sectionAbout);
}