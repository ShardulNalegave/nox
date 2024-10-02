import Database from '@tauri-apps/plugin-sql';

export const SQLite = await Database.load('sqlite:nox.db');