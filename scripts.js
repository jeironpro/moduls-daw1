function mostrarEnlace(enlaceSel, seleccionado, nombre) {
    const secciones = document.querySelectorAll('.seccion');
    const enlaces = document.querySelectorAll("nav ul a");
    const botonRegresar = document.getElementById("boton-regresar");
    const footer = document.querySelector("footer");

    enlaces.forEach(enlace => {
        if (enlace === enlaceSel) {
            enlace.classList.add("activo");
            botonRegresar.style.display = "block";
            enlace.querySelector("li").textContent = nombre;
        } else {
            enlace.style.display = "none";
        }
    });

    botonRegresar.addEventListener("click", function() {
        enlaces.forEach(enlaceRest => {
            const nombreEnlace = enlaceRest.getAttribute("data-nombre");
            enlaceRest.style.display = "flex";
            botonRegresar.style.display = "none";
            enlaceRest.querySelector("li").textContent = nombreEnlace;
            footer.style.backgroundColor = "#0f0f0f";
        })

        secciones.forEach(seccionRest => seccionRest.style.display = "none");
    });

    secciones.forEach(seccion => {
        if (seccion.id === seleccionado) {
            seccion.style.display = "grid";
        } else {
            seccion.style.display = "none";
        }

        switch (seleccionado) {
            case "lmsgi":
                footer.style.backgroundColor = "#572c9b";
                break;
            case "ped":
                footer.style.backgroundColor = "#2ab3dd";
                break;
            case "ipoi":
                footer.style.backgroundColor = "#2c6b9b";
                break;
            case "bd":
                footer.style.backgroundColor = "#e47e1e";
                break;
            case "tut":
                footer.style.backgroundColor = "#1b9d56";
                break;
            case "diw":
                footer.style.backgroundColor = "#30b337";
                break;
            case "an":
                footer.style.backgroundColor = "#9b3f2c";
                break;
            case "si":
                footer.style.backgroundColor = "#ad1f79";
                break;
            default:
                footer.style.backgroundColor = "#f0f0f0";
        }
    });
}