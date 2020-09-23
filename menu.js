
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("conteudo").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("conteudo").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}


function valida(){

var nome = form1.name.value;
var email = form1.email.value;
var mensagem = form1.message.value;

if (nome == ""){
alert('Por favor preencha o seu nome  ☺');
form1.name.focus();
return false;}

if (email == ""){
alert('Por favor preencha o seu e-mail  ☺');
form1.message.focus();
return false;}


if (mensagem == ""){
alert('Por favor preencha a sua resposta para enviar ☺ ');
form1.message.focus();
return false;}

else{
  alert('Resposta enviada com sucesso ✔');
}


}
