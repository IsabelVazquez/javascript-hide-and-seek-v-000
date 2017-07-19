function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
 return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var original_ranks = document.querySelectorAll('.ranked-list');
  for (var i = 0; i < original_ranks.length; i++) {
    original_ranks[i].innerHTML = parseInt(original_ranks[i].innerHTML) + n
  }
}

function deepestChild() {
  var nodes = document.querySelectorAll('#grand-node div');
  var mostDeep = nodes[nodes.length- 1];
  return mostDeep
}
