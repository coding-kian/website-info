const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const menu = document.querySelector('.menu');
const links = document.querySelector('.links');
if (menu && links) menu.addEventListener('click', () => {
  links.classList.toggle('open');
  menu.setAttribute('aria-expanded', links.classList.contains('open'));
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const selected = button.dataset.filter;
    document.querySelectorAll('[data-category]').forEach(card => {
      card.hidden = selected !== 'all' && !(card.dataset.category || '').includes(selected);
    });
  });
});
