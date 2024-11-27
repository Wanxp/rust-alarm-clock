use std::fs::OpenOptions;
use sqlx::sqlite::SqlitePoolOptions;
use sqlx::{migrate, Pool, Sqlite, SqlitePool};
use tauri::{App, Builder, Wry};

pub struct AppState {
    pub(crate) db: SqlitePool,
}

pub async fn setup_db(app: &Builder<Wry>)  {

    // let mut path = app
    //     .path_resolver()
    //     .app_data_dir()
    //     .expect("could not get data_dir");
    // match std::fs::create_dir_all(path.clone()) {
    //     Ok(_) => {}
    //     Err(err) => {
    //         panic!("error creating directory {}", err);
    //     }
    // };
    // path.push("db.sqlite");
    // let result = OpenOptions::new().create_new(true).write(true).open(&path);
    // match result {
    //     Ok(_) => println!("database file created"),
    //     Err(err) => match err.kind() {
    //         std::io::ErrorKind::AlreadyExists => println!("database file already exists"),
    //         _ => {
    //             panic!("error creating databse file {}", err);
    //         }
    //     },
    // }
    //
    // let pool = match SqlitePoolOptions::new()
    //     .max_connections(10)
    //     .connect(path.to_str().unwrap()).await {
    //     Ok(pool) => {
    //         println!("✅ Connection to the db is successful!");
    //         pool
    //     }
    //     Err(err) => {
    //         println!("❌ Connection to the db failed: {:?}", err);
    //         std::process::exit(1);
    //     }
    // };
    // match migrate!()
    //     .run(&pool)
    //     .await {
    //     Ok(_) => {
    //         println!("✅ Database migration successful!");
    //     }
    //     Err(err) => {
    //         println!("❌ Database migration failed: {:?}", err);
    //         std::process::exit(1);
    //     }
    // }
    // pool
}