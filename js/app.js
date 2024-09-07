function search() {
  // Esta função é responsável por lidar com a funcionalidade de pesquisa.
  // Obtém uma referência ao elemento de seção HTML com o ID "searchResults".
  let resultsDiv = document.getElementById("resultados-pesquisa");
  let inputSearch = document.getElementById("pesquisa").value;

  if (!inputSearch) {
    resultsDiv.innerHTML = `
    <div class="item-resultado">
      <div class="descricao__card">
        <p class="error-message">
          <strong>Ops!</strong> Não encontramos resultados para a sua pesquisa. Tente usar palavras-chave diferentes ou verifique a ortografia.
      <div class="descricao__card">
    </div>
    `;
    return;
  }

  inputSearch = inputSearch.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados da pesquisa em HTML.
  let results = "";
  let title = "";
  let description = "";

  // Itera sobre cada item de dados no array professionWow.
  for (let data of atracoesMachuPicchu) {
    title = data.title.toLowerCase();
    description = data.description.toLowerCase();
    if (title.includes(inputSearch) || description.includes(inputSearch)) {
      // Concatena o código HTML para um único item de resultado de pesquisa à string results.
      results += `
      <div class="item-resultado">
          <img class="img_hero" src=${data.img} alt="" />
            <div class="descricao__card">
              <h2>${data.title}</h2>
              <p class="descricao-meta">${data.description}</p>
              <br>
              <a href=${data.url} target="_blank">
                <button class="btn__more-info" >
                  <p>Saiba mais</p>
                  <i class="fa-solid fa-arrow-right"></i>
                </button>
              </a>
        </div>
      </div>
      `;
    }
  }
  if (!results) {
    resultsDiv.innerHTML = `
    <div class="item-resultado">
      <div class="descricao__card">
        <p class="error-message">
          <strong>Ops!</strong> Não encontramos resultados para a sua pesquisa. Tente usar palavras-chave diferentes ou verifique a ortografia. <br>
          <br>
          <strong>Sugestões:</strong>
            Machu Picchu, Cidadela Inca, Templos, sol, lua...
          </ul>
        </p>
      <div class="descricao__card">
    </div>
    `;
    return;
  }
  // Define o conteúdo HTML interno da seção de resultados de pesquisa com o HTML gerado.
  resultsDiv.innerHTML = results;
}

// Função para adicionar o evento de escuta para a tecla Enter no campo de pesquisa.
function setupEnterKeyListener() {
  // Obtém uma referência ao campo de pesquisa pelo ID.
  let searchInput = document.getElementById("pesquisa");

  // Adiciona um evento de escuta para o evento 'keydown' no campo de pesquisa.
  searchInput.addEventListener("keydown", function (event) {
    // Verifica se a tecla pressionada é a tecla Enter (código 13).
    if (event.key === "Enter") {
      // Impede o comportamento padrão da tecla Enter, se necessário.
      event.preventDefault();
      // Chama a função de pesquisa.
      search();
    }
  });
}

// Chama a função para configurar o evento de escuta ao carregar a página.
window.onload = setupEnterKeyListener;
