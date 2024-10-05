
pub mod migrations;

// ===== Imports =====
use tauri_plugin_store::StoreExt;
use crate::migrations::get_migrations;
// ===================

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  tauri::Builder::default()
    .plugin(tauri_plugin_store::Builder::new().build())
    .plugin(
      tauri_plugin_sql::Builder::new()
        .add_migrations("sqlite:nox.db", get_migrations())
        .build()
    )
    .plugin(tauri_plugin_shell::init())
    .setup(|app| {
      let _ = app.handle().store_builder("nox-store.bin").build();
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
