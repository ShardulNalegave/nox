import Database from '@tauri-apps/plugin-sql';

export const SQLite = await Database.load('sqlite:nox.db');

export async function loadStudentRecords(records: [string, string, string][]) {
  for (let i = 0; i < records.length; i++) {
    const rec = records[i];
    try {
      await SQLite.execute(`
        INSERT INTO users (id, kind) VALUES ($1, 'student');
        INSERT INTO students (id, name, email) VALUES ($1, $2, $3);
      `, rec);
    } catch (e) {
      console.log(e);
      console.log(rec);
    }
  }

  console.log('Updated');
}