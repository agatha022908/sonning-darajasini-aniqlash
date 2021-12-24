let num1 = +prompt('Birinchi sonni yozing');
let num2 = +prompt('Darajasini kiriting');
let num3 = 1;

for(let i = 0; i < num2; i++) {
  num3 = num1 * num3;
}
alert(num3)
