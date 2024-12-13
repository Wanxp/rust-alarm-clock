// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/

use tauri_plugin_store::StoreExt;
use crate::biz::alarm::command::{load_alarm, save_alarm};
use crate::constant::global_constant::{STORE_FILE_NAME, STORE_KEY};

mod biz;
mod constant;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {

    // #[cfg(debug_assertions)] // only enable instrumentation in development builds
    let devtools = tauri_plugin_devtools::init();

    let builder = tauri::Builder::default();


    // #[cfg(debug_assertions)]
    let builder = builder.plugin(devtools);

    builder.plugin(tauri_plugin_store::Builder::new().build())
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![save_alarm,load_alarm])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
