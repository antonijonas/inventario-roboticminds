CREATE DATABASE IF NOT EXISTS itam_robotic_minds
CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE itam_robotic_minds;

CREATE TABLE usuarios_pin(
id INT AUTO_INCREMENT PRIMARY KEY,
pin VARCHAR(50) UNIQUE NOT NULL,
nombre VARCHAR(150),
correo VARCHAR(150),
area VARCHAR(100),
cargo VARCHAR(100),
sede VARCHAR(100),
estado VARCHAR(30) DEFAULT 'ACTIVO'
);

CREATE TABLE activos(
id INT AUTO_INCREMENT PRIMARY KEY,
codigo_activo VARCHAR(50) UNIQUE,
categoria VARCHAR(100),
marca VARCHAR(100),
modelo VARCHAR(100),
serie VARCHAR(150),
estado VARCHAR(50) DEFAULT 'DISPONIBLE',
sede VARCHAR(100),
ubicacion VARCHAR(100),
custodio VARCHAR(150),
observaciones TEXT
);

CREATE TABLE prestamos(
id INT AUTO_INCREMENT PRIMARY KEY,
codigo_prestamo VARCHAR(50),
usuario_pin_id INT,
activo_id INT,
fecha_salida DATETIME,
fecha_devolucion DATETIME,
estado VARCHAR(50)
);

CREATE TABLE novedades(
id INT AUTO_INCREMENT PRIMARY KEY,
activo_id INT,
tipo VARCHAR(50),
descripcion TEXT,
fecha DATETIME,
estado VARCHAR(50)
);