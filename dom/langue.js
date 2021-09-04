/*const  positif =document.querySelector(".pos");
const negativ = document.querySelector(".neg");
const price=Number(document.querySelector(".price").innerHTML)
var q=document.querySelector(".t").value
const reslt=document.querySelector(".TT")
const remove=document.querySelector(".r")

positif.addEventListener('click', function () {
  q++
  document.querySelector(".t").value=q
  reslt=price*q
  document.querySelector(".TT").innerHTML=reslt

})
remove.addEventListener('click',function(){
  document.getElementById("p5").remove()
  document.querySelector(".text").innerHTML=Number(document.querySelector(".TT").innerHTML)+Number(document.querySelector(".total").innerHTML)+Number(document.querySelector(".total2").innerHTML)+Number(document.querySelector(".total3").innerHTML)
// }*/
const plus0=document.querySelector(".plus-button0")
const minus0=document.querySelector(".minus-button0")
const price0=Number(document.querySelector(".price0").innerHTML)
var qty0=document.querySelector(".qty0").value
const total0=document.querySelector(".total0")
const remove0=document.querySelector(".remove0")

plus0.addEventListener('click',function (){
      qty0++
   document.querySelector(".qty0").value=qty0
   document.querySelector(".total0").innerHTML=price0*qty0
   document.querySelector(".text").innerHTML=Number(document.querySelector(".total0").innerHTML)+Number(document.querySelector(".total").innerHTML)+Number(document.querySelector(".total2").innerHTML)+Number(document.querySelector(".total3").innerHTML)
})