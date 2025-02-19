import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    const contactCount = contacts.length;
    return contactCount;
  } catch (error) {
    console.error('❌ Помилка при зчитуванні контактів:', error.message);
    return 0;
  }
};

countContacts().then((contactCount) =>
  console.log('✅ Кількість контактів:', contactCount),
);
