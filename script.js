function insert(num) {
  var numero = document.getElementById("input-text").innerHTML
  document.getElementById("input-text").innerHTML = numero + num
}

function clean() {
  document.getElementById("input-text").innerHTML = ""
}

function back() {
  var inputText = document.getElementById("input-text").innerHTML
  document.getElementById("input-text").innerHTML = input-text.substring(0, inputText.length -1)
}

function calcular() {
  var inputText = document.getElementById("input-text").innerHTML

  if(inputText) {
    document.getElementById("input-text").innerHTML = eval(inputText)
  }
}