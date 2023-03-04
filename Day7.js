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
        data=="USD"
        var usd=document.querySelector('.USD')

        return usd.append(result[i].name.common+' '+' ')
     });
   }

   //b.Get all the countries with a population of less than 2 lakhs using Filter function
   for(i in result ){
    var output=[];
    output.push(result[i].population)   
     output=output.filter((data)=>data<200000)
    if(output.length!=0){
        var population=document.querySelector('.population')
        population.append(result[i].name.common+' '+' ');
    }   
   }
 
   
   //c.Print the total population of countries using reduce function
   var output=[];
   for(i in result){
    output.push(result[i].population);
   }
   var a=0;
   const sum=output.reduce((acc, curr) => acc +curr,a);
   var total=document.querySelector('.total')
   total.append(sum);


   //d.Print the following details name, capital, flag using forEach function
   for(let i in result){
    var dic=document.createElement("div")
    dic.classList.add('san')
    dic.innerHTML=`<div class=d><h5 class=para>${result[i].name.common}</h5><img src=${result[i].flags.png}></div>`
    var aiv=document.querySelector('.f')
    aiv.append(dic)
   }

   //e.Get all the countries from the Asia continent /region using the Filter function
for(i in result){
   var output=[];
   output.push(result[i].region);
   output=output.filter((data)=>data=="Asia")
    if(output.length!=0){
        var asia=document.querySelector('.asia')
        asia.append(result[i].name.common+' '+' ');
    }
}   
}
