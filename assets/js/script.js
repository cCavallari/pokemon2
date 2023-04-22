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
        }
    });
});
