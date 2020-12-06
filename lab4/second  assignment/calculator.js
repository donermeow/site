function Function(A, operator, B) {
   switch(operator){
    case "+": return A+B; break;
    case "-": return A-B; break;
    case "*": return A*B; break;
    case "/": return A/B; break;
    case "%": return A%B; break;
    default: return "It is not an operator"; break;

   }
} 
document.write("Calculation result: " + Function(70,"+",5)+"<br>");
document.write("Calculation result: " + Function(70,"-",5)+"<br>");
document.write("Calculation result: " + Function(70,"*",5)+"<br>");
document.write("Calculation result: " + Function(70,"/",5)+"<br>");
document.write("Calculation result: " + Function(70,"%",4)+"<br>");

