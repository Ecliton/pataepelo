
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
document.getElementById("m1").addEventListener('click', function(){
  var content=document.getElementById("conteudo")
  
  this.classList.toggle('transformed')
  content.classList.toggle('transformed')
})

function relogio(){
  const now= new Date()
  const hora=String(now.getHours()).padStart(2,'0')
  const min=String(now.getMinutes()).padStart(2,'0')
  const sec=String(now.getSeconds()).padStart(2,'0')
  const hr=`${hora}:${min}`
  
  document.getElementById("hora").textContent=hr
}
relogio()
setInterval(relogio, 1000)
