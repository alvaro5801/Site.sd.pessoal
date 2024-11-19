// Seleciona os elementos do menu e do botão hambúrguer
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a');

// Alternar a exibição do menu ao clicar no botão hambúrguer
menuToggle.addEventListener('click', () => {
  if (menu.style.display === 'flex') {
    menu.style.display = 'none'; // Esconde o menu
  } else {
    menu.style.display = 'flex'; // Exibe o menu
    menu.style.width = 'auto'; // Ajusta a largura dinamicamente
  }
});

// Implementar o scroll suave nos links do menu
menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // Evita o comportamento padrão do link
    const targetId = link.getAttribute('href').slice(1); // Obtém o ID do alvo
    const targetElement = document.getElementById(targetId); // Seleciona o elemento alvo

    if (targetElement) {
      // Rola suavemente até o alvo
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Fecha o menu após clicar no link (em telas menores)
    if (window.innerWidth <= 768) {
      menu.style.display = 'none'; // Esconde o menu
    }
  });
});

// Detecta redimensionamento da tela para ajustar o menu
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    menu.style.display = 'flex'; // Exibe o menu em telas maiores
    menu.style.width = 'auto'; // Ajusta a largura dinamicamente
  } else {
    menu.style.display = 'none'; // Esconde o menu em telas menores
  }
});
