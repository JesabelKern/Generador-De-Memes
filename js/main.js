/* BOTONES DEL NAV */
const buttonImage = document.querySelector(".image")

const buttonText = document.querySelector(".text")

const buttonMode = document.querySelector(".dark-mode")


/* SELECCIÓN DE LOS ASIDE DE IMAGEN Y TEXTO */
const asideEditImage = document.querySelector(".edit-image")

const asideEditText = document.querySelector(".edit-text")

/* FUNCION PARA QUE SE ABRAN LOS ASIDE */
const openAsideEditText = () => {
    asideEditImage.classList.add("hidden")
    asideEditText.classList.remove("hidden")
}
buttonText.onclick = openAsideEditText 

const openAsideEditImage = () => {
    asideEditText.classList.add("hidden")

    asideEditImage.classList.remove("hidden")
}
buttonImage.onclick = openAsideEditImage

/* FUNCION PARA CAMBIAR MODO CLARO Y OSCURO */
const body = document.querySelector(".dark-theme")
const header = document.querySelector(".dark-header")
const main = document.querySelector(".dark-main")
const asideImage = document.querySelector(".edit-image")
const asideText = document.querySelector(".edit-text")

const changeTextButtonMode = () => {
  if (buttonMode.innerHTML === "Modo oscuro") {
    buttonMode.innerHTML = "Modo claro";
   } else {
  buttonMode.innerHTML = "Modo oscuro";
   }
  }

const modeLightBulb = () => {
  changeTextButtonMode()
    body.classList.toggle("dark-theme")
    header.classList.toggle("dark-header")
    main.classList.toggle("dark-main")
    asideImage.classList.toggle("dark-aside")
    asideText.classList.toggle("dark-aside")
}
buttonMode.onclick = modeLightBulb

/* ....FUNCIONES PARA APLICAR AL FORMULARIO IMAGEN.... */ 

                    /* RUTA DEL URL */
const imageMeme = document.getElementById("image-meme");
const urlInput = document.getElementById("url");
              
              
urlInput.oninput = () => {
  imageMeme.src = urlInput.value;
};