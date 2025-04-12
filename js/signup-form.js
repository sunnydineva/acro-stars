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
