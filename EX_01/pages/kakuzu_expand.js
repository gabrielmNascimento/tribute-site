 const toExpand = [
   document.getElementById("eXpand0"),
   document.getElementById("eXpand1"),
   document.getElementById("eXpand2"),
   document.getElementById("eXpand3"),
   document.getElementById("eXpand4"),
   document.getElementById("eXpand5"),
   document.getElementById("eXpand6"),
   document.getElementById("eXpand7"),
   document.getElementById("eXpand8"),
   document.getElementById("eXpand9"),
   document.getElementById("eXpand10"),
   document.getElementById("eXpand11"),
 ]

 const theBigImages = [
   document.getElementsByClassName("bigImages")[0],
   document.getElementsByClassName("bigImages")[1],
   document.getElementsByClassName("bigImages")[2],
   document.getElementsByClassName("bigImages")[3],
   document.getElementsByClassName("bigImages")[4],
   document.getElementsByClassName("bigImages")[5],
   document.getElementsByClassName("bigImages")[6],
   document.getElementsByClassName("bigImages")[7],
   document.getElementsByClassName("bigImages")[8],
   document.getElementsByClassName("bigImages")[9],
   document.getElementsByClassName("bigImages")[10],
   document.getElementsByClassName("bigImages")[11],
 ]

 document.getElementById("exitButton").addEventListener("click", function(){
   document.getElementById("partners-images").style.visibility = 'hidden';
   document.getElementById("partners-images").style.display = 'none';
   theBigImages.forEach((img) => img.style.visibility = 'hidden')
   theBigImages.forEach((img) => img.style.display = 'none')
 })

 toExpand[0].addEventListener("click", function(){
   document.getElementById("partners-images").style.visibility = 'visible';
   document.getElementById("partners-images").style.display = 'block';
   theBigImages[0].style.visibility = 'visible';
   theBigImages[0].style.display = 'block';
 });

 toExpand[1].addEventListener("click", function(){
   document.getElementById("partners-images").style.visibility = 'visible';
   document.getElementById("partners-images").style.display = 'block';
   theBigImages[1].style.visibility = 'visible';
   theBigImages[1].style.display = 'block';
 });

 toExpand[2].addEventListener("click", function(){
   document.getElementById("partners-images").style.visibility = 'visible';
   document.getElementById("partners-images").style.display = 'block';
   theBigImages[2].style.visibility = 'visible';
   theBigImages[2].style.display = 'block';
 });

 toExpand[3].addEventListener("click", function(){
   document.getElementById("partners-images").style.visibility = 'visible';
   document.getElementById("partners-images").style.display = 'block';
   theBigImages[3].style.visibility = 'visible';
   theBigImages[3].style.display = 'block';
 });

 toExpand[4].addEventListener("click", function(){
   document.getElementById("partners-images").style.visibility = 'visible';
   document.getElementById("partners-images").style.display = 'block';
   theBigImages[4].style.visibility = 'visible';
   theBigImages[4].style.display = 'block';
 });

 toExpand[5].addEventListener("click", function(){
   document.getElementById("partners-images").style.visibility = 'visible';
   document.getElementById("partners-images").style.display = 'block';
   theBigImages[5].style.visibility = 'visible';
   theBigImages[5].style.display = 'block';
 });

 toExpand[6].addEventListener("click", function(){
   document.getElementById("partners-images").style.visibility = 'visible';
   document.getElementById("partners-images").style.display = 'block';
   theBigImages[6].style.visibility = 'visible';
   theBigImages[6].style.display = 'block';
 });

 toExpand[7].addEventListener("click", function(){
   document.getElementById("partners-images").style.visibility = 'visible';
   document.getElementById("partners-images").style.display = 'block';
   theBigImages[7].style.visibility = 'visible';
   theBigImages[7].style.display = 'block';
 });

 toExpand[8].addEventListener("click", function(){
   document.getElementById("partners-images").style.visibility = 'visible';
   document.getElementById("partners-images").style.display = 'block';
   theBigImages[8].style.visibility = 'visible';
   theBigImages[8].style.display = 'block';
 });

 toExpand[9].addEventListener("click", function(){
   document.getElementById("partners-images").style.visibility = 'visible';
   document.getElementById("partners-images").style.display = 'block';
   theBigImages[9].style.visibility = 'visible';
   theBigImages[9].style.display = 'block';
 });

 toExpand[10].addEventListener("click", function(){
   document.getElementById("partners-images").style.visibility = 'visible';
   document.getElementById("partners-images").style.display = 'block';
   theBigImages[10].style.visibility = 'visible';
   theBigImages[10].style.display = 'block';
 });

 toExpand[11].addEventListener("click", function(){
   document.getElementById("partners-images").style.visibility = 'visible';
   document.getElementById("partners-images").style.display = 'block';
   theBigImages[11].style.visibility = 'visible';
   theBigImages[11].style.display = 'block';
 });

