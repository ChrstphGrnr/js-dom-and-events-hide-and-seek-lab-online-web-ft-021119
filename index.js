function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n) {
  let newLis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  debugger;
  for (let num of newLis) {
    num + n;
  }
  return newLis;
}
