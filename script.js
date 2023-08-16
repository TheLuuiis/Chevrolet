'used strict'
// <    > 

    // Accedemos al formulario - (nombre)
    document.addEventListener('DOMContentLoaded', () => {
        const formulario = document.getElementById('formulario');
        // Submit
        formulario.addEventListener('submit', (e) => {
	        e.preventDefault();
			const expresionRegularNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
        
	        const datos = {
		        nombre: formulario.nombre.value,
	        };

			// Validamos el nombre
			if(!expresionRegularNombre.test(datos.nombre)) {
				console.log('Nombre invalido!')
				return;
			}
	    
	        console.log('Enviando datos...');
        });

    }); 

    // Accedemos al formulario - (correo)
    document.addEventListener('DOMContentLoaded', () => {
        const formulario = document.getElementById('formulario');
    
        formulario.addEventListener('submit', (e) => {
	       e.preventDefault();

           const expresionRegularCorreo = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-z0-9-.]+/;
           

           const datosCoreo = {
            correo: formulario.correo.value,
           };
           // Validamos el correo
           if(!expresionRegularCorreo.test(datosCoreo.correo)) {
            console.log('Correo invalido!');
            return;
           };

           console.log('Enviando datos...');

        });
    });

    // Accedemos al formulario - (telefono)
    document.addEventListener('DOMContentLoaded', () => {
        const formulario = document.getElementById('formulario');
    
        formulario.addEventListener('submit', (e) => {
	       e.preventDefault();
            
           const expresionRegularTelefono = /^3[\d]{9}$/;

           const datosTelefono = {
            telefono: formulario.telefono.value,
           };

           if(!expresionRegularTelefono.test(datosTelefono.telefono)) {
            console.log('Numero de telefono invalido!');
            return;
           };

           console.log('Enviando datos...');

        });
    }); 
    
    // Aplicamos la clase activa cuando falte algun campo por llenar
    function validarFormulario() {
        // Obtener el valor del campo nombre
        var nombre = document.getElementById("nombre").value.trim();
        var correo = document.getElementById("correo").value.trim();
        var telefono = document.getElementById("telefono").value.trim();
        
        // Verificar si el campo nombre está vacío
        if (nombre === "") {
            // Si el campo está vacío, añadir una clase para resaltar el borde en rojo
            document.getElementById("nombre").classList.add("campo-invalido");
        } else {
            // Si el campo no está vacío, remover la clase de borde rojo (si estaba marcado previamente)
            document.getElementById("nombre").classList.remove("campo-invalido");
            // Aquí puedes realizar otras acciones o enviar el formulario
        };

         if (correo === "") {
            document.getElementById("correo").classList.add("campo-invalido");
        } else {
            document.getElementById("correo").classList.remove("campo-invalido");
            
        };

         if (telefono === "") {
            document.getElementById("telefono").classList.add("campo-invalido");
        } else { 
            document.getElementById("telefono").classList.remove("campo-invalido");
            
        };

    };

    // Recorremos todos los inputs y quitamos la clase activa de input vacio
    window.onload = function() {
        var campos = document.getElementsByClassName("input-line");
        for (var i = 0; i < campos.length; i++) {
            campos[i].classList.remove("campo-invalido");
        }
    };

    /* BOTON PRINCIPAL */
        function irArriba(pxPantalla) {
            window.addEventListener('scroll', () => {
                var scroll = document.documentElement.scrollTop;
                var botonArriba = document.getElementById('botonArriba');
    
                if(scroll > pxPantalla) {
                    botonArriba.style.right = 20 + 'px';
                } else {
                    botonArriba.style.right = -100 + 'px';
                }
            });
        }
    
        irArriba(500);
  
        /* CARRITO DE COMPRAS*/
        const header = document.querySelector("#header");
        const contenedor = document.querySelector("#contenedor");
        const body = document.querySelector("body");
            window.addEventListener("scroll", function(){
            if(contenedor.getBoundingClientRect().top<10){
            header.classList.add("scroll")
            }
            else{
                header.classList.remove("scroll")
            }
        })