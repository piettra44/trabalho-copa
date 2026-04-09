const dataCopa = new Date("June 11, 2026 00:00:00").getTime();

  const contador = setInterval(() => {
    const agora = new Date().getTime();
    const diferenca = dataCopa - agora;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById("dias").innerText = dias;
    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;
    document.getElementById("segundos").innerText = segundos;

    if (diferenca < 0) {
      clearInterval(contador);
      document.querySelector(".contador").innerHTML = "A Copa começou!";
    }
  }, 1000);