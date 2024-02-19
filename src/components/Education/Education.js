import './Education.css'

export const Education = () => {
    const main = document.querySelector("main");
    main.innerHTML = "";
    const sectionEducation = document.createElement("section");
    sectionEducation.classList.add("components", "education")
    sectionEducation.innerHTML = `
    <h2>Education</h2>
    <ul>
      <li>Medium degree in computer miscrosystems</li>
      <li>Superior degree in web application development</li>
      <li>Master's degree in artificial intelligence</li>
      <li>Bootcamp full stack developer</li>
    </ul>    
    `
    main.append(sectionEducation);
}