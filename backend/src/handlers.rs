use actix_web::{web, HttpResponse, Responder};
use crate::models::User;
use crate::database::connect_to_db;

pub async fn create_user(user: web::Json<User>) -> impl Responder {
    // Connect to the database
    let client = connect_to_db().await.expect("Failed to connect to database");

    // Perform the database operation
    client.execute(
        "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)",
        &[&user.username, &user.email, &user.password],
    ).await.expect("Failed to insert user");

    // Construct and return the response with a success message
    HttpResponse::Created().body("User created successfully.")
}

pub async fn read_user(id: web::Path<i32>) -> impl Responder {
    let id_value = *id;

    // Connect to the database
    let client = connect_to_db().await.expect("Failed to connect to database");

    // Query the database using the integer id directly
    let row = client.query_one(
        "SELECT id, username, email, password FROM users WHERE id = $1",
        &[&(id_value as i32)],
    ).await.expect("Failed to fetch user");

    // Extract the user details from the row
    let user = User {
        id: row.get(0),
        username: row.get(1),
        email: row.get(2),
        password: row.get(3),
    };

    // Return the user details as a JSON response
    HttpResponse::Ok().json(user)
}


pub async fn update_user(id: web::Path<i32>, user: web::Json<User>) -> impl Responder {
    let client = connect_to_db().await.expect("Failed to connect to database");

    client.execute(
        "UPDATE users SET username = $1, email = $2, password = $3 WHERE id = $4",
        &[&user.username, &user.email, &user.password, &id.to_string()],
    ).await.expect("Failed to update user");

    HttpResponse::Ok().finish()
}

pub async fn delete_user(id: web::Path<i32>) -> impl Responder {
    let client = connect_to_db().await.expect("Failed to connect to database");

    client.execute(
        "DELETE FROM users WHERE id = $1",
        &[&id.to_string()],
    ).await.expect("Failed to delete user");

    HttpResponse::Ok().finish()
}
