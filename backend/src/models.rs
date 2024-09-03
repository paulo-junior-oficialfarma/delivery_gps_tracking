use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize)]
pub struct User {
    pub id: Option<i32>, // Changed from Uuid to i32
    pub username: String,
    pub email: String,
    pub password: String,
}

#[derive(Serialize, Deserialize)]
pub struct Location {
    pub id: Option<i32>,
    pub user_id: i32,
    pub latitude: f64,
    pub longitude: f64,
}
