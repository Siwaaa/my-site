export const correctUrl = () => {
  const articleCheckbox = document.getElementById('about-check');

  const homePage = !articleCheckbox.checked;

  window.history.pushState({}, '', homePage ? '/' : '/about.html');
};
