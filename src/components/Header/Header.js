import { navLinks } from '../../utils/navLinks';
import { Link } from '../Link/Link';
import './Header.css'

export const Header = () => {
    const header = document.querySelector("header");
    const h2 = document.createElement("h2");
    h2.textContent = "Jonatan Sanchez";
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    navLinks.forEach((link) => {
        Link(ul, link)
    })
    nav.append(ul);
    header.appendChild(h2);
    header.append(nav);

}