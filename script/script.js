// navigation.js

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