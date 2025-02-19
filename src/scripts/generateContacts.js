import { createFakeContact } from '../utils/createFakeContact';
import { readContacts } from '../utils/readContacts';
import { writeContacts } from '../utils/writeContacts';

const generateContacts = async (number) => {
  try {
    const existingContacts = await readContacts();
    const newContacts = Array.from({ lenght: number }, () =>
      createFakeContact(),
    );
    const updatedContacts = [...existingContacts, ...newContacts];
    await writeContacts(updatedContacts);

    console.log('✅ Успішно додано ${number} контактів!');
  } catch (error) {
    console.error('❌ Помилка генерації контактів:', error.message);
  }
};

generateContacts(5);
