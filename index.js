$(document).ready(function(){


    let links_show = true;

$('.menu img').click(function (){

    if (links_show){
        $('.head_one .links').show(600);
    }
    else{
        $('.head_one .links').hide(600);
    }
    links_show = !links_show;
    
});

// 1 модальное окно покупка тура

$('.se1 .start').click(function(){
    $('.overlay').show();
});

$('.overlay .close-popup').click(function(){
    $('.overlay').hide();
});

// 2 модальное заполнение формы на покупку

$(document).ready(function() {
    $('.overlay button').click(function() {
        $('.shop').show();
    });

    $('.shop .close-popup_shop').click(function() {
        $('.shop').hide();
    });

    $('.but_p').click(function() {
        // Проверка заполнения полей и выделение незаполненных
        $('.input-name, .input-surname, .input-patronymic, .input-check-in, .input-check-out, .input-guests:checked, .input-comment').removeClass('error');
        let error = false;

        if ($('.input-name').val() === '') {
            $('.input-name').addClass('error');
            error = true;
        }
        if ($('.input-surname').val() === '') {
            $('.input-surname').addClass('error');
            error = true;
        }
        if ($('.input-patronymic').val() === '') {
            $('.input-patronymic').addClass('error');
            error = true;
        }
        if ($('.input-check-in').val() === '') {
            $('.input-check-in').addClass('error');
            error = true;
        }
        if ($('.input-check-out').val() === '') {
            $('.input-check-out').addClass('error');
            error = true;
        }
        if ($('.input-guests:checked').length === 0) {
            $('.input-guests').addClass('error');
            error = true;
        }
        if ($('.input-comment').val() === '') {
            $('.input-comment').addClass('error');
            error = true;
        }

        // Если все поля заполнены, блокируем их
        if (error === false) {
            $('.input-name, .input-surname, .input-patronymic, .input-check-in, .input-check-out, .input-guests, .input-comment').attr('disabled', 'disabled');
        }
    });
});


// __________________________
// проверка заполнения
// $('.send').click = (e) =>{
//     e.preventDefault();
//     // первый вариант
//     if($('.name') !='' && $('.email') !='' && $('.phone') !='' && $('textarea') !=''){
//     alert('Поля формы успешно заполнены');
//     $('.name').attr('disabled', 'disabled');
//     $('.email').attr('disabled', 'disabled');
//     $('.phone').attr('disabled', 'disabled');
//     $('textarea').attr('disabled', 'disabled');
//     }
//     else {
//         alert('Не все поля заполнены');
//     }
// }

// проверка заполнения формы из 5 блоков
$(':submit').click (function(e){
    e.preventDefault();
    // 1) проверяем на неравенство
    // if($('.name_1').val() !='' && $('.email_1').val () !='' && $('.phone_1').val ()!='' && $('textarea').val ()!=''){
    //     alert('поля формы успешно заполнены');
        
    //     $('.name_1').attr('disabled', 'disabled');
    //     $('.email_1').attr('disabled', 'disabled');
    //     $('.phone_1').attr('disabled', 'disabled');
    //     $('textarea').attr('disabled', 'disabled');
    // }
    // else{
    //     alert('не все поля заполнены');
    // }
// 2 способ наоборот
if($('.name_1').val() =='' || $('.email_1').val () =='' || $('.phone_1').val ()=='' || $('textarea').val ()==''){
    alert('заполните все данные');
}
else{
    $('.name_1').attr('disabled', 'disabled');
    $('.email_1').attr('disabled', 'disabled');
    $('.phone_1').attr('disabled', 'disabled');
    $('textarea').attr('disabled', 'disabled');
}

// блокировка радиометок
$('.block2 input').each(function (){
let flag = true;
if(flag){
    if ($(this).is(':checked')){
        $('.block2 input').each(function (){
         $(this).attr('disabled', 'disabled');
        })
    }
}
else{
    alert('Выберите способ связи');
}
flag = !flag;
});

// блокировка селекта
$('.block4 input').each(function (){
    if (!$('.block4 .check').is(':checked')) {
        alert('Подтвердите согласие');
        return false;
    } else {
        $('.block4 .check').prop('disabled', true);
    }
 });

// блокировка списка

    if ($('.block3 select').val() === '4' || $('.block3 select').val() === '') {
    alert('Пожалуйста, выберите тему');
    }
    else {
        $('.block3 select').prop('disabled', true);
    }
// проверка заполнения всех полей
    if ($('.name_1').val() && $('.email_1').val() && $('.phone_1').val() && $('textarea').val() && $('.block4 .check').is(':checked') && $('.block3 select').val() !== '4') {
        alert('Все поля успешно заполнены');
    } 
    // else {
    //     alert('Не все поля заполнены');
    // }
    
});



// настройка галлереи

$('.point a').click(function(e){
    e.preventDefault();
    if($('.gal_big img').attr('src') != $(this).attr('href')){
        $('.gal_big img').hide().attr('src', $(this).attr('href')).fadeIn(1000).css({
            width:'100%',
            height:'100%',
        })
    }
});
$('.point a img').mouseup(function(){
    $(this).fadeTo(2000, 0.6);
});
$(document).mouseup(function(){
    $('.point a img').fadeTo(0, 1);
});



$('.point_1 a').click(function(e){
    e.preventDefault();
    if($('.gal_big_1 img').attr('src') != $(this).attr('href')){
        $('.gal_big_1 img').hide().attr('src', $(this).attr('href')).fadeIn(1000).css({
            width:'100%',
            height:'100%',
        })
    }
});
$('.point_1 a img').mouseup(function(){
    $(this).fadeTo(2000, 0.6);
});
$(document).mouseup(function(){
    $('.point_1 a img').fadeTo(0, 1);
});


$('.point_2 a').click(function(e){
    e.preventDefault();
    if($('.gal_big_2 img').attr('src') != $(this).attr('href')){
        $('.gal_big_2 img').hide().attr('src', $(this).attr('href')).fadeIn(1000).css({
            width:'100%',
            height:'100%',
        })
    }
});
$('.point_2 a img').mouseup(function(){
    $(this).fadeTo(2000, 0.6);
});
$(document).mouseup(function(){
    $('.point_2 a img').fadeTo(0, 1);
});



// -------------------------модальное 1 от ссылки

// для открытия 
// $('.fhoto_a a').click(function(e) {
//     e.preventDefault(); 
//     $('.fhoto').show();
// });
// //  для закрытия 
// $('.fhoto .close-gallery').click(function(){
//     $('.fhoto').hide();
// });
// // Закрывать модальное окно при клике за его пределами
// $(document).mouseup(function(e) {
//     $('.fhoto').fadeOut();
// });
// $(document).mouseup(function(e) {
//     if (!$('.gallery').is(e.target) && $('.gallery').has(e.target).length === 0) {
//         $('.gallery').hide();
//         $('.fhoto').text('+');
//     }
// });

// -----------------------------------настройки самой галереи в МО
// ссылка 1
// $('.small a').click(function(e){
//     // блокировки стандартного поведения браузера в отношении картинки
//     e.preventDefault();

//     if ($('.big img').attr('src') != $(this).attr('href')){
//         $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(1000).css({
//             width: '100%',
//             height: '100%',
//         })
//     }
// });
//    //ссылка 2
//    $('.small_2 a').click(function(e){
//     e.preventDefault();

//     if ($('.big img').attr('src') != $(this).attr('href')){
//         $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(1000).css({
//             width: '100%',
//             height: '100%',
//         })
//     }
// });
//    // ссылка 3
//    $('.small_3 a').click(function(e){
//     e.preventDefault();

//     if ($('.big img').attr('src') != $(this).attr('href')){
//         $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(1000).css({
//             width: '100%',
//             height: '100%',
//         })
//     }
// });
// // нажатие на кнопку
// $('.button').click(function (){
//     $('.gallery_5').slideToggle();
//     if ($('.button').text() == '+'){
//         $('.button').text('-')
//     }
//     else{
//         $('.button').text('+')
//     }
// });
// // выделение выбранной картинки 1
// $('.small a img').click(function(){
//     $(this).fadeTo(600, 0.6).css({
//         border:'1px dotted red',
//     })
// });
// $(document).mouseup(function(){
//     $('.small a img').fadeTo(0,1).css({
//         border:'none',
//     });
// });
//   // выделение выбранной картинки 2
//   $('.small_2 a img').click(function(){
//     $(this).fadeTo(600, 0.6).css({
//         border:'1px dotted red',
//     })
// });
// $(document).mouseup(function(){
//     $('.small_2 a img').fadeTo(0,1).css({
//         border:'none',
//     });
// });
//     // выделение выбранной картинки 3
//     $('.small_3 a img').click(function(){
//         $(this).fadeTo(600, 0.6).css({
//             border:'1px dotted red',
//         })
//     });
//     $(document).mouseup(function(){
//         $('.small_3 a img').fadeTo(0,1).css({
//             border:'none',
//         });
//     });


// // модальное окно 2 от ссылки
// // для открытия
// $('.modal_a a').click(function(e) {
//     e.preventDefault(); 
//     $('.modal_2').show();
// });
// // для закрытия
// $('.modal_2 .close-fon_8').click(function(){
//     $('.modal_2').hide();
// });

// $('.sd_2').click(function() {
//     let image = $('.cosmos_1');

//     image.animate({ opacity: 1, width: '120%', height: '120%' }, 2000, function() {
//         image.animate({ opacity: 1, width: '100%', height: '100%' }, 2000);
//     });
// });

// $('.sd_2').click(function() {
//     let image = $('.cosmos_1');

//     image.animate({ opacity: 1, width: '120%', height: '120%' }, 2000, function() {
//         image.animate({ opacity: 1, width: '100%', height: '100%' }, 2000);
//     });
// });

// $(document).mouseup(function(e) {
//     if (!$('.fon_8').is(e.target) && $('.fon_8').has(e.target).length === 0) {
//         $('.fon_8').hide();
//         $('.modal_2').text('+');
//     }
// });

// галерея


$(document).ready(function () {
    let currentImage = 1; // Текущее отображаемое изображение (1, 2, 3, и так далее)
    let totalImages = 7; // Общее количество изображений
    let imagesVisible = 4; // Количество видимых изображений
  
    function showImage(e) {
      if (e < 1) {
        e = totalImages;
      } else if (e > totalImages) {
        e = 1;
      }
      for (let i = 1; i <= totalImages; i++) {
        $('.galim' + i).hide();
      }
      for (let i = e; i < e + imagesVisible; i++) {
        let b = i;
        if (b > totalImages) {
          b -= totalImages;
        }
        $('.galim' + b).show();
      }
      currentImage = e;
    }
  
    $('.st1').click(function () {
      showImage(currentImage - 1);
    });
  
    $('.st2').click(function () {
      showImage(currentImage + 1);
    });
  
    showImage(currentImage);
  });
  
  
  
  
  
  
  




});