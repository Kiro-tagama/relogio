function carregar() {
  var data= new Date();
  var hora=data.getHours();
  var min=data.getMinutes();
  var sec=data.getSeconds();
  
  if(hora<10){
    hora='0'+hora
  }
  if(min<10){
    min='0'+min
  }
  if(sec<10){
    sec='0'+sec
  }
  
  msg=document.getElementById('msg');
  msg.innerHTML='olá <br>'+ hora +':'+ min +':'+ sec;
  
  img=document.getElementById('img');
  if(hora >= 0 && hora <12){
    img.src="manha.png"
    document.body.style.background='#fa7202'
  }
  else if (hora>=12 && hora <18){
    img.src='tarde.png'
    document.body.style.background='#a42552'
  }
  else{
    img.src='noite.png'
    document.body.style.background='#546577'
  }
}
setInterval('carregar()',1)//1000altera dos segundos para frente
