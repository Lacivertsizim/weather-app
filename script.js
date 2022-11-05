const url =
  "https://api.openweathermap.org/data/2.5/weather?q=London&appid=[APPKEY]";

let app = document.querySelector('#app');
let inputElm = document.createElement('input');
let btnElm = document.createElement('button');

inputElm.setAttribute('id', 'city');
inputElm.setAttribute('placeholder', 'City');
btnElm.setAttribute('id', 'search');

btnElm.innerHTML = 'Search';

app.appendChild(inputElm);
app.appendChild(btnElm);

searchCity = () => {
    let input = inputElm.value.toUpperCase();
    if(input) {
        fetchWeather (input);
        console.log("Girilen şehir:", input);
    }else{
        let par = document.createElement('p'); 
        par.setAttribute('id', 'paragraf');
        app.appendChild(par);
        document.querySelector('#paragraf').innerText = "Lütfen bir şehir giriniz!"
    }
}

btnElm.addEventListener('click', searchCity);

const fetchWeather = async (city) => {
    let respone = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city +
    "&units=metric&appid=380b35b99ba5b501a454f512c292ce11");
    let res = await respone.json();
    showWeather(res);
    console.log(res)
}

const showWeather = (res) => {
    let iconurl =
    "http://openweathermap.org/img/w/" + res.weather[0].icon + ".png";
    app.innerHTML = "";
    app.innerHTML += '<p>' + res.name.toUpperCase() + '</p>'; 
    app.innerHTML += '<img id="image" src="'+ iconurl +'">'
    app.innerHTML += '<p>' + res.main.temp.toFixed(0) + '</p>'; 
    app.innerHTML += '<button id="reload">Try</button>';
    document.querySelector('#reload').onclick = () => {
        location.reload();
    }
}



