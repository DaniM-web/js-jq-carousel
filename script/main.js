

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
  $('.images img').removeClass('active');
  $('.nav i').removeClass('active');

  var imgSelector = $('.images img');
  var palliniSelector = $('.nav i');

  var indicePallinaSelezionata = $('.nav i').index(this);

  $('.images img').eq(indicePallinaSelezionata).addClass('active');
  $(this).addClass('active');

}



//  function imgToShow() {
//    $(this).addClass('active');
//    $(this).siblings().removeClass("active");
//   if ($(this).hasClass('first')) {
//     $('.images img.first').addClass('active');
//     $('.images img.first').siblings().removeClass('active');
//   }else if ($(this).hasClass('due')) {
//     $('.images img.due').addClass('active');
//     $('.images img.due').siblings().removeClass('active');
//   }else if ($(this).hasClass('tre')) {
//     $('.images img.tre').addClass('active');
//     $('.images img.tre').siblings().removeClass('active');
//   }else if ($(this).hasClass('last')) {
//     $('.images img.last').addClass('active');
//     $('.images img.last').siblings().removeClass('active');
//   }
// }


//
//   console.log(indicePallinaSelezionata);
//   console.log(imgDaMostrare);
//
// }

//   function imgToShow() {
//
//   var paLong = $('.nav i');
//   console.log(paLong.length);
//
//   for (var a = 0; a < paLong.length; a++) {
//     var pallino = paLong[a];
//     var imgDaMostrare = pallino;
//     console.log(pallino);
// }
//
//
// }




});
