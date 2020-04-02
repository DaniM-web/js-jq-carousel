

$(document).ready(function(){
  //funzione al click di prev  e next

  $('.prev').click(
    prevImg
  );

  $('.next').click(
    nextImg
  );

  //creo le funzioni di callback
  function nextImg() {

  //definisco il valore dell'immagine corrente al momento del click
    var current = $('.images img.active');
    var currentPal = $('.nav i.active');
  // rimuovo la classe active all'immagine corrente
    current.removeClass('active');
    currentPal.removeClass('active');
    //creo la condizione per ritornare alla prima img quando si è all'ultima
    //se l'img corrente ha class last, allora do active a img con classe first
    if(current.hasClass('last')){
      $('.images img.first').addClass('active');
      $('.nav i.first').addClass('active');
    }else
  //altrimenti do la classe active all'immagine successiva
    current.next().addClass('active');
    currentPal.next().addClass('active');
  }


  function prevImg() {

  //definisco il valore dell'immagine corrente al momento del click
    var current = $('.images img.active');
    var currentPal = $('.nav i.active');
  // rimuovo la classe active all'immagine corrente
    current.removeClass('active');
    currentPal.removeClass('active');
    //creo la condizione per ritornare alla prima img quando si è all'ultima
    //se l'img corrente ha class last, allora do active a img con classe first
    if(current.hasClass('first')){
      $('.images img.last').addClass('active');
      $('.nav i.last').addClass('active');
    }else
  //altrimenti do la classe active all'immagine successiva
    current.prev().addClass('active');
    currentPal.prev().addClass('active');
  }

  //far funzioanare i pallini al corrispettivo click

  $('.nav i').click(
    imgToShow
  );

function imgToShow() {
  var imgSelector = $('.images img');
  var palliniSelector = $('.nav i');

  var indicePallinaSelezionata = palliniSelector.index(this)+1;
  var imgDaMostrare = palliniSelector.eq(indicePallinaSelezionata);

  console.log(indicePallinaSelezionata);
  console.log(imgDaMostrare);

}








  // var paLong = $('.nav i');
  // console.log(long.length);
  //
  // for (var a = 0; a < paLong.length; a++) {
  //   var pallino = long[a];
  //   console.log(pallino);
  //   pallino.click(
  //     function () {
  //
  //       //salvo lo stato corrente degli elementi
  //     var currentPallino = $('.nav i.active');
  //     console.log("currentpallino: " + currentPallino);
  //     currentPallino.removeClass('active');
  //     pallino.addClass('active');



      //rimuovo la classe active agli elementi attivi
      // current.removeClass('active');
      // currentPal.removeClass('active');

      //do la classe active agli elementi cliccati
      // pallino.addClass('active')


//     }
//   );
// }





});
