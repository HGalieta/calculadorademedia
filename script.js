function Calcular() {
  var primeiroBim = parseFloat(document.getElementById("notaPrimeiroBimestre").value);
  var segundoBim = parseFloat(document.getElementById("notaSegundoBimestre").value);
  var terceiroBim = parseFloat(document.getElementById("notaTerceiroBimestre").value);
  var quartoBim = parseFloat(document.getElementById("notaQuartoBimestre").value);
  
  var media = (primeiroBim + segundoBim + terceiroBim + quartoBim)/4;
  
  
  if(media >=7) {
    var aprovado = document.getElementById("notaFinal");
    var textoAprovado = media + " Parabéns, você foi aprovado(a)!";
    aprovado.innerHTML = textoAprovado;
  }
  else{
    var reprovado = document.getElementById("notaFinal");
    var textoReprovado = media + " Infelizmente você foi reprovado(a)";
    reprovado.innerHTML = textoReprovado;
  }
}