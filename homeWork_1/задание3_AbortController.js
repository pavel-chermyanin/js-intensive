// Создаем новый AbortController
const abortController = new AbortController();

// Получаем ссылку на AbortSignal из контроллера
const abortSignal = abortController.signal;

// Создаем объект опций для Fetch API, добавляя abortSignal
const requestOptions = {
  method: 'GET',
  signal: abortSignal,
  // Другие опции запроса
};

// Выполняем HTTP-запрос с использованием Fetch API
const fetchPromise = fetch('https://api.example.com/data', requestOptions);

// Через некоторое время решаем отменить запрос
setTimeout(() => {
  // Вызываем метод abort() контроллера
  abortController.abort();
}, 5000); // Отменить запрос через 5 секунд

// Обрабатываем результат запроса (может быть как обычный then/catch, так и async/await)
fetchPromise
  .then(response => {
    if (!abortSignal.aborted) {
      // Проверяем, не был ли запрос отменен
      return response.json();
    } else {
      console.log('Запрос был отменен');
    }
  })
  .catch(error => {
    if (error.name === 'AbortError') {
      console.log('Запрос был отменен по сигналу');
    } else {
      console.error('Произошла ошибка:', error);
    }
  });