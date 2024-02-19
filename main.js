import { Header } from './src/components/Header/Header';
import { Init } from './src/components/Init/Init';
import './style.css'

const divApp = document.querySelector("#app");

divApp.innerHTML = `
<header class = "header"></header>
<main class = "main"></main>
`

Header();
Init();