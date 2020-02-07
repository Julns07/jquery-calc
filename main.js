$(document).ready(function() {
  $("#add").click(function() {
    var number1 = Number($("#num1").val())
    var number2 = Number($("#num2").val())
    $("#result").val(number1 + number2)
  })
  $("#subtract").click(function() {
    var number1 = Number($("#num1").val())
    var number2 = Number($("#num2").val())
    $("#result").val(number1 - number2)
  })
  $("#divide").click(function() {
    var number1 = Number($("#num1").val())
    var number2 = Number($("#num2").val())
    $("#result").val(number1 / number2)
  })
  $("#multiply").click(function() {
    var number1 = Number($("#num1").val())
    var number2 = Number($("#num2").val())
    $("#result").val(number1 * number2)
  })
})
