var posx;
var posy;
var flag = false;
var xs =[
    733,
    733,
    733,
    733,
    732,
    729,
    725,
    720,
    715,
    706,
    697,
    691,
    684,
    679,
    673,
    666,
    656,
    646,
    636,
    628,
    620,
    613,
    605,
    599,
    592,
    586,
    579,
    574,
    571,
    568,
    564,
    561,
    559,
    559,
    560,
    564,
    567,
    570,
    575,
    583,
    592,
    600,
    605,
    609,
    611,
    612,
    614,
    615,
    615,
    615,
    613,
    611,
    607,
    603,
    597,
    588,
    577,
    565,
    554,
    543,
    530,
    518,
    504,
    491,
    477,
    465,
    456,
    447,
    440,
    432,
    427,
    423,
    420,
    417,
    415,
    414,
    413,
    413,
    413,
    414,
    416,
    420,
    426,
    431,
    436,
    440,
    444,
    448,
    453,
    460,
    467,
    474,
    480,
    486,
    492,
    499,
    506,
    512,
    516,
    520,
    527,
    537,
    547,
    556,
    559,
    561,
    564,
    567,
    570,
    572,
    573,
    574,
    575,
    576,
    577,
    578,
    579,
    580,
    581,
    582,
    583
];
var ys = [
    129,
    126,
    119,
    111,
    102,
    91,
    82,
    72,
    62,
    53,
    46,
    41,
    38,
    35,
    33,
    30,
    27,
    26,
    25,
    25,
    26,
    26,
    28,
    30,
    34,
    37,
    41,
    45,
    49,
    53,
    57,
    61,
    66,
    73,
    82,
    89,
    94,
    98,
    100,
    104,
    108,
    110,
    111,
    111,
    110,
    106,
    101,
    95,
    90,
    86,
    82,
    79,
    77,
    74,
    71,
    69,
    67,
    66,
    66,
    66,
    66,
    66,
    69,
    72,
    77,
    82,
    87,
    94,
    101,
    109,
    116,
    124,
    132,
    141,
    150,
    158,
    166,
    176,
    184,
    189,
    196,
    204,
    212,
    218,
    222,
    226,
    230,
    233,
    237,
    242,
    245,
    247,
    250,
    252,
    254,
    256,
    258,
    259,
    261,
    261,
    262,
    264,
    265,
    266,
    266,
    266,
    267,
    268,
    268,
    268,
    268,
    268,
    268,
    268,
    268,
    268,
    268,
    268,
    268,
    268,
    268
];
var text = "bbb";

function getpos(e){
    if(flag==true){
        posx = e.clientX;
        posy = e.clientY;
        xs.push(posx);
        ys.push(posy);
        text += posx+"px "+posy+"px,";
        console.log(text);
    }
}
function stop(t){
    flag = !flag;
    if(flag==false){
        move();
        console.log(xs);
        console.log(ys);
    }
}

function flagg(){
    flag = !flag;
}

var i = 0;
function move(){
    setTimeout(() => {
        var el = document.getElementById("beecont");
        var horz = xs[i]-xs[i-1];
        var vert = ys[i]-ys[i-1];
        var ang = Math.atan(-vert/horz);
        if(horz<0){
            el.style.transform = "scale(0.25) scaleX(-1) rotate("+-ang*180/Math.PI+"deg)";
        }
        else{
            el.style.transform = "scale(0.25) scaleX(1) rotate("+-ang*180/Math.PI+"deg)";
        }
        
        el.style.left = xs[i]+"px";
        el.style.top = ys[i]+"px";
        if(i+1<ys.length){
            i++;
            move();
        }       
        else{
            rst();
        } 
    }, 20);     
}
function rst(){
    var el = document.getElementById("beecont");
    el.style.transform = "scale(0.25) rotate(90deg)";
    document.getElementById("logo").style.visibility = "visible";
    document.getElementById("logo").style.animation = "appear 1s forwards";
    document.getElementById("tr").style.animation = "an3 1s forwards";
    setTimeout(() => {
        document.getElementById("whole").style.animation = "an4 1s forwards";
        document.getElementById("form").style.animation = "an5 1s forwards";
    }, 500);
    

}

setTimeout(() => {
    var el = document.getElementById("beecont");
    el.style.left = xs[0] +"px";
    el.style.visibility = "visible";
    move();
}, 1500);