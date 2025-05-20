function calcular() {
  const fecha = new Date(document.getElementById("fechaInicio").value);
  const duracion = parseInt(document.getElementById("duracionCiclo").value);

  if (!fecha || isNaN(duracion)) return alert("Ingresa una fecha válida y duración");

  let resultadoHTML = "<h3>📅 Resultados:</h3>";

  // Próximo ciclo
  let proximo = new Date(fecha);
  proximo.setDate(proximo.getDate() + duracion);
  resultadoHTML += `<p><strong>Próximo ciclo:</strong> ${proximo.toDateString()}</p>`;

  // Días fértiles (Día 10 al 15 del ciclo)
  let fertilStart = new Date(fecha);
  fertileStart.setDate(fertileStart.getDate() + 10);
  let fertileEnd = new Date(fertileStart);
  fertileEnd.setDate(fertileStart.getDate() + 6);
  resultadoHTML += `<p><strong>Ventana fértil:</strong> Del ${fertileStart.toDateString()} al ${fertileEnd.toDateString()}</p>`;
  resultadoHTML += `<div class="grafico"><div class="dia-fertil"></div></div>`;

  document.getElementById("resultado").innerHTML = resultadoHTML;

  // Guardar en localStorage
  let historial = JSON.parse(localStorage.getItem("ciclos") || "[]");
  historial.push({ fecha: fecha.toISOString().split('T')[0], duracion });
  localStorage.setItem("ciclos", JSON.stringify(historial));
}