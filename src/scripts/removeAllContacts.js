import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const contacts = await readContacts();
    contacts.length = 0;
    await writeContacts(contacts);

    console.log('✅ Усі контакти було успішно видалено!');
  } catch (error) {
    console.error('❌ Помилка при видаленні контактів:', error.message);
  }
};

removeAllContacts();
