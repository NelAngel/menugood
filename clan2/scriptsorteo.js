let participantes = [];

function agregarParticipantes() {
    const nombresTextarea = document.getElementById("nombres").value;
    const nombresArray = nombresTextarea.split('\n').filter(nombre => nombre.trim() !== "");
    participantes.push(...nombresArray);
    actualizarTarjetas();
    document.getElementById("nombres").value = "";
}

function actualizarTarjetas() {
    const contenedorTarjetas = document.getElementById("contenedor-tarjetas");
    contenedorTarjetas.innerHTML = "";
    participantes.forEach(participante => {
        // Convertir el nombre a mayúsculas
        const nombreMayusculas = participante.toUpperCase();

        const tarjeta = document.createElement("div");
        tarjeta.textContent = nombreMayusculas; // Mostrar el nombre en mayúsculas
        tarjeta.classList.add("tarjeta");
        tarjeta.style.backgroundImage = "url('logo1.jpeg')"; // Cambiar 'ruta_de_la_imagen' con la ruta de la imagen
        contenedorTarjetas.appendChild(tarjeta);
    });
}

function realizarSorteo() {
    const cantidadParticipantes = participantes.length;
    if (cantidadParticipantes > 0) {
        // Agregamos la clase 'mezcla' a todas las tarjetas
        const tarjetas = document.querySelectorAll('.tarjeta');
        tarjetas.forEach(tarjeta => {
            tarjeta.classList.add('mezcla');
        });

        setTimeout(() => {
            // Quitamos la clase 'mezcla' después de un segundo para poder reproducir la animación nuevamente
            tarjetas.forEach(tarjeta => {
                tarjeta.classList.remove('mezcla');
            });
            
            const indiceGanador = Math.floor(Math.random() * cantidadParticipantes);
            const ganador = participantes[indiceGanador];
            document.getElementById("ganador").textContent = ganador;
        }, 1000); // Esperamos 1 segundo (el mismo tiempo que dura la animación de mezcla)
    } else {
        document.getElementById("ganador").textContent = "No hay participantes para realizar el sorteo.";
    }
}
