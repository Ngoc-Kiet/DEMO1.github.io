$(document).ready(function () {
    $('#drop-menu').click(() => {
        $('.header__search-drop-list').toggle()
        $('#drop-menu').toggleClass('fas fa-caret-down fas fa-caret-up')// cho mũi tên đi lên đi xuống
    })

    $('.drop-flag').click(() => {
        $('.header__language-list').toggle()
        $('.drop-flag').toggleClass('fas fa-caret-down fas fa-caret-up')//cho mũi tên đi lên đi xuống
    })

    $('.drop-category').click(() => {
        $('.category').toggle()
         $('.drop-category').toggleClass('fas fa-caret-down fas fa-caret-up')//cho mũi tên đi lên đi xuống
       
    })
    $('.menu-cancel-img').click(() => {
        $('.menu-fullscreen').toggle()
        
       
    })

    /////////////
    $('.menu').click(function () {
        $('.menu-fullscreen').addClass('active');
    })
    $('.menu-cancel-img').click(function () {
        $('.menu-fullscreen').removeClass('active');
    })


})
