  const dataCopa = new Date("June 11, 2026 00:00:00").getTime();
  const contador = setInterval(() => {
    const agora = new Date().getTime();
    const diferenca = dataCopa - agora;
    
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);
    
    document.getElementById("dias").innerText = dias < 10 ? '0' + dias : dias;
    document.getElementById("horas").innerText = horas < 10 ? '0' + horas : horas;
    document.getElementById("minutos").innerText = minutos < 10 ? '0' + minutos : minutos;
    document.getElementById("segundos").innerText = segundos < 10 ? '0' + segundos : segundos;
    
    if (diferenca < 0) {
      clearInterval(contador);
      document.querySelector(".contador").innerHTML = "<h2 style='color:#ffc107;'>A Copa começou!</h2>";
    }
  }, 1000);

  
  