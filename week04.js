/*1-Variables y Operadores*/
    /*a-Crear dos variables numéricas y utilizar el operador suma para guardar el 
    valor de la suma de ambos números en una 3er variable.*/
    /*
    var a = 5;
    var b = 7;
    var add = a + b;
    console.log(add);
    */
    /*b-Crear dos variables de tipo String y concatenarlas guardando el resultado en 
    una 3er variable.*/
    /*
    var name = "Eloy";
    var surname = " Dordolo";
    var fullname = name + surname;
    console.log(fullname);
    */
    /*c-Crear dos variables de tipo String y sumar el largo de cada variable 
    (cantidad de letras del string) guardando el resultado la suma una 3er variable (utilizar length).*/
    /*
    var name = "Eloy";
    var surname = "Dordolo";
    var varlength = name.length + surname.length;
    console.log(varlength);
    */

/*2-Strings
    /*a-Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en 
    mayúscula (utilizar toUpperCase).*/
    /*
    var greeting = "good morning";
    console.log(greeting.toUpperCase());
    */
    /*b-Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los
     primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
    /*
    var favouritefilm = "underworld";
    var first5letters = favouritefilm.substring(0,5);
    console.log(first5letters);
    */
    /*c-Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los
     últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
     /*
    var favouritefilm = "underworld";
    var last3letters = favouritefilm.substring(7,11);
    console.log(last3letters);
    */
    /*d-Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la 
    primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
    (utilizar substring, toUpperCase, toLowerCase y el operador +).*/
    var favouritefilm = "underworld";
    var Favouritefilm =  favouritefilm.substring(0,1).toUpperCase() + favouritefilm.substring(1,11).toLowerCase();
    console.log(Favouritefilm);
    