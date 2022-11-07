sel_categoria = document.querySelector("#categoria");
btnResumen.addEventListener("click", function (calcular) {
  calcular.preventDefault();
  let valor_ticket = 200 * parseInt(cantidad.value);
  let TotalaPagar = 0;

  if (categoria.value == "estudiante") {
    TotalaPagar = valor_ticket - (valor_ticket * 0.8);
  }
  else if (categoria.value == "trainee") {
    TotalaPagar = valor_ticket - (valor_ticket * 0.5);

  }
  else {
    TotalaPagar = valor_ticket - (valor_ticket * 0.15);
  }

  document.querySelector("#totalAPagar").textContent = TotalaPagar;

})