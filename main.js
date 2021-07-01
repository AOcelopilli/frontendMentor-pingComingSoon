const d = document, $email = d.querySelector("input[type='email']");

console.log($email);

d.addEventListener("focusout", (e) => {
  /* TODO: 
    - Detectar evento en inputs
    - Obtener patron por input
    - Valir patron
    - Agregar clase dependiendo si es valido o no.
 */
  if (e.target.matches("input")) {
    let regex = new RegExp(e.target.pattern);

    if (regex.exec(e.target.value.trim())) {
      e.target.classList.remove("error");
    } else {
      e.target.classList.add("error");
    }
  }
});