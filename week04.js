/********************************1-Variables y Operadores*******************************/

    /*a-Crear dos variables numéricas y utilizar el operador suma para guardar el 
    valor de la suma de ambos números en una 3er variable.*/
    
    console.log("Exercise 1-a");
    var a = 5;
    var b = 7;
    var add = a + b;
    console.log(add);
    
    /*b-Crear dos variables de tipo String y concatenarlas guardando el resultado en 
    una 3er variable.*/
    
    console.log("Exercise 1-b");
    var name = "Eloy";
    var surname = " Dordolo";
    var fullname = name + surname;
    console.log(fullname);
    
    /*c-Crear dos variables de tipo String y sumar el largo de cada variable 
    (cantidad de letras del string) guardando el resultado la suma una 3er variable (utilizar length).*/
    
    console.log("Exercise 1-c");
    var name = "Eloy";
    var surname = "Dordolo";
    var varlength = name.length + surname.length;
    console.log(varlength);
    

/***********************************2-Strings*******************************/

    /*a-Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en 
    mayúscula (utilizar toUpperCase).*/
    
    console.log("Exercise 2-a");
    var greeting = "good morning";
    console.log(greeting.toUpperCase());
    
    /*b-Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los
    primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
    
    console.log("Exercise 2-b");
    var favouritefilm = "underworld";
    var first5letters = favouritefilm.substring(0,5);
    console.log(first5letters);
    
    /*c-Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los
    últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
    
    console.log("Exercise 2-c");
    var favouritefilm = "underworld";
    var last3letters = favouritefilm.substring(7,11);
    console.log(last3letters);
    
    /*d-Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la 
    primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
    (utilizar substring, toUpperCase, toLowerCase y el operador +).*/
    
    console.log("Exercise 2-d");
    var favouritefilm = "underworld";
    var Favouritefilm =  favouritefilm.substring(0,1).toUpperCase() + favouritefilm.substring(1,11).toLowerCase();
    console.log(Favouritefilm);
    
    /*e- Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
    Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/
    
    console.log("Exercise 2-e");
    var greeting = "good morning";
    var spacepos = greeting.indexOf(" ");
    console.log(spacepos);
    
    /*f-Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio 
    entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string 
    que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula 
    (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/
    
    console.log("Exercise 2-f");
    var greeting = "good morning";
    console.log(greeting.indexOf("m"));
    var Greeting = greeting.substring(0,1).toUpperCase() + greeting.substring(1,4)+" "
                    +greeting.substring(5,6).toUpperCase() + greeting.substring(6,12);
    console.log(Greeting);
    
/***********************************3-Arrays**********************************/
    /*Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
    "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 
    (utilizar console.log)*/
    console.log("Exercise 3-a");
    var months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre",
                    "Octubre","Noviembre","Diciembre"]
    console.log(months[4], months[10]);
    
    /*b- Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/
    
    console.log("Exercise 3-b");
    months.sort()
    console.log(months);
    
    /*c-Agregar un elemento al principio y al final del array (utilizar unshift y push).*/

    console.log("Exercise 3-c");
    months.unshift("First");
    months.push("Last");
    console.log(months);

    /*d-Quitar un elemento del principio y del final del array (utilizar shift y pop).*/

    console.log("Exercise 3-d");
    months.shift();
    months.pop();
    console.log(months);

    /*e-Invertir el orden del array (utilizar reverse)*/

    console.log("Exercise 3-e");
    months.reverse();
    console.log(months);

    /*f-Unir todos los elementos del array en un único string donde cada mes este separado 
    por un guión - (utilizar join).*/

    console.log("Exercise 3-f");
    console.log(months.join("-"));

    /*g-Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/

    console.log("Exercise 3-g");
    var months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre",
                    "Octubre","Noviembre","Diciembre"]
    var newmonths = months.slice(4,11);
    console.log(newmonths);

/***********************************4-If Else**********************************/

    /*a-Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es
     mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta 
     con el mensaje “Lower than 0,5”*/
     
     console.log("Exercise 4-a(commented)");
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
   console.log("Exercise 4-b(commented)");
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
/***********************************5-For**********************************/

   /*a-Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de 
   JavaScript para mostrar una alerta utilizando cada una de las palabras.*/
    
   console.log("Exercise 5-a(commented)");
   var Weekdays = ["lunes","martes","miercoles","jueves","viernes"];
   /*for ( var i = 0; i < Weekdays.length ; i++){
       alert(Weekdays[i]);
   }
   */
  /*b-Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una 
  alerta por cada palabra modificada.*/

  console.log("Exercise 5-b(commented)");
  /*for ( var i = 0; i < Weekdays.length ; i++){
    alert(Weekdays[i].substring(0,1).toUpperCase()+Weekdays[i].substring(1));
  }*/
  
  /*c-Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto 
  a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. 
  Al final mostrar una única alerta con la cadena completa.*/

  console.log("Exercise 5-c(commented)");
  /*
  var sentence = [" "];
  for ( var i = 0; i < Weekdays.length ; i++){
      sentence[i] = Weekdays[i];
  }
  alert(sentence);
  */
  /*d-Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número 
  de la repetición, es decir que al final de la ejecución del bucle for deberia haber 10 elementos
  dentro del array, desde el número 0 hasta al numero 9. Mostrar por la consola del navegador el 
  al array final (utilizar console.log).*/

  console.log("Exercise 5-d");
  var numbers = [" "];
  for ( var i = 0; i < 10 ; i++){
      numbers[i] =  i;
  }
  console.log(numbers);

/***********************************6-Funciones**********************************/

  /*a-Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar 
  la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la 
  consola del navegador.*/ 
  
  console.log("Exercise 6-a");
  function add1(a, b) {
     return a + b;
  }
  var myadd = add1(6,9);

  console.log(myadd);
  
  /*b-A la función suma anterior, agregarle una validación para controlar si alguno de los 
  parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error 
  y retornar el valor NaN como resultado.*/

  console.log("Exercise 6-b(commented)");
  /*
  function newadd(a, b) {
    if ((typeof(a) === "number") && (typeof(b) === "number")){
        return a + b;   
    }
        alert("One of the parameters is incorrect");
        return("NaN");
  }
  console.log(newadd(7,"hello"));
  console.log(newadd(7,"4"));
  */
  /*c-Crear una función validate integer que reciba un número como parámetro y devuelva verdadero 
  si es un número entero*/
  
  console.log("Exercise 6-c");
  function validate(a) {
    if((typeof(a) === 'number') && ( a%1 === 0)){
        return true;  
    }
        return false;
  } 
  console.log(validate(132.8));
  console.log(validate(13));
   
  /*d-A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean 
  enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido 
  a entero (redondeado).*/

  console.log("Exercise 6-d(commented)");
  /*
  function newadd2(a, b) {
    if ((typeof(a) != "number") || (typeof(b) != "number")){
        alert("One of the parameters is incorrect");
        return("NaN");  
    } if((validate(a) != true) || (validate(b) != true )) {
        alert('one or more of the arguments is not integer');
        return Math.round(a) + Math.round(b);
    }
    return a + b; 
   }
   console.log(newadd2(12,5.9));
   console.log(newadd2(12,"house"));
   console.log(newadd2(12,5));
    */
   /*e-Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la 
   función suma probando que todo siga funcionando igual.*/
    
   console.log("Exercise 6-e(commented)");
   /*
   function newadd3(a, b) {
    if ((typeof(a) === "number") && (typeof(b) === "number")){
        return a + b;   
    }
        alert("One of the parameters is incorrect");
        return("NaN");
    }

    function finaladd(a,b) {
        return newadd3(a,b) ;
     }
     console.log(finaladd(2,1));
     console.log(finaladd("house",1));
     */