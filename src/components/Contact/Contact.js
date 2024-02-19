import { contacts } from '../../utils/contacts';
import './Contact.css'

export const Contact = () => {
    const main = document.querySelector("main");
    main.innerHTML = "";
    const sectionContact = document.createElement("section");
    sectionContact.classList.add("components", "contacts");
    const h2Contact = document.createElement("h2");
    h2Contact.textContent = "Contact";
    sectionContact.appendChild(h2Contact);
    contacts.forEach((contact) => {
        const divContact = document.createElement("div");
        divContact.className = "contact";
        const img = document.createElement("img");
        img.src = `${contact.img}`;
        const aContact = document.createElement("a");
        aContact.href = `${contact.content}`;
        aContact.textContent = `${contact.name}`;
        aContact.target = `${contact.target || ""}`;
        divContact.appendChild(img);
        divContact.appendChild(aContact);
        sectionContact.appendChild(divContact);
    });

    main.appendChild(sectionContact);

}