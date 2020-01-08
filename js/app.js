const textView = document.getElementById('textview');

function insert(value) {
  textView.value += value;
}

document.getElementById('clear').addEventListener('click', function clear() {
  textView.value = '';
});

function equals() {
  var exp = textView.value;
  if (exp) {
    textView.value = eval(exp);
  }
}

function backspace() {
  let exp = textView.value;
  textView.value = exp.substring(0, exp.length - 1);
}