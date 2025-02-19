import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const contacts = await readContacts(); // Зчитуємо поточний список контактів

  for (let i = 0; i < number; i++) {
    contacts.push(createFakeContact()); // Додаємо нові контакти
  }

  await writeContacts(contacts); // Записуємо оновлений список у файл

  console.log(`✅ Успішно додано ${number} контактів!`);
};

// Отримуємо аргумент з командного рядка (наприклад, `npm run generate 5`)
const number = process.argv[2] ? parseInt(process.argv[2], 10) : 1;

generateContacts(number);
