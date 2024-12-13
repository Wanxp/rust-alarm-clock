use serde_json::json;
use tauri_plugin_store::StoreExt;
use crate::constant::global_constant::{STORE_FILE_NAME, STORE_KEY};


#[tauri::command]
pub fn save_alarm(app_handle: tauri::AppHandle, times: Vec<String>)  {
    let store = app_handle.store(STORE_FILE_NAME);
    let store = store.expect("Failed to get store");
    store.set(STORE_KEY, json!(times));
}

#[tauri::command]
pub fn load_alarm(app_handle: tauri::AppHandle) -> Vec<String> {
    let store = app_handle.store(STORE_FILE_NAME);
    let store = store.expect("Failed to get store");
    match store.get(STORE_KEY) {
        Some(value) => value.as_array().unwrap().iter().map(|v| v.as_str().unwrap().to_string()).collect(),
        None => vec![]
    }



}
