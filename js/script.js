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

if (window.SimpleForm) {

    new SimpleForm({
        form: ".formphp", // seletor do formulário
        button: "#enviar", // seletor do botão
        erro: "<div id='form-erro'><p>Um erro ocorreu, tente para o email contato@bikcraft.com.</p></div>", // mensagem de erro
        sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
      });

}