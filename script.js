
let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");        
pincel.fillStyle = "lightgrey";
pincel.fillRect(0,0,400,400); 



function disenarTriangulo(){

    pincel.fillStyle="lightblue";
    pincel.beginPath();
    pincel.moveTo(200, 80);
    pincel.lineTo(50, 320);
    pincel.lineTo(350, 320);
    pincel.fill();

    pincel.fillStyle='white';
    pincel.beginPath();
    pincel.moveTo(200, 90);
    pincel.lineTo(60, 315);
    pincel.lineTo(340, 315);
    pincel.fill();
}

function limpiarPantalla(){
    pincel.clearRect(0,0,400,400);
}

function disenharCircunferencia(x,y,radio){

    disenarTriangulo();

    pincel.fillStyle = "blue";
    pincel.beginPath();
    pincel.arc(x,y,radio,0,2*Math.PI);
    pincel.fill();
    
} 

let x = 50;
let y = 320;
let estado = 1;  //Inhalar = 1   Retener = 2   Exhalar = 3

function actualizarPantalla(){

    limpiarPantalla();

    disenharCircunferencia(x,y,15,8);

    if (x >= 50 && x <= 200 && estado != 3){  //inhalar
        x = x + 1;
        y = y - 1.6;
        estado = 1   
        //////////////////
        document.querySelector("p").innerText = "inhalar";

    }else if (x > 200 && x <=350 && estado != 3){  //retener
        x = x + 1;
        y = y + 1.6;
        if (x == 351){
            estado = 3;
        }

        document.querySelector("p").innerText = "retener";

    }else if (x >= 50 &&  estado == 3){   //exhalar
        x = x - 2;
        y = 320;
        
        if (x <= 50){
            estado = 1;
            x = 50;
        }

        document.querySelector("p").innerText = "exhalar";
    }

}

setInterval(actualizarPantalla,30);

