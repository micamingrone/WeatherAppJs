//Apikey OpenWeatherMaps
const apikey = "f1cb084ec4278cd6be68d806ee63697c";
const boton = document.getElementById("btn");
const loader = document.getElementById("loader");
const cuerpo = document.getElementById("cuerpo");
const pie = document.getElementById("pie");

cuerpo.style.display = "none";
pie.style.display = "none";

const formulario = document.getElementById("formulario");
formulario.onsubmit = (e) => {
    e.preventDefault();
    loader.classList.add()
    let ciudad = document.getElementById("inputCiudad").value;


    if (ciudad == null || ciudad == "") {
        alert('Por favor, complete con el nombre de la ciudad');
        return false;
    }

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    let titleCiudad = document.getElementById("titleCiudad");
    let tempActual = document.getElementById("tempActual");
    let sensTermica = document.getElementById("sensTermica");
    let tempMin = document.getElementById("tempMin");
    let tempMax = document.getElementById("tempMax");
    let descripcion = document.getElementById("descripcion");
    let icono = document.getElementById("icono");


    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=" + apikey + "&units=metric&lang=es", requestOptions)
        .then(response => response.json())
        .then(result => {
            cuerpo.style.display = "block";
            pie.style.display = "flex";
            titleCiudad.innerHTML = "";
            titleCiudad.innerHTML = result.name;
            tempActual.innerHTML = "";
            sensTermica.innerHTML = "";
            tempMin.innerHTML = "";
            tempMax.innerHTML = "";
            descripcion.innerHTML = "";
            icono.innerHTML = "";
            tempActual.innerHTML = Math.round(result.main.temp) + "ºC";
            sensTermica.innerHTML = Math.round(result.main.feels_like) + "ºC";
            tempMin.innerHTML = Math.round(result.main.temp_min) + "ºC";
            tempMax.innerHTML = Math.round(result.main.temp_max) + "ºC";
            descripcion.innerHTML = capitalizarPrimeraLetra(result.weather[0].description);
            icono.innerHTML = `<img src="http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png" alt="icono">`;
        })
        .catch(error => console.log('error', error));

};


function capitalizarPrimeraLetra(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}