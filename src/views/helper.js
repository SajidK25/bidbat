const accordion = document.querySelector('#accordion');

accordion.addEventListener('click', event => {
  const target = event.target;
  if (target.classList.contains('btn-link')) {
    const parent = target.closest('.card');
    const collapse = parent.querySelector('.collapse');
    collapse.classList.toggle('show');
  }
});
