// You need to write a JavaScript code that will show the list of numbers the given number can divide. 
// So, if given number can divide by some another number which is less than given number -> you show it on the screen.
// ex: given number is “4”:
// 4 can be divided by 1 -> write 1;
// 4 can be divided by 2 -> write 2;
// 4 can not be divided by 3 -> don’t write 3;
// 4 can be divide by 4 -> write 4;
// after 5 is grater than 4 -> stop!
// Result must be: 1 2 4
// Use loops and condition statements!
var number=4;
var divisor;
for (var i = 1; i < number; i++) {
	divisor=i;
	if (number%divisor==0)
		document.write("divisor: "+divisor+"<br>");
	else document.write("divisor: "+divisor +" is not divisible"+"<br>");

}

