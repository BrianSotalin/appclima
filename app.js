// window.addEventListener('load',()=>{
//    //variables
//    let lon //variable longitud
//    let lat  //variable latitud

//    let temperatura=document.getElementById('tmp-valor')
//    let descripcion = document.getElementById('tmp-descripcion')

//    let ubicacion=document.getElementById('ubicacion')
//    let icono=document.getElementById('icono-animado')

//    let viento =document.getElementById('viento')


//     if(navigator.geolocation){
//        navigator.geolocation.getCurrentPosition(position =>{
//           // console.log(position)
//           lon=position.coords.longitude;
//           lat=position.coords.latitude;

//           console.log(ciudad)

//           //const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=7364a5a76bd28c9ee03b102e4cae6a0d`;
//           const url=`https://api.openweathermap.org/data/2.5/weather?q=Madrid&lang=es&units=metric&appid=7364a5a76bd28c9ee03b102e4cae6a0d` 

//           //console.log(url)
//           //obtenemos los datos con fetch
//           fetch(url)
//           .then(response => {return response.json()})
//           .then (data =>{
//               //console.log(data.main.temp)
//               //TEMPERATURA
//               let temp=Math.round(data.main.temp)//capturamos los datos en una variable 
//               temperatura.textContent=`${temp}ºC`//el valor de esa variable la pasamos a html

//              //DESCRIPCION DEL CLIMA
//              let desc=data.weather[0].description
//              descripcion.textContent=desc.toUpperCase()

//              //UBICACION
//              let ub=data.name
//              ubicacion.textContent=ub

//              //VIENTO
//              let wind=data.wind.speed
//              viento.textContent=`${wind}m/s`

//              //ICONOS ANIMADOS
//              console.log(data.weather[0].main)//__capturamos el tipo de clima que hace
//              switch(data.weather[0].main){
//                  case 'Rain':
//                      icono.src='./animated/rainy-1.svg'
//                      break;
//              }

//           })
//           .catch(error =>{
//               console.log(error)
//           })
//        })
//     }
// });
const getValueInput = () => {

    let temperatura = document.getElementById('tmp-valor')
    let descripcion = document.getElementById('tmp-descripcion')

    let ubicacion = document.getElementById('ubicacion')
    let icono = document.getElementById('icono-animado')
    let bandera = document.getElementById('bandera')

    let TextoInicio = document.getElementById("text-inicio")
    let viento = document.getElementById('viento')
    let ciudad = document.getElementById('ciudad').value;

    let boton = document.getElementById('btn')
    let busqueda = document.getElementById('busqueda')

    //borrar texto de inicio

    boton.innerHTML = "Reiniciar busqueda"

    //const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=7364a5a76bd28c9ee03b102e4cae6a0d`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=es&units=metric&appid=7364a5a76bd28c9ee03b102e4cae6a0d`

    //console.log(url)
    //obtenemos los datos con fetch
    fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            //console.log(data.main.temp)
            //TEMPERATURA
            let temp = Math.round(data.main.temp) //capturamos los datos en una variable 
            temperatura.textContent = `${temp}ºC` //el valor de esa variable la pasamos a html

            TextoInicio.innerHTML = "Vel. del viento";

            //DESCRIPCION DEL CLIMA
            let desc = data.weather[0].description
            descripcion.textContent = desc.toUpperCase()

            //UBICACION
            let ub = data.name
            ubicacion.textContent = ub

            //VIENTO
            let wind = data.wind.speed
            viento.textContent = `${wind}m/s`


            //ICONOS ANIMADOS
            console.log(data.weather[0].main) //__capturamos el tipo de clima que hace
            switch (data.weather[0].main) {
                case 'Rain':
                    icono.src = './animated/rainy-7.svg'
                    break;
                case 'Clear':
                    icono.src = './animated/day.svg'
                    break;
                case 'Clouds':
                    icono.src = './animated/cloudy.svg'
                    break;
                case 'Snow':
                    icono.src = './animated/snowy-6.svg'
                    break;
                case 'Fog':
                    icono.src = './animated/cloudy.svg'
                    break;
                    case 'Drizzle':
                        icono.src = './animated/thunder.svg'
                        break;    
            }
            //ZONA HORARIA
            console.log(data.timezone)
            //BANDERAS
            console.log(data.sys.country)
            switch (data.sys.country) {
                //PAISES EUROPA
                case 'ES':
                    bandera.src = './img/spain-1.png'
                    break;
                case 'PT':
                    bandera.src = './img/portugal.png'
                    break;
                case 'FR':
                    bandera.src = './img/france.png'
                    break;
                case 'GE':
                    bandera.src = './img/alemania.png'
                    break;
                case 'CH':
                    bandera.src = './img/suiza.png'
                    break;
                case 'PL':
                    bandera.src = './img/polonia.png'
                    break;
                case 'GR':
                    bandera.src = './img/grecia.png'
                    break;
                case 'IT':
                    bandera.src = './img/italia.png'
                    break;
                case 'RU':
                    bandera.src = './img/rusia.png'
                    break;
                case 'GB':
                    bandera.src = './img/united-kingdom.png'
                    break;
                    //PAISES LATAM    
                case 'EC':
                    bandera.src = './img/ecuador.png'
                    break;
                case 'CO':
                    bandera.src = './img/colombia.png'
                    break;
                case 'CL':
                    bandera.src = './img/chile.png'
                    break;
                case 'AR':
                    bandera.src = './img/argentina.png'
                    break;
                case 'UY':
                    bandera.src = './img/uruguay.png'
                    break;
                case 'BR':
                    bandera.src = './img/brazil.png'
                    break;
                case 'BO':
                    bandera.src = './img/bolivia.png'
                    break;
                case 'VE':
                    bandera.src = './img/venezuela.png'
                    break;
                case 'PE':
                    bandera.src = './img/peru.png'
                    break;
                case 'MX':
                    bandera.src = './img/mexico.png'
                    break;
                    //RESTO DEL MUNDO
                case 'JP':
                    bandera.src = './img/japon.png'
                    break;
                case 'CN':
                    bandera.src = './img/china.png'
                    break;
                case 'US':
                    bandera.src = './img/united-states.png'
                    break;
                case 'CA':
                    bandera.src = './img/canada.png'
                    break;
                case 'AU':
                    bandera.src = './img/australia.png'
                    break;
            }

        })
        .catch(error => {
            console.log(error)
        })


    //ocultamos la busqueda
    busqueda.style.display = "none"
    busqueda.style.background="yellow"
    document.getElementById('ciudad').style.display = "none"
    document.getElementById('weather').style.display="none"
};