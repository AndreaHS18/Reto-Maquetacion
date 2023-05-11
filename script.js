function cargarDatos() {
    try {
        fetch('datos.json')
            .then(respuesta => respuesta.json()) //Se indica el formato para obtener la información
            .then(inmuebles => {
                inmuebles.forEach(inmueble => {
                    const {name, description, location, totalArea, mainImage, terrace, rooms, available} = inmueble;

                    const divCard = document.createElement('DIV');
                    divCard.classList.add('card');

                    const divCardBody = document.createElement('DIV');
                    divCard.classList.add('card-body');

                    divCard.appendChild(divCardBody);

                    const divSold = document.createElement('DIV');

                    divCardBody.appendChild(divSold);

                    const availableInmueble = document.createElement('P');
                    if(available !== true) {
                        availableInmueble.textContent = "Vendido";
                        divSold.classList.add('sold');
                    }
                    availableInmueble.classList.add('available');

                    divSold.appendChild(availableInmueble);

                    const nameInmueble = document.createElement('H2');
                    nameInmueble.textContent = name;
                    nameInmueble.classList.add('name');

                    const descripcionInmueble = document.createElement('H4');
                    descripcionInmueble.textContent = description;
                    descripcionInmueble.classList.add('description');

                    divCardBody.appendChild(nameInmueble);
                    divCardBody.appendChild(descripcionInmueble);

                    const divRow = document.createElement('DIV');
                    divRow.classList.add('div-row');
                    divRow.classList.add('div-row-location');

                    divCardBody.appendChild(divRow);

                    const iconLocation = document.createElement('I');
                    iconLocation.classList.add('fa-sharp');
                    iconLocation.classList.add('fa-solid');
                    iconLocation.classList.add('fa-location-dot');

                    const locationInmueble = document.createElement('P');
                    locationInmueble.textContent = location;
                    locationInmueble.classList.add('location');
                    locationInmueble.classList.add('txt');

                    divRow.appendChild(iconLocation);
                    divRow.appendChild(locationInmueble);

                    const imageInmueble = document.createElement('IMG');
                    imageInmueble.src = mainImage;
                    imageInmueble.classList.add('mainImage');

                    divCardBody.appendChild(imageInmueble);

                    const divPrecio = document.createElement('DIV');

                    divCardBody.appendChild(divPrecio);

                    const textoPrecioInmueble = document.createElement('P');
                    textoPrecioInmueble.textContent = "Desde";
                    textoPrecioInmueble.classList.add('txt');
                    textoPrecioInmueble.classList.add('txtDesde');

                    const precioInmueble = document.createElement('P');
                    precioInmueble.textContent = "$ 1,940,000 MXN";
                    precioInmueble.classList.add('precio')

                    const nombreLugarInmueble = document.createElement('P');
                    nombreLugarInmueble.textContent = name + " " + "-" + " " + location;
                    nombreLugarInmueble.classList.add('location');

                    divPrecio.appendChild(textoPrecioInmueble);
                    divPrecio.appendChild(precioInmueble);
                    divPrecio.appendChild(nombreLugarInmueble);

                    const divInfoInmueble = document.createElement('DIV');
                    divInfoInmueble.classList.add('div-info');

                    divCardBody.appendChild(divInfoInmueble);

                    // TOTALES
                    const divRowTotal = document.createElement('DIV');
                    divRowTotal.classList.add('div-row');

                    divInfoInmueble.appendChild(divRowTotal);

                    const iconTotal = document.createElement('I');
                    iconTotal.classList.add('fa-solid');
                    iconTotal.classList.add('fa-crop-simple');

                    divRowTotal.appendChild(iconTotal);

                    const divNumTotal = document.createElement('DIV');
                    divNumTotal.classList.add('div-num');

                    divRowTotal.appendChild(divNumTotal);

                    const totalAreaInmueble = document.createElement('P');
                    totalAreaInmueble.textContent = totalArea + "m^2";
                    totalAreaInmueble.classList.add('totalArea');
                    totalAreaInmueble.classList.add('txt');

                    const textoTotalInmueble = document.createElement('P');
                    textoTotalInmueble.textContent = "Totales";
                    textoTotalInmueble.classList.add('txt');

                    divNumTotal.appendChild(totalAreaInmueble);
                    divNumTotal.appendChild(textoTotalInmueble);
                    
                    // TERRAZA
                    const divRowTerraza = document.createElement('DIV');
                    divRowTerraza.classList.add('div-row');

                    divInfoInmueble.appendChild(divRowTerraza);

                    const iconTerraza = document.createElement('I');
                    iconTerraza.classList.add('fa-solid');
                    iconTerraza.classList.add('fa-users-viewfinder');

                    divRowTerraza.appendChild(iconTerraza);

                    const divNumTerraza = document.createElement('DIV');
                    divNumTerraza.classList.add('div-num');

                    divRowTerraza.appendChild(divNumTerraza);

                    const terraceInmueble = document.createElement('P');
                    terraceInmueble.textContent = totalArea + "m^2";
                    terraceInmueble.classList.add('terrace');
                    terraceInmueble.classList.add('txt');

                    const textoTerrazaInmueble = document.createElement('P');
                    textoTerrazaInmueble.textContent = "Terraza";
                    textoTerrazaInmueble.classList.add('txt');

                    divNumTerraza.appendChild(terraceInmueble);
                    divNumTerraza.appendChild(textoTerrazaInmueble);
                    
                    // RECAMARAS
                    const divRowRooms = document.createElement('DIV');
                    divRowRooms.classList.add('div-row');

                    divInfoInmueble.appendChild(divRowRooms);

                    const iconRooms = document.createElement('I');
                    iconRooms.classList.add('fa-solid');
                    iconRooms.classList.add('fa-bed');

                    divRowRooms.appendChild(iconRooms);

                    const divNumRooms = document.createElement('DIV');
                    divNumRooms.classList.add('div-num');

                    divRowRooms.appendChild(divNumRooms);

                    const roomsInmueble = document.createElement('P');
                    roomsInmueble.textContent = rooms + "m^2";
                    roomsInmueble.classList.add('totalArea');
                    roomsInmueble.classList.add('txt');

                    const textoRoomsInmueble = document.createElement('P');
                    textoRoomsInmueble.textContent = "Totales";
                    textoRoomsInmueble.classList.add('txt');

                    divNumRooms.appendChild(roomsInmueble);
                    divNumRooms.appendChild(textoRoomsInmueble);

                    document.querySelector('#div-cards').appendChild(divCard);
                });
            }) //Se muestra la información
    } catch (error) {
        console.log(error);
    }
}

cargarDatos();