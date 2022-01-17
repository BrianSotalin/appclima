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
                    icono.src = './animated/rainy-1.svg'
                    break;
            }

        })
        .catch(error => {
            console.log(error)
        })


    //ocultamos la busqueda
    busqueda.style.display = "none"
    document.getElementById('ciudad').style.display="none"
};