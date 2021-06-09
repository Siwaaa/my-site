import { correctUrl } from './helpers/correctUrl';

const articleCheckbox = document.getElementById('about-check');
const articleCloseButton = document.querySelector(
  '[data-checker=about-check]',
);

export const addArticleToggle = () => {
  articleCheckbox.addEventListener('change', correctUrl);
  articleCloseButton.addEventListener('click', correctUrl);
};
