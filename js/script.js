if (window.SimpleSlide) {

    new SimpleSlide({
        slide: 'quote', // nome do atributo data-slide="quote"
        auto: true, // se o slide deve passar automaticamente
        time: 5000, // tempo de transição dos slides
        pauseOnHover: true, // pausa a transição automática
    });

    new SimpleSlide({
        slide: 'portfolio',
        auto: true,
        time: 5000,
        pauseOnHover: true,
        nav: true, // se deve ou não mostrar a navegação
    });

}