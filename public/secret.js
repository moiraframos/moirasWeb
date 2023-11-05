const password = prompt("Contraseña por favor");

document.getElementsByTagName("body")[0].style.filter = "blur(25px)";

(async () => {
  const response = await fetch(
    "https://europe-west1-random-crissto-projects.cloudfunctions.net/moiraswebsecurity",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ secret: password }),
    }
  );

  if (response.status === 200) {
    const { authed } = await response.json();
    if (!authed) {
      window.location.href = "/";
    } else {
      document.getElementsByTagName("body")[0].style.filter = "none";
    }
  }
})();
