use tauri_plugin_sql::Migration;

fn get_migrations() -> Vec<Migration> {
    return vec![];
}

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
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
