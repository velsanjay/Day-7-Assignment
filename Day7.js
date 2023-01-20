var request=new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");

request.send();


request.onload = function () {
    var result=JSON.parse(request.response);
 //a.Print the country which uses US Dollars as currency.
   for(i in result){ 
    var output=[];
     output.push(result[i].currencies)
     output=output.filter((data)=>{
        data="USD"
        return console.log(result[i].name.common)
     });
       
   }

   //b.Get all the countries with a population of less than 2 lakhs using Filter function
   for(i in result ){
    var output=[];
    output.push(result[i].population)   
     output=output.filter((data)=>{
     data > 200000
     return console.log(result[i].name.common);
    });
   }
   
   //c.Print the total population of countries using reduce function
   var output=[];
   for(i in result){
    output.push(result[i].population);
   }
   var a=0;
   const sum=output.reduce((acc, curr) => acc +curr,a);
   console.log(sum);

   //d.Print the following details name, capital, flag using forEach function
   for(i in result){
    Object.keys(result[i]).forEach(key =>{
        console.log(result[i].name,result[i].capital,result[i].flag);
    })
   }

   //e.Get all the countries from the Asia continent /region using the Filter function

for(i in result){
   var output=[];
   output.push(result[i].region);
   output=output.filter((data)=>{
    data="Asis"
    return console.log(result[i].name.common);
   })
}

   




   
}
