// Diferencia entre Function declaration  & Function expression

// Declaración de Función ( Function Declaration )

sumar(); 
// < 4


function sumar() { 
    console.log(2 + 2);
}


// Expresión de Función ( Function expression )
sumar2();
// Uncaught ReferenceError: Cannot access 'sumar2' before initialization

const sumar2 = function(){
    console.log(3+3);
}

/* La función declaration si se ejecuta aunque primero hacemos la 
llamada y luego la creamos, en cambion con la function expression
no permite es flexibidad.*/ 