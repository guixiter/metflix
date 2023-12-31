// Adiciona um evento de escuta para o evento de rolagem
window.addEventListener('wheel', function(e) {
    // Verifica se o botão do meio não está sendo pressionado
    if (!e.metaKey && !e.ctrlKey) {
      // Impede o comportamento padrão do scroll
      e.preventDefault();

      // Calcula a quantidade de rolagem suave
      var scrollAmount = window.innerWidth >= 1200 ? 40 : 20;

      // Rola suavemente para cima ou para baixo com base na direção do scroll
      window.scrollBy({
        top: e.deltaY > 0 ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  });