function saludar () {
    console.log ("hola mundo")
};

saludar();


function suma (a, b) {
    let res = a + b;
return res;
};
function resta (a, b) {
    let res = a - b;
return res;
};
function multiplica (a, b) {
    let res = a * b;
return res;
};
function divide (a, b) {
    let res = a / b;
return res;
};


function calculadora() {
    let num1, num2, accion, res;
    num1 = parseInt(prompt ("ingrese el primer numero"));
    accion = prompt ("ingrese la accion a realizar: 1-sumar, 2-restar, 3-multiplicar, 4-dividir");
    while (accion < 1 || accion > 4){
        accion = parseInt(prompt ("El numero ingresado debe estar entre 1 y 4, ingrese la accion a realizar nuevamente: 1-sumar, 2-restar, 3-multiplicar, 4-dividir"))
    };
    num2 = prompt ("ingrese el segundo numero")
    if (accion == "1"){
        res = suma(num1, num2);
    };
    if (accion == "2"){
        res = resta(num1, num2);
    };
    if (accion == "3"){
        res = multiplica(num1, num2);
    };
    if (accion == "4"){
        res = divide(num1, num2);
    };
    console.log(res)
    };

    calculadora();