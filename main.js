
// EXEMPLO 1
//  function tocaSomPom () {
//      document.querySelector('#som_tecla_pom').play();
//  }
//  document.querySelector('.tecla_pom');

// EXEMPLO 2
//   function tocaSomPom () {
//      document.querySelector('#som_tecla_pom').play();
//  }
//  document.querySelector('.tecla_pom').onClick = tocaSomPom;

// EXEMPLO 3
// const listaDeTeclas = document.querySelectorAll('.tecla');
// listaDeTeclas[0].onCLick = tocaSomPom;
// listaDeTeclas[1].onCLick = tocaSomClap;
// listaDeTeclas[2].onCLick = tocaSomTim;
// listaDeTeclas[3].onCLick = tocaSomPush;
// listaDeTeclas[4].onCLick = tocaSomSplash;

// EXEMPLO 4
// function tocaSom(idElementAudio) {
//   document.querySelector(idElementAudio).play();
// }

// const listaDeTeclas = document.querySelectorAll(".tecla");

// let contador = 0;

// while (contador < listaDeTeclas.length) {

//   listaDeTeclas[contador].onCLick = function () {
//     tocaSom('#som_tecla_pom');
//   }

//   contador = contador + 1;

//   console.log(tocaSom);
// }

// EXEMPLO 5
// function tocaSom(idElementAudio) {
//   document.querySelector(idElementAudio).play();
// }

// const listaDeTeclas = document.querySelectorAll('.tecla');

// let contador = 0;

// while (contador < listaDeTeclas.length) {

//   const tecla = listaDeTeclas[contador];

//   const instrumento = tecla.classList[1];

//   // template string
//   const idAudio = `#som_${instrumento}`;

//   console.log(idAudio);

//   tecla.onCLick = function () {
//     tocaSom(idAudio);
//   }

//   contador = contador + 1;

//   console.log(tocaSom);
// }
