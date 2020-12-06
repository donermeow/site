var date1 = new Date("06/23/2002"); 
var date2 = new Date("10/8/2020"); 
var difftime = date2.getTime() - date1.getTime(); 
var diffday = difftime / (1000 * 3600 * 24); 
document.write("I have lived for "+parseInt(diffday)+" days"); 

 
