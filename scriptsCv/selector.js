'use strict';

//$(document).ready(function() {
var lista = document.getElementById('desplegable');
lista.addEventListener('onchange', function(event) {
    var lista = document.getElementById('desplegable');
    var indiceSeleccionado = lista.selectedIndex;
    var opcionSeleccionada = lista.options[indiceSeleccionado];
    console.log(opcionSeleccionada.value);
});
//});
/*if ($('select').attr('value') === 'contratacion') {
    $(getElementById('seleccionado').append('<label for="empresa">Empresa</label><input type="text" name="empresa" id="empresa" required>'));
} else return 0;*/


/*var indiceSeleccionado = lista.selectedIndex;
var opcionSeleccionada = lista.options[indiceSeleccionado];

var aniadido = '<label for="empresa">Empresa</label><input type="text" name="empresa" id="empresa" required>';
//if (opcionSeleccionada.value === 'contratacion') {
console.log(opcionSeleccionada.innerHTML);
//  $(getElementById('aniadido').append());
//}
*/
