function zad3(obj){
    var S = 1*obj.st1.value; //размер кредита
    var p = 1*obj.st2.value; ; //ставка
    var n = 1*obj.st3.value; ; //период
    var A = S*p/1-Math.pow((1+p),-n); //результат
    obj.result1.value = A.toFixed(0);
 }
zad2(result);