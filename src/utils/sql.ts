import Database from '@tauri-apps/plugin-sql';

export const SQLite = await Database.load('sqlite:nox.db');

export async function loadStudentRecords(records: [string, string][]) {
  for (let i = 0; i < records.length; i++) {
    const rec = records[i];
    try {
      await SQLite.execute(`
        INSERT INTO users (id, kind, name) VALUES ($1, 'student', $2);
      `, rec);
    } catch (e) {
      console.log(e);
      console.log(rec);
    }
  }

  console.log('Updated');
}

export async function loadFacultyRecords(records: [string, string][]) {
  for (let i = 0; i < records.length; i++) {
    const rec = records[i];
    try {
      await SQLite.execute(`
        INSERT INTO users (id, kind, name, email) VALUES ($1, 'faculty', $2);
      `, rec);
    } catch (e) {
      console.log(e);
      console.log(rec);
    }
  }

  console.log('Updated');
}

export async function getUser(id: string): Promise<{ id: string, kind: string }[]> {
  return await SQLite.select(`SELECT id, kind FROM users WHERE id = $1`, [id]);
}

export async function newSession(uid: string) {
  await SQLite.execute(`INSERT INTO sessions (enter, uid) VALUES ($1, $2);`, [Date.now(), uid]);
}

export async function getSession(uid: string): Promise<{ enter: number, uid: string }[]> {
  return await SQLite.select(`SELECT enter, uid FROM sessions WHERE uid = $1;`, [uid]);
}

export async function getSessions(): Promise<{ enter: number, uid: string }[]> {
  return await SQLite.select(`SELECT enter, uid FROM sessions;`, []);
}

export async function endSession(session: { enter: number, uid: string }, exit: number = Date.now()) {
  await SQLite.execute(`DELETE FROM sessions WHERE uid = $1;`, [session.uid]);
  await SQLite.execute(`INSERT INTO records (enter, exit, uid) VALUES ($1, $2, $3);`, [session.enter, exit, session.uid]);
}

export async function getRecords(from: number, to: number): Promise<{
  enter: number,
  exit: number,
  id: string,
  name: string,
  kind: string,
}[]> {
  return await SQLite.select(`
    SELECT R.enter, R.exit, U.id, U.name, U.kind FROM records R INNER JOIN users U ON R.uid = U.id
    WHERE enter < $1 AND enter > $2;
  `, [to, from]);
}