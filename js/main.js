/*<script      src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.0/FileSaver.min.js"      integrity="sha512-csNcFYJniKjJxRWRV1R7fvnXrycHP6qDR21mgz1ZP55xY5d+aHLfo9/FcGDQLfn2IfngbAHd8LdfsagcCqgTcQ=="      crossorigin="anonymous"      referrerpolicy="no-referrer"    ></script>      <script      src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.min.js"      integrity="sha512-01CJ9/g7e8cUmY0DFTMcUw/ikS799FHiOA0eyHsUWfOetgbx/t6oV4otQ5zXKQyIrQGTHSmRVPIgrgLcZi/WMA=="      crossorigin="anonymous"      referrerpolicy="no-referrer"    ></script>
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
  if (buttonMode.innerHTML === 'Modo oscuro') {
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

const urlInput = document.getElementById('url-input');
const memeImg = document.getElementById('image-meme');

urlInput.addEventListener('input', ()=> changeBackground())

const changeBackground = () => {
    memeImg.style.backgroundImage = `url('${urlInput.value}')`

}

                    /*INPUT DE FILTROS*/
const brightInput = document.getElementById('range-bright');
const opacityInput = document.getElementById('range-opacity')
const contrastInput = document.getElementById('range-contrast');
const blurInput = document.getElementById('range-blur');
const grayscaleInput = document.getElementById('range-grayscale');
const sepiaInput = document.getElementById('range-sepia');
const hueInput = document.getElementById('range-hue');
const saturateInput = document.getElementById('range-saturation');
const invertInput = document.getElementById('range-invert');


const filtros = () => {
  memeImg.style.filter = `brightness(${brightInput.value}) opacity(${opacityInput.value}) contrast(${contrastInput.value}%) blur(${blurInput.value}px) grayscale(${grayscaleInput.value}) sepia(${sepiaInput.value})  hue-rotate(${hueInput.value}deg) saturate(${saturateInput.value}%) invert(${invertInput.value})`
}


brightInput.addEventListener('input', ()=> filtros());
opacityInput.addEventListener('input', ()=> filtros());
contrastInput.addEventListener('input', ()=> filtros());
blurInput.addEventListener('input', ()=> filtros()); 
grayscaleInput.addEventListener('input', ()=> filtros());
sepiaInput.addEventListener('input', ()=> filtros());
hueInput.addEventListener('input', ()=> filtros());
saturateInput.addEventListener('input', ()=> filtros());
invertInput.addEventListener('input', ()=> filtros());