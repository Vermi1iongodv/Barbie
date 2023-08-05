// JavaScript

const cardsPerPage = 16; // Number of cards per page
const cardBlocks = document.querySelectorAll('.cardBlock-num');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

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

function showNextPage() {
  showPage(currentPage + 1);
}

function showPrevPage() {
  showPage(currentPage - 1);
}

prevButton.addEventListener('click', showPrevPage);
nextButton.addEventListener('click', showNextPage);

showPage(currentPage); // Show the first page initially


// JavaScript (pagination.js)

// Get the current page number from the URL
function getCurrentPageNumber() {
  const urlParams = new URLSearchParams(window.location.search);
  const pageParam = urlParams.get('page');
  return pageParam ? parseInt(pageParam) : 1;
}

// Show the corresponding page based on the current page number
function showCurrentPage() {
  const currentPage = getCurrentPageNumber();
  const allPages = document.querySelectorAll('.pagination-page');
  allPages.forEach((page) => {
    if (page.dataset.page == currentPage) {
      page.style.display = 'block';
    } else {
      page.style.display = 'none';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  showCurrentPage();
});
