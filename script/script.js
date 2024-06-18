
window.onload = function() {
    if (performance.navigation.type === 2) {
        // Se o usuário chegou aqui usando o botão "Voltar" do navegador
        window.location.replace("index.html");
    }
};

function handleBackButton() {
    // Adiciona um estado de histórico adicional
    
    history.pushState(null, document.title, location.href);
    window.addEventListener('popstate', function() {
        // Quando o usuário clica em "Voltar", redireciona para a página inicial
        window.location.replace("index.html");
    });
}

var clicado=false;
var cont=document.getElementById("conteudo")

document.getElementById("m1").addEventListener('click',function(){
  if(clicado){
    this.style.backgroundColor="black"
    cont.style.display="none"
  }else{
    this.style.backgroundColor="green"
    cont.style.display="block"
  }
  clicado=!clicado
});

function relogio(){
  const now= new Date()
  const hora=String(now.getHours()).padStart(2,'0')
  const min=String(now.getMinutes()).padStart(2,'0')
  const sec=String(now.getSeconds()).padStart(2,'0')
  const hr=`${hora}:${min}`
  
  document.getElementById("hora").textContent=hr
}
relogio()
setInterval(relógio, 1000)
