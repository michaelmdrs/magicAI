    const btnFiltro = document.querySelector('.btn-filtrar');
    btnFiltro.addEventListener('click', () => {
        const categoriaSelecionada = document.querySelector('#categoria').value.toLowerCase();
        const cartas = document.querySelectorAll('.carta')

        cartas.forEach(carta => {
            const categoriaCarta = carta.dataset.categoria.toLowerCase();
            if (categoriaSelecionada === 'todas' || categoriaCarta === categoriaSelecionada) {
                carta.style.display = 'block';
            } else {
                carta.style.display = 'none';
            }
        })  
    })
    
    
/**
 * O que precisamos fazer:
 * 1. Criar uma função que filtra os produtos com base no valor do input
 * 2. A função deve ser chamada sempre que o usuário digitar algo no input
 * 3. A função deve percorrer todos os produtos e verificar se o nome do produto contém o valor do input    
 * 4. Se o nome do produto contém o valor do input, o produto deve ser exibido
 * 5. Se o nome do produto não contém o valor do input, o produto deve ser ocultado
 * 6. A função deve ser chamada quando a página for carregada para exibir todos os produtos
 * 7. A função deve ser chamada sempre que o usuário clicar no botão de limpar filtro
 * 8. A função deve ser chamada sempre que o usuário clicar no botão de aplicar filtro
 * 9. A função deve ser chamada sempre que o usuário clicar no botão de remover filtro
 * 10. A função deve ser chamada sempre que o usuário clicar no botão de adicionar filtro
 * 11. A função deve ser chamada sempre que o usuário clicar no botão de remover todos os filtros
 * Quando o usuário clicar no botão de aplicar filtro, a função deve aplicar o filtro e exibir apenas os produtos que atendem ao critério de filtro
 * Quando o usuário clicar no botão de remover filtro, a função deve remover o filtro e exibir todos os produtos
 * Quando o usuário clicar no botão de adicionar filtro, a função deve adicionar o filtro e exibir apenas os produtos que atendem ao critério de filtro
 * Quando o usuário clicar no botão de remover todos os filtros, a função deve remover todos os filtros e exibir todos os produtos
 * Quando o usuário clicar no botão de limpar filtro, a função deve limpar o filtro e exibir todos os produtos
 */