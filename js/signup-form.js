window.onload = function() {
    // Получаваме текущата дата
    const today = new Date();
    const currentYear = today.getFullYear();
    const nextYear = currentYear + 1;

    // Форматираме датата в правилния формат (YYYY-MM-DD)
    const minDate = today.toISOString().split('T')[0]; // Текущата дата (без времето)
    const maxDate = `${nextYear}-12-31`; // Последния ден на следващата година

    // Задаваме минималната и максималната дата
    document.getElementById('date').setAttribute('min', minDate);
    document.getElementById('date').setAttribute('max', maxDate);

    // Проверяваме дали има параметър "trial" в URL-а
    const urlParams = new URLSearchParams(window.location.search);
    const trial = urlParams.get('trial');  // Проверка за параметъра trial

    // Ако trial е true, попълваме полето със съобщение
    if (trial === 'true') {
        document.getElementById('message').value = 'Запис за пробна тренировка: Моля, свържете се с нас за повече информация и потвърждение на записването.';
    }
};

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const thankYou = document.getElementById("thank-you");
  const contactContainer = document.querySelector(".contact-container"); // 🆕 Добавено

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // предотвратява стандартното поведение

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === true || data.success === "true") {
          form.reset();
          form.style.display = "none";
          contactContainer.style.display = "none"; // 🆕 Скрива и контейнера
          thankYou.style.display = "block";
          history.replaceState(null, "", location.pathname);
        } else {
          alert("Грешка при изпращане на формата. Опитайте отново.");
        }
      })
      .catch((error) => {
        alert("Грешка при свързване със сървъра.");
        console.error("Error:", error);
      });
  });
});
