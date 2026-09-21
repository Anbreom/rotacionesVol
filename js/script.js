const botonesRotacion = document.querySelectorAll('.boton-rotacion');
const botonesMomento = document.querySelectorAll('.boton-momento');
const imagen = document.querySelector('#imagen-rotacion');
const titulo = document.querySelector('#titulo-rotacion');
const indicador = document.querySelector('#indicador-momento');
const rutaImagenes = document.body.dataset.assetsPath;

let rotacionActual = '1';
let momentoActual = 'Base';

function actualizarVista() {
  const nombreMomento = momentoActual === 'Base' ? 'Base' : 'Recepción';

  imagen.src = `${rutaImagenes}R${rotacionActual}_${momentoActual}.png`;
  imagen.alt = `Rotación ${rotacionActual} en posición ${nombreMomento.toLowerCase()}`;
  titulo.textContent = `R${rotacionActual} · ${nombreMomento}`;
  indicador.textContent = momentoActual === 'Base' ? 'BASE' : 'RECEPCIÓN';
}

botonesRotacion.forEach((boton) => {
  boton.addEventListener('click', () => {
    rotacionActual = boton.dataset.rotacion;
    botonesRotacion.forEach((item) => item.classList.remove('activo'));
    boton.classList.add('activo');
    actualizarVista();
  });
});

botonesMomento.forEach((boton) => {
  boton.addEventListener('click', () => {
    momentoActual = boton.dataset.momento;
    botonesMomento.forEach((item) => item.classList.remove('activo'));
    boton.classList.add('activo');
    actualizarVista();
  });
});
