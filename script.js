var moveButton = document.querySelector("button:nth-child(2)");

var correctlyButton = document.querySelector("button:first-child");

moveButton.addEventListener("click", function () {
  var vertical = Math.floor(Math.random() * 400);
  var horizontal = Math.floor(Math.random() * 400);
  moveButton.style.position = "absolute";
  moveButton.style.left = vertical + "px";
  moveButton.style.top = horizontal + "px";
});

correctlyButton.addEventListener("click", function () {
  alert("Uhuuull, Vamos encher a pança! Mas antes, eu gostaria de dizer, o quão bem você me fez, nesses 5 meses de namoro... (1/10)");

  alert("Parece que foi ontem, que olhei seu lindo sorriso, e me encantei. Você me fez sentir coisas, que nunca senti antes... (2/10)")

  alert("É louco pensar que se passaram apenas 5 meses. Quando estou com você o tempo parece passar mais rápido... (3/10)")

  alert("Porém existem momentos, do qual o tempo parece que parou para mim... (4/10)")

  alert("Aquele sorisso, tão cheio de vida, tão cheio... de amor, em nosso primeiro encontro, faz meu coração travar no tempo (5/10)")

  alert("Sou muito feliz em te ter comigo, ao meu lado. Passei 19 anos da minha vida, sem saber que você existia e hoje, 19 minutos sem a sua presença... (6/10)")

  alert("É muito tempo perdido... Falando em tempo, irei 'roubar' uma pequena frase que vi em um livro... (7/10)")

  alert("'Foi o tempo que perdeste com tua rosa, que a tornou tão importante...' (8/10)")

  alert("Serei eternamente responsável por aquilo que cativei, e você, meu amor, foi a melhor pessoa que eu poderia ter cativado... (9/10)")

  alert("Então, encerrarei com isso, espero que possamos ter muitos meses, anos, décadas de relação, com você me sinto seguro para ser o cara mais clichê do mundo, e falar aquelas palavras, aquelas três palavrinhas. Eu... (10/10)")

  alert("Te amo! ❤️")
});
