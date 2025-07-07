var a, b, c;

a = +prompt('Введите число')
b = +prompt('Введите степень')
c = a;

if(b == 0){
    c = 1;
}
else{
    for(let i = 1; i < b; i++){
        c*=a;
    }
}

alert('Результат: ' + c)