
export function goTo(comercio,objetivo){

    const d = document,
          $comercio = d.querySelectorAll(comercio),
          $objetivo = d.querySelectorAll(objetivo) ;

    d.addEventListener("click", (evento) => {
         
        if(evento.target.matches(`${comercio} *`)){

            window.location.assign("objetivos.html")

        }

        if(evento.target.matches(`${objetivo} *`)){

            window.location.assign("relevamiento-imagen.html")

        }

    })


}

export function returnCloseButtons(returnButton,closeButton,salirButton){

    const d = document;

    d.addEventListener("click", (evento) => {

        if(evento.target.matches(returnButton)){
              
            window.history.back();
        }

        if(evento.target.matches(closeButton)){
              
            window.location.assign("index.html");
        }

        if(evento.target.matches(salirButton)){
              
            window.location.assign("index.html");
        }
    })
}

