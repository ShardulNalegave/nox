
// ===== Imports =====
use tauri_plugin_sql::{Migration, MigrationKind};
// ===================

pub fn get_migrations() -> Vec<Migration> {
  vec![
    Migration {
      version: 1,
      kind: MigrationKind::Up,
      description: "create_dbs",
      sql: "
        PRAGMA foreign_keys = ON;

        CREATE TABLE IF NOT EXISTS users (
          id TEXT UNIQUE NOT NULL PRIMARY KEY,
          kind TEXT CHECK (kind IN ('student', 'faculty'))
        );

        CREATE TABLE IF NOT EXISTS students (
          id TEXT UNIQUE NOT NULL PRIMARY KEY,
          name TEXT NOT NULL,
          email TEXT NOT NULL UNIQUE,
          FOREIGN KEY (id) REFERENCES users(id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS faculty (
          id TEXT UNIQUE NOT NULL PRIMARY KEY,
          name TEXT NOT NULL,
          email TEXT NOT NULL UNIQUE,
          FOREIGN KEY (id) REFERENCES users(id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS sessions (
          enter INTEGER NOT NULL PRIMARY KEY,
          uid TEXT NOT NULL,
          FOREIGN KEY (uid) REFERENCES users(id)
        );

        CREATE TABLE IF NOT EXISTS records (
          enter INTEGER NOT NULL PRIMARY KEY,
          exit INTEGER NOT NULL,
          uid TEXT NOT NULL,
          FOREIGN KEY (uid) REFERENCES users(id)
        );
      ",
    },
  ]
}