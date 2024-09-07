//* Criando uma Transição Mais Suave para o Menu

window.addEventListener("scroll", () => {
  const nav = document.querySelector("header");
  if (window.scrollY > 0) {
    nav.style.backgroundColor =
      "rgba(0, 0, 0, 0.950)"; /* Cor de fundo ao rolar */
  } else {
    nav.style.backgroundColor = "rgba(0, 0, 0, 0.6)"; /* Cor de fundo inicial */
  }
});

// Script para inserir o ano atual no rodapé
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
});
