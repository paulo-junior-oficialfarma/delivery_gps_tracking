use actix_web::{web, App, HttpServer};
mod handlers;
mod models;
mod database;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .route("/users", web::post().to(handlers::create_user))
            .route("/users/{id}", web::get().to(handlers::read_user))
            .route("/users/{id}", web::put().to(handlers::update_user))
            .route("/users/{id}", web::delete().to(handlers::delete_user))
            // Add other services here
    })
    .bind("127.0.0.1:8000")?
    .run()
    .await
}
