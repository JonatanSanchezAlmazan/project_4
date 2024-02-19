import { Projects } from "../components/AProjects/Projects";
import { About } from "../components/About/About";
import { Contact } from '../components/Contact/Contact';
import { Education } from "../components/Education/Education";
import { Init } from "../components/Init/Init";


export const navLinks = [{
        name: "Init",
        component: Init
    },

    {
        name: "About me",
        component: About

    },
    {
        name: "Education",
        component: Education
    },
    {
        name: "Contact",
        component: Contact
    },
    {
        name: "Projects",
        component: Projects
    }

]