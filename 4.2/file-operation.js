// file-operation.js
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const filename = process.env.FILENAME;

if (!filename) {
  console.error('Ошибка: переменная FILENAME не найдена в .env');
  process.exit(1);
}

const content = 'В файл записан новвый текст';

// Создаем и записываем файл
fs.writeFileSync(filename, content, 'utf8');
console.log(`Файл "${filename}" успешно создан и записан`);

// Читаем и выводим содержимое файла
const data = fs.readFileSync(filename, 'utf8');
console.log('\nСодержимое файла:');
console.log(data);
