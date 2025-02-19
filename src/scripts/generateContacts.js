import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const contacts = await readContacts();
  for (let i = 0; i < number; i++) {
    contacts.push(createFakeContact());
  }

  await writeContacts(contacts);

  console.log(`✅ Успішно додано ${number} контактів!`);
};

const number = process.argv[2] ? parseInt(process.argv[2], 10) : 1;

generateContacts(number);
