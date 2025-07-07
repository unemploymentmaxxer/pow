var a, b, c;

a = +prompt('Введите число')
b = +prompt('Введите степень')
c = a;

for(let i = 1; i < b; i++){
    c*=a;
}

alert('Результат: ' + c)