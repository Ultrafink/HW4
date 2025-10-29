const fs = require('fs').promises;
const dotenv = require('dotenv');

dotenv.config();

const filename = process.env.FILENAME;

if (!filename) {
  console.error('Ошибка: переменная FILENAME не найдена в .env');
  process.exit(1);
}

const content = 'В файл записан новый текст';

async function main() {
  try {
    
    await fs.writeFile(filename, content, 'utf8');
    console.log(`Файл "${filename}" успешно создан и записан`);

    
    const data = await fs.readFile(filename, 'utf8');
    console.log('\nСодержимое файла:');
    console.log(data);
  } catch (err) {
    console.error('Ошибка при работе с файлом:', err.message);
  }
}

main();
