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
    /*
    var favouritefilm = "underworld";
    var Favouritefilm =  favouritefilm.substring(0,1).toUpperCase() + favouritefilm.substring(1,11).toLowerCase();
    console.log(Favouritefilm);
    */
    /*e- Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
    Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/
    /*
    var greeting = "good morning";
    var spacepos = greeting.indexOf(" ");
    console.log(spacepos);
    */
    /*f-Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio 
    entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string 
    que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula 
    (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/
    /*
    var greeting = "good morning";
    console.log(greeting.indexOf("m"));
    var Greeting = greeting.substring(0,1).toUpperCase() + greeting.substring(1,4)+" "
                    +greeting.substring(5,6).toUpperCase() + greeting.substring(6,12);
    console.log(Greeting);
    */
/*3-Arrays
    /*Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
    "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 
    (utilizar console.log)*/
    var months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre",
                    "Octubre","Noviembre","Diciembre"]
    /*console.log(months[4], months[10]);*/
    
    /*b- Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/
    months.sort()
    /*console.log(months);*/
    
    /*c-Agregar un elemento al principio y al final del array (utilizar unshift y push).*/
    months.unshift("First");
    months.push("Last");
    /*console.log(months);*/

    /*d-Quitar un elemento del principio y del final del array (utilizar shift y pop).*/
    months.shift();
    months.pop();
    /*console.log(months);*/

    /*e-Invertir el orden del array (utilizar reverse)*/
    months.reverse();
    /*console.log(months);*/

    /*f-Unir todos los elementos del array en un único string donde cada mes este separado 
    por un guión - (utilizar join).*/
    /*console.log(months.join("-"));*/

    /*g-Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/
    var months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre",
                    "Octubre","Noviembre","Diciembre"]
    var newmonths = months.slice(4,11);
    /*console.log(newmonths);*/

/*4-If Else
    /*a-Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es
     mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta 
     con el mensaje “Lower than 0,5”*/
    /*
     var number = Math.random();

     if (number >= 0,5) {
         alert("Greater than 0,5");
     }else {
        alert("Lower than 0,5");
     }
    */
   /*b-Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes 
   mensajes de alerta:*/
   /*
   var Age = Math.round(Math.random()*100);

   if ( Age < 2) {
       alert("Bebe");  
   }else if ((Age >= 2) && (Age <=12)){
       alert("Nino");  
   }else if ((Age >= 13) && (Age <=19)){
    alert("Adolescente");  
   }else if ((Age >= 20) && (Age <=30)){
    alert("Joven");
   }else if ((Age >= 31) && (Age <=60)){
    alert("Adulto");
   }else if ((Age >= 61) && (Age <=75)){
    alert("Adulto mayor");
   }else if (Age >= 75){
    alert("Anciano");
   }
   */
/*5-For 
   /*a-Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de 
   JavaScript para mostrar una alerta utilizando cada una de las palabras.*/
    
   var Weekdays = ["lunes","martes","miercoles","jueves","viernes"];
   /*for ( var i = 0; i < Weekdays.length ; i++){
       alert(Weekdays[i]);
   }
   */
  /*b-Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una 
  alerta por cada palabra modificada.*/
  for ( var i = 0; i < Weekdays.length ; i++){
    alert(Weekdays[i].substring(0,1).toUpperCase()+Weekdays[i].substring(1));
}
