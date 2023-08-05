const cardBlocks = document.querySelectorAll('.cardBlock-num');
const paginationLinks = document.querySelectorAll('.pagination .pag-link');

paginationLinks.forEach(link => {
  // Проверяем, является ли ссылка текущей страницей
  if (link.href === window.location.href) {
    link.classList.add('active'); // Добавляем класс "active" для текущей страницы
  }

  link.addEventListener('click', (event) => {
    event.preventDefault(); // Предотвращаем переход по ссылке

    // Получаем адрес ссылки
    const href = event.currentTarget.getAttribute('href');

    // Переходим по ссылке
    window.location.href = href;
  });
});

const cardsPerPage = 16; // Number of cards per page
let currentPage = 1;
const numPages = Math.ceil(cardBlocks.length / cardsPerPage);

function showPage(page) {
  if (page < 1 || page > numPages) return;

  const startIndex = (page - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  cardBlocks.forEach((cardBlock, index) => {
    if (index >= startIndex && index < endIndex) {
      cardBlock.style.display = 'flex';
    } else {
      cardBlock.style.display = 'none';
    }
  });

  currentPage = page;
}

showPage(currentPage); // Show the first page initially










