import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (error) {
    console.error('❌ Помилка при зчитуванні контактів:', error.message);
    return [];
  }
};

getAllContacts()
  .then((contacts) => console.log('✅ Контакти:', contacts))
  .catch((error) => console.error('❌ Сталася помилка:', error.message));
