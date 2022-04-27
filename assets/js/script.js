$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $('#quienesomos').click(function(){
        alert("Somos la mejor empresa de viajes")
    });

    $('#destacados').click(function(){
        alert("Comparte en los mejores lugares de Chile")
    });
    
    $('#contactos').click(function(){
        alert("Que esperas para ser parte de nosotros?")
    });
    
    $('.titulo1').click(function(){
        $('.texto1').toggle();
    });
    $('.titulo2').click(function(){
        $('.texto2').toggle();
    });
    $('.titulo3').click(function(){
        $('.texto3').toggle();
    });
    
    $(".ocultar-mostrar").click(function(){
        $(".ocultar-mostrar").slideToggle(1500); 
        $(".ocultar-mostrar").toggle('show');
    });
    $(".ocultar-mostrar2").click(function(){
        $(".ocultar-mostrar2").slideToggle(1500); 
        $(".ocultar-mostrar2").toggle('show');
    });
    $(".ocultar-mostrar3").click(function(){
        $(".ocultar-mostrar3").slideToggle(1500); 
        $(".ocultar-mostrar3").toggle('show');
    });
    
    $('.titulo4').click(function(){
        $('.texto4').toggle();
    })
  })

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        $('html,body').animate({
            'scrollTop': $($(this).attr('href')).offset().top+'px'
        }, 5000);
        

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

  $("#quienesomos").hover(function() {
    $(this).css('cursor','pointer').attr('title', 'Los mejores viajes estan junto a nosotros');
}, function() {
    $(this).css('cursor','auto');
});