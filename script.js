/* Galeria de imagenes  */
imagen = document.getElementById('main-image');
imagenClone = document.getElementById('main-image-clone');
/*const div = document.getElementById('main-container')*/

var img1="images/image-product-1.jpg";
var img2="images/image-product-2.jpg";
var img3="images/image-product-3.jpg";
var img4="images/image-product-4.jpg";

const onClick = (event) =>{
    var idObtenida = event.target.id;
    switch(idObtenida){
        case "image1":
            imagen.src = img1;
            slider_img.style.backgroundImage = "url(" + img1 + ")";
            break;
        case "image2":
            imagen.src = img2;
            slider_img.style.backgroundImage = "url(" + img2 + ")";
            break;
        case "image3":
            imagen.src = img3;
            slider_img.style.backgroundImage = "url(" + img3 + ")";
            break;
        case "image4":
            imagen.src = img4;
            slider_img.style.backgroundImage = "url(" + img4 + ")";
           
            break;
        
        
    }
};
window.addEventListener('click', onClick);
/* Duplicado de la galeria */


imagen.addEventListener("click", showGallery);
function showGallery(){
    document.getElementById('black').style.display = "block"
  document.getElementById('main-container-clone').style.display = "block";
    
}
document.getElementById('button-close').addEventListener('click', closeGallery);
function closeGallery(){
    document.getElementById('main-container-clone').style.display = "none";
    document.getElementById('black').style.display = "none"

}


document.getElementById('button-next').addEventListener('click', next);
document.getElementById('button-previous').addEventListener('click', prev);

var slider_img = document.querySelector('.slider-img');
var images = ['image-product-1.jpg', 'image-product-2.jpg', 'image-product-3.jpg', 'image-product-4.jpg'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	/*return slider_img.setAttribute('src', "images/"+images[i]);*/
    return slider_img.style.backgroundImage = "url(" + "images/" + images[i] + ")";
	
	
}
/* --Carrito de compras--  */

/*Cantidad de la compra */
minus = document.getElementById('minus-button');
plus = document.getElementById('plus-button');
plus.addEventListener("click", sumar);
minus.addEventListener("click", restar);
var sum = 0;

function sumar() {
    
    sum +=  1;
    console.log(sum)
    document.getElementById('numberQuantity').textContent = sum;
    
}
function restar(){
    if(sum > 0){
        sum = sum - 1;
        document.getElementById('numberQuantity').textContent = sum;
        

    
}
}
/* Mostrar carrito */
cartButton = document.getElementById('cart-shop-button');
cartButton.addEventListener("click", showcart);
function showcart(){
    
   const state = document.getElementById('cart-shop');
   if(state.style.visibility === 'visible'){
       state.style.visibility = 'hidden';
   }
   else{
       state.style.visibility = 'visible'
   }
}
/* Resultados en el carrito */
document.getElementById('add-cart').addEventListener("click", showDetails);
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  
  formatter.format(2500); /* $2,500.00 */

function showDetails(){
    
   if(document.getElementById('numberQuantity').textContent > 0){
    document.getElementById('empty-cart').style.display = "none";
    document.getElementById('shop-details').style.display = "grid";
    document.getElementById('icon-quantity').style.display = "block";
        var to = 1 * document.getElementById('total-quantity').textContent;
        var tal = 1 * document.getElementById('numberQuantity').textContent;
        document.getElementById('total-quantity').textContent = to + tal;
        document.getElementById('icon-quantity').textContent = to + tal;
        document.getElementById('total-price').textContent =  formatter.format((to+tal)*125);
}
}


/* Borrar los elementos del carrito */
document.getElementById('delete').addEventListener("click", deleteAll);

function deleteAll(){
    document.getElementById('empty-cart').style.display = "block";
    document.getElementById('shop-details').style.display = "none";
    document.getElementById('total-quantity').textContent = 0;
    document.getElementById('total-price').textContent = 0;
    document.getElementById('icon-quantity').style.display = "none";
}

/* MEDIAS QUERYS*/
 document.getElementById('closeNav').addEventListener('click', closeMenu);
 document.getElementById('menu').addEventListener('click', openMenu);
 function openMenu(){
    document.getElementsByTagName('nav')[0].style.display = "block";
    document.getElementById('black').style.display = "block";
 }
 
 function closeMenu(){
     document.getElementsByTagName('nav')[0].style.display = "none";
     document.getElementById('black').style.display = "none";
 }

 if(document.getElementById('menu').style.display == "block"){
    imagen.removeEventListener("click", showGallery);
 }
 function myFunction(x) {
    if (x.matches) { // If media query matches
      document.getElementsByTagName('nav')[0].style.display = "flex";
      document.getElementsByTagName('nav')[0].style.flexDirection = "row";
      document.getElementById('menu').style.display = "none";
      document.getElementById('main-container-clone').style.display = "none";
      
    } else {
        document.getElementById('main-container-clone').style.display = "block";
        document.getElementsByTagName('nav')[0].style.display = "none";
        document.getElementById('menu').style.display = "block";
        document.getElementById('black').style.display = "none";
    }
  }
  
  var x = window.matchMedia("(min-width: 900px)")
  myFunction(x) 
  x.addListener(myFunction)





