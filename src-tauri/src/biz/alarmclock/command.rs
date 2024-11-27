use crate::db::database::AppState;
use crate::db::table::AlarmClock;

#[tauri::command]
pub async fn save_clock(state: tauri::State<'_, AppState>, times: Vec<String>) -> Result<(), String> {
    let db = &state.db;
    let time = times.join("),(");
    let time = format!("({})", time);
    sqlx::query("INSERT INTO alarm_clock (time) VALUES ?")
        .bind(time)
        .execute(db)
        .await
        .map_err(|e| format!("Failed to insert todo: {}", e))?;
    Ok(())
}



#[tauri::command]
pub async fn load_clock(state: tauri::State<'_, AppState>) -> Result<Vec<String>, String> {
    // let db = &state.db;
    // let alarm_clocks: Vec<AlarmClock> = sqlx::query_as!(AlarmClock,
    //     "SELECT * FROM alarm_clock")
    //     .fetch(db)
    //     ;
    // Ok(alarm_clocks.iter().map(|alarm_clock| alarm_clock.time.clone()).collect())
    Ok(vec![])
}