document.addEventListener("DOMContentLoaded", function () {
  const progress = document.getElementById("progress");
  const drinkButton = document.getElementById("drink-btn");
  const recommendedAmount = 10; // Quantidade recomendada em copos

  let currentAmount = 0;

  // Função para atualizar a barra de progresso
  function updateProgress() {
      const percentage = (currentAmount / recommendedAmount) * 100;
      progress.style.width = percentage + "%";
  }

  // Função para exibir notificação
  function mostrarNotificacao() {
      if (Notification.permission === "granted") {
          const notification = new Notification("Lembrete de Beber Água", {
              body: "Parabéns! Você atingiu a quantidade recomendada de água para hoje.",
              icon: "water-glass.png" // Ícone opcional
          });
      } else if (Notification.permission !== "denied") {
          Notification.requestPermission().then(function (permission) {
              if (permission === "granted") {
                  mostrarNotificacao();
              }
          });
      }
  }

  // Evento de clique no botão "Beber Água"
  drinkButton.addEventListener("click", function () {
      if (currentAmount < recommendedAmount) {
          currentAmount++;
          updateProgress();

          if (currentAmount === recommendedAmount) {
              mostrarNotificacao(); // Exibe a notificação quando a quantidade recomendada é atingida
          }
      }
  });

  // Inicialize a barra de progresso
  updateProgress();
});
