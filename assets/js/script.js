/* var btnConsultar = document.querySelector('#btnConsultar');
btnConsultar.addEventListener('click', function(){
    btnConsultar.setAttribute('class', 'btn btn-danger');
}); */

var btnConsultar = document.querySelector('#btnConsultar');
btnConsultar.addEventListener('click', function () {
    var txtNombrePokemon = document.querySelector('#txtNombrePokemon').value; /* Anda a la caja y traeme el valor */
    $.ajax({ /* Anda a JQuery ($) luego entra (.) y ejecuta la función() (Es una solicitud, esta pidiendo un recurso)*/
        type: "get",
        url: "https://pokeapi.co/api/v2/pokemon/" + txtNombrePokemon,/* La caja ya viene con el valor, lo pedí arriba */
        dataType: "json",
        success: function (response) {
            console.log(response);
            crearGrafico(response);
        }
    });

    txtNombrePokemon.value ='';
});

function crearGrafico(datos){ /* "datos" es el nombre local de la función, es irrelevante, solo indica que tengo q recibir ALGO, es un parámetro, un recurso necesario (el efectivo al ir a comprar, la compra es la funcion) */
    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "dark1", // "light2", "dark1", "dark2"
        animationEnabled: true, // change to true		
        title:{
            text: datos.name
        },
        data: [
        {
            // Change type to "bar", "area", "spline", "pie",etc.
            type: "column",
            dataPoints: [
                { label: "hp",  y: datos.stats[0].base_stat  },
                { label: "attack", y: datos.stats[1].base_stat  },
                { label: "defense", y: datos.stats[2].base_stat  },
                { label: "special-attack",  y: datos.stats[3].base_stat  },
                { label: "special-defense",  y: datos.stats[4].base_stat  },
                { label: "speed",  y: datos.stats[5].base_stat  }
            ]
        }
        ]
    });
    chart.render();
}