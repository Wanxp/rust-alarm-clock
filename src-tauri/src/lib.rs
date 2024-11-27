use sqlx::{Pool, Sqlite};
use tauri::App;
use crate::db::database::{setup_db, AppState};
use crate::biz::alarmclock::command::{save_clock, load_clock};


mod db;
mod biz;


// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    let app = tauri::Builder::default()
        // .plugin(tauri_plugin_sql::Builder::new().build())
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![save_clock, load_clock]);

    // let db = setup_db(&app).await;
    // app.manage(AppState { db })
    // .run(tauri::generate_context!())
    //         .expect("error while running tauri application");

}


