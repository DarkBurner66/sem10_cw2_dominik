const boutonsModale = document.querySelectorAll('.click');
const modale = document.querySelector('.modale');




for (let i = 0; i < boutonsModale.length; i++) {
    boutonsModale[i].addEventListener('click', openModale);
}

function openModale(){
    const popUp = document.createElement("p");
    popUp.classList.add("popUp");
    popUp.textContent = "FIN"
    modale.appendChild(popUp)
    modale.classList.add('visible');
    popUp.addEventListener("click", closeModale);
}

function closeModale(event) {
    modale.removeChild(event.target);
    modale.classList.remove('visible');
}