
var Calculadora = {
//Declarcion de variables e iniciación


  init:function() {
    var pantalla = document.getElementById('display');
    var encendido = document.getElementById('on');
    var signo = document.getElementById('sign');
    var raiz = document.getElementById('raiz');
    var dividir = document.getElementById('dividido');
    var siete = document.getElementById('7');
    var ocho = document.getElementById('8');
    var nueve = document.getElementById('9');
    var multiplicar = document.getElementById('por');
    var cuatro = document.getElementById('4');
    var cinco = document.getElementById('5');
    var seis = document.getElementById('6');
    var restar = document.getElementById('menos');
    var uno = document.getElementById('1');
    var dos = document.getElementById('2');
    var tres = document.getElementById('3');
    var cero = document.getElementById('0');
    var punto = document.getElementById('punto');
    var igual = document.getElementById('igual');
    var sumar = document.getElementById('mas');

    var num1 ;
    var num2 ;
    var operacion;
this.EscucharEventos()
},

EscucharEventos: function(){

  document.getElementById('on').addEventListener("click", function(){
    var pantalla = document.getElementById('display');
    pantalla.innerHTML='0';
  });
  document.getElementById('sign').addEventListener("click", function(){
    var pantalla = document.getElementById('display');
    if(pantalla.innerHTML.length <8){
    pantalla.innerHTML='-' +pantalla.innerHTML;
  }else{}
  });
  document.getElementById('raiz').addEventListener("click", function(){
    var pantalla = document.getElementById('display');
    if(pantalla.innerHTML.length <8){
    pantalla.innerHTML= pantalla.innerHTML +'';
    }else{}
  });
  document.getElementById('7').addEventListener("click", function(){
    var pantalla = document.getElementById('display');
    if(pantalla.innerHTML.length <8){
    pantalla.innerHTML = parseFloat(pantalla.innerHTML +7);
    }else{}
  });
  document.getElementById('8').addEventListener("click", function(){
    var pantalla = document.getElementById('display');
    if(pantalla.innerHTML.length <8){
    pantalla.innerHTML= parseFloat(pantalla.innerHTML +8);
    }else{}
  });
  document.getElementById('9').addEventListener("click", function(){
    var pantalla = document.getElementById('display');
    if(pantalla.innerHTML.length <8){
    pantalla.innerHTML= parseFloat(pantalla.innerHTML +9);
    }else{}
  });

  document.getElementById('4').addEventListener("click", function(){
    var pantalla = document.getElementById('display');
    if(pantalla.innerHTML.length <8){
    pantalla.innerHTML= parseFloat(pantalla.innerHTML +4);
    }else{}
  });
  document.getElementById('5').addEventListener("click", function(){
    var pantalla = document.getElementById('display');
    if(pantalla.innerHTML.length <8){
    pantalla.innerHTML= parseFloat(pantalla.innerHTML +5);
    }else{}
  });
  document.getElementById('6').addEventListener("click", function(){
    var pantalla = document.getElementById('display');
    if(pantalla.innerHTML.length <8){
    pantalla.innerHTML= parseFloat(pantalla.innerHTML +6);
    }else{}
  });

  document.getElementById('1').addEventListener("click", function(){
    var pantalla = document.getElementById('display');
    if(pantalla.innerHTML.length <8){
    pantalla.innerHTML= parseInt(pantalla.innerHTML +1);
    }else{}
  });
  document.getElementById('2').addEventListener("click", function(){
    var pantalla = document.getElementById('display');
    if(pantalla.innerHTML.length <8){
    pantalla.innerHTML= parseFloat(pantalla.innerHTML +2);
    }else{}
  });
  document.getElementById('3').addEventListener("click", function(){
    var pantalla = document.getElementById('display');
    if(pantalla.innerHTML.length <8){
    pantalla.innerHTML= parseFloat(pantalla.innerHTML +3);
    }else{}
  });
  document.getElementById('0').addEventListener("click", function(){
    var pantalla = document.getElementById('display');
    if(pantalla.innerHTML.length <8){
    pantalla.innerHTML= pantalla.innerHTML +'0';
    }else{}
  });
  document.getElementById('punto').addEventListener("click", function(){
    var pantalla = document.getElementById('display');
    if(pantalla.innerHTML.length <8){
    pantalla.innerHTML= parseFloat(pantalla.innerHTML + '.');
    }else{}
  });
  document.getElementById('menos').addEventListener("click", function(){
    var pantalla = document.getElementById('display');
    num1= display.textContent;
    operacion= "menos";
    refreshDisplay()
  });
  document.getElementById('dividido').addEventListener("click", function(){
    var pantalla = document.getElementById('display');
    num1= display.textContent;
    operacion= "dividido";
    refreshDisplay()
  });
  document.getElementById('por').addEventListener("click", function(){
    var pantalla = document.getElementById('display');
    num1= display.textContent;
    operacion= "por";
    refreshDisplay()
  });
  document.getElementById('mas').addEventListener("click", function(){
    var pantalla = document.getElementById('display');
    num1= display.textContent;
    operacion= "mas";
    refreshDisplay()
  });

  document.getElementById('igual').addEventListener("click",
    function resultado (){
      num2 = display.textContent;
      var resultado;
      switch(operacion){
        case "mas":
          resultado = parseFloat(num1) + parseFloat(num2);
          break;
        case "menos":
          resultado = parseFloat(num1) - parseFloat(num2);
          break;
        case "dividido":
          resultado = parseFloat(num1) / parseFloat(num2);
          break;
        case "por":
          resultado = parseFloat(num1) * parseFloat(num2);
          break;
        };
    refreshDisplay();
    display.textContent = resultado;
  });

  function refreshDisplay(){
    display.textContent = "";
  }

  document.getElementById('on').addEventListener("mousedown", function(){
  document.getElementById('on').setAttribute("style","transform:scale(0.95,0.95)")
  })
  document.getElementById('on').addEventListener("mouseout", function(){
  document.getElementById('on').setAttribute("style","transform:scale(1,1)")
  })
  document.getElementById('sign').addEventListener("mousedown", function(){
  document.getElementById('sign').setAttribute("style","transform:scale(0.95,0.95)")
  })
  document.getElementById('sign').addEventListener("mouseout", function(){
  document.getElementById('sign').setAttribute("style","transform:scale(1,1)")
  })
  document.getElementById('raiz').addEventListener("mousedown", function(){
  document.getElementById('raiz').setAttribute("style","transform:scale(0.95,0.95)")
  })
  document.getElementById('raiz').addEventListener("mouseout", function(){
  document.getElementById('raiz').setAttribute("style","transform:scale(1,1)")
  })
  document.getElementById('dividido').addEventListener("mousedown", function(){
  document.getElementById('dividido').setAttribute("style","transform:scale(0.95,0.95)")
  })
  document.getElementById('dividido').addEventListener("mouseout", function(){
  document.getElementById('dividido').setAttribute("style","transform:scale(1,1)")
  })
  document.getElementById('7').addEventListener("mousedown", function(){
  document.getElementById('7').setAttribute("style","transform:scale(0.95,0.95)")
  })
  document.getElementById('7').addEventListener("mouseout", function(){
  document.getElementById('7').setAttribute("style","transform:scale(1,1)")
  })
  document.getElementById('8').addEventListener("mousedown", function(){
  document.getElementById('8').setAttribute("style","transform:scale(0.95,0.95)")
  })
  document.getElementById('8').addEventListener("mouseout", function(){
  document.getElementById('8').setAttribute("style","transform:scale(1,1)")
  })
  document.getElementById('9').addEventListener("mousedown", function(){
  document.getElementById('9').setAttribute("style","transform:scale(0.95,0.95)")
  })
  document.getElementById('9').addEventListener("mouseout", function(){
  document.getElementById('9').setAttribute("style","transform:scale(1,1)")
  })
  document.getElementById('por').addEventListener("mousedown", function(){
  document.getElementById('por').setAttribute("style","transform:scale(0.90,0.90)")
  })
  document.getElementById('por').addEventListener("mouseout", function(){
  document.getElementById('por').setAttribute("style","transform:scale(1,1)")
  })
  document.getElementById('4').addEventListener("mousedown", function(){
  document.getElementById('4').setAttribute("style","transform:scale(0.90,0.90)")
  })
  document.getElementById('4').addEventListener("mouseout", function(){
  document.getElementById('4').setAttribute("style","transform:scale(1,1)")
  })
  document.getElementById('5').addEventListener("mousedown", function(){
  document.getElementById('5').setAttribute("style","transform:scale(0.90,0.90)")
  })
  document.getElementById('5').addEventListener("mouseout", function(){
  document.getElementById('5').setAttribute("style","transform:scale(1,1)")
  })
  document.getElementById('6').addEventListener("mousedown", function(){
  document.getElementById('6').setAttribute("style","transform:scale(0.90,0.90)")
  })
  document.getElementById('6').addEventListener("mouseout", function(){
  document.getElementById('6').setAttribute("style","transform:scale(1,1)")
  })
  document.getElementById('menos').addEventListener("mousedown", function(){
  document.getElementById('menos').setAttribute("style","transform:scale(0.90,0.90)")
  })
  document.getElementById('menos').addEventListener("mouseout", function(){
  document.getElementById('menos').setAttribute("style","transform:scale(1,1)")
  })
  document.getElementById('1').addEventListener("mousedown", function(){
  document.getElementById('1').setAttribute("style","transform:scale(0.90,0.90)")
  })
  document.getElementById('1').addEventListener("mouseout", function(){
  document.getElementById('1').setAttribute("style","transform:scale(1,1)")
  })
  document.getElementById('2').addEventListener("mousedown", function(){
  document.getElementById('2').setAttribute("style","transform:scale(0.90,0.90)")
  })
  document.getElementById('2').addEventListener("mouseout", function(){
  document.getElementById('2').setAttribute("style","transform:scale(1,1)")
  })
  document.getElementById('3').addEventListener("mousedown", function(){
  document.getElementById('3').setAttribute("style","transform:scale(0.90,0.90)")
  })
  document.getElementById('3').addEventListener("mouseout", function(){
  document.getElementById('3').setAttribute("style","transform:scale(1,1)")
  })
  document.getElementById('0').addEventListener("mousedown", function(){
  document.getElementById('0').setAttribute("style","transform:scale(0.90,0.90)")
  })
  document.getElementById('0').addEventListener("mouseout", function(){
  document.getElementById('0').setAttribute("style","transform:scale(1,1)")
  })
  document.getElementById('punto').addEventListener("mousedown", function(){
  document.getElementById('punto').setAttribute("style","transform:scale(0.90,0.90)")
  })
  document.getElementById('punto').addEventListener("mouseout", function(){
  document.getElementById('punto').setAttribute("style","transform:scale(1,1)")
  })
  document.getElementById('igual').addEventListener("mousedown", function(){
  document.getElementById('igual').setAttribute("style","transform:scale(0.90,0.90)")
  })
  document.getElementById('igual').addEventListener("mouseout", function(){
  document.getElementById('igual').setAttribute("style","transform:scale(1,1)")
  })
  document.getElementById('mas').addEventListener("mousedown", function(){
  document.getElementById('mas').setAttribute("style","transform:scale(0.90,0.90)")
  })
  document.getElementById('mas').addEventListener("mouseout", function(){
  document.getElementById('mas').setAttribute("style","transform:scale(1,1)")
  })

},

}
Calculadora.init();




/*
function myFunction() {
    var num = 13.3714;
    document.getElementById("display").innerHTML = num.toPrecision(2);
},


function limiteDigitos(digitos) {
  var pantalla = document.getElementById('display');
  if(pantalla.innerHTML.length < 8) {
    return false;
  }else{
    return true;
  }
}


var numero1 = 0;
var numero2 = 0;
var operacion;

function asignarNumero(numero){
if(numero1==0 && numero1 !== '0.'){
       numero1 = numero;
   }else{
       numero1 += numero;
   }
   refreshDisplay();
}

function operaciones (){
  if (num1 == 0){
    num1 = parseFloat(document.getElementById('display').value);
  }
  num2 = parseFloat(num1);
  num1 = 0;
  operacion= valor;
}

//Funcion tecla ON/C

function teclaOnC(){
 numero1 = 0;
 numero2 = 0;
 refreshDisplay();
}


function(){
  var pantalla = document.getElementById('display');
  if(pantalla.innerHTML.length <8){
  pantalla.innerHTML= pantalla.innerHTML +'';
  }else{}

  function puntoDecimal(){
    if(num1 == 0){
      num1 = '0.';
    }else if(num1.indexOf('.') == -1){
      num1 += '.';
    }
  refreshDisplay();
  }


*/
