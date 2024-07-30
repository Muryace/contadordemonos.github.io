let resultEve = 0 || JSON.parse(localStorage.getItem('resultEve'));

let resultMarce = 0 || JSON.parse(localStorage.getItem('resultMarce'));

function resultA() {
  const eveScore = document.querySelector('.js-eve');

  resultEve += 1;

  localStorage.setItem('resultEve', JSON.stringify(resultEve));

  eveScore.innerHTML = `${resultEve}`;

  eveScore.classList.add('active-style')

  setTimeout(() => {
    eveScore.classList.remove('active-style');
  }, 1500)
}

function resultB() {
  const marceScore = document.querySelector('.js-marce');

  resultMarce += 1;

  localStorage.setItem('resultMarce', JSON.stringify(resultMarce));

  marceScore.innerHTML = `${resultMarce}`;

  marceScore.classList.add('active-style')

  setTimeout(() => {
    marceScore.classList.remove('active-style');
  }, 1500)
}

function resetScore() {
  resultEve = 0;
  resultMarce = 0;

  localStorage.setItem('resultEve', JSON.   stringify(resultEve));

  localStorage.setItem('resultMarce', JSON.stringify(resultMarce));

  document.querySelector('.js-eve')
    .innerHTML = `${resultEve}`;

  document.querySelector('.js-marce')
    .innerHTML = `${resultMarce}`;
}

document.querySelector('.js-eve')
  .innerHTML = `${resultEve}`;

document.querySelector('.js-marce')
  .innerHTML = `${resultMarce}`;