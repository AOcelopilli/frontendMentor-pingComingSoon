const d = document,
  $email = d.getElementById("email"),
  $form = d.getElementById("form");

let $msg = d.createElement("small");
$msg.id = "msg";

d.addEventListener("submit", (e) => {
  e.preventDefault();

  if ($email.value.trim() !== "") {
    let regex =
      /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/;

    if (regex.test($email.value)) {
      $email.classList.remove("error");
      $email.classList.add("ok");
      $form.reset();
      setTimeout(() => {
        $email.classList.remove("ok");
      }, 2000);
    } else {
      $email.classList.remove("ok");
      $msg.innerHTML = "Please provide a valid email address";
      $email.insertAdjacentElement("afterend", $msg);
      $email.classList.add("error");
    }
  }
});

d.addEventListener("click", (e) => {
  if (e.target.matches("input[type='submit']")) {
    d.getElementById("msg") && d.getElementById("msg").remove();
    $email.classList.remove("error");

    if ($email.value.trim() === "") {
      $msg.innerHTML = "Whoops! It looks like you forgot to add your email";
      $email.classList.add("error");
      $email.insertAdjacentElement("afterend", $msg);
    }
  }
});
