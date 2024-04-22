-- Usuario - Cliente
INSERT INTO `flashfood`.`customers` (`name`, `lastName`, `email`, `phone` , `password`, `token`, `idRole`, `image`, `createdAt`, `updatedAt`) VALUES
('Carlos', 'Gómez', 'carlos.gomez@gmail.com', 2216765342, '$2a$10$fGPJEl5Twzz.eySDoWUFpeOgZB6yNlRGpbVltGt5/MBQMgHXGSrFu', NULL, 2, 'image1.jpg', NOW(), NOW()),
('Juan', 'Martínez', 'juan.martinez@gmail.com', 2216765342, '$2a$10$fGPJEl5Twzz.eySDoWUFpeOgZB6yNlRGpbVltGt5/MBQMgHXGSrFu', NULL, 2, 'image2.jpg', NOW(), NOW()),
('María', 'Fernández', 'maria.fernandez@gmail.com', 2216765342, '$2a$10$fGPJEl5Twzz.eySDoWUFpeOgZB6yNlRGpbVltGt5/MBQMgHXGSrFu', NULL, 2, 'image3.jpg', NOW(), NOW()),
('Laura', 'Pérez', 'laura.perez@gmail.com', 2216765342, '$2a$10$fGPJEl5Twzz.eySDoWUFpeOgZB6yNlRGpbVltGt5/MBQMgHXGSrFu', NULL, 2, 'image4.jpg', NOW(), NOW()),
('Andrés', 'Ramírez', 'andres.ramirez@gmail.com', 2216765342, '$2a$10$fGPJEl5Twzz.eySDoWUFpeOgZB6yNlRGpbVltGt5/MBQMgHXGSrFu', NULL, 2, 'image5.jpg', NOW(), NOW()),
('Sofía', 'García', 'sofia.garcia@gmail.com', 2216765342, '$2a$10$fGPJEl5Twzz.eySDoWUFpeOgZB6yNlRGpbVltGt5/MBQMgHXGSrFu', NULL, 2, 'image6.jpg', NOW(), NOW()),
('Roberto', 'Hernández', 'roberto.hernandez@gmail.com', 2216765342, '$2a$10$fGPJEl5Twzz.eySDoWUFpeOgZB6yNlRGpbVltGt5/MBQMgHXGSrFu', NULL, 2, 'image7.jpg', NOW(), NOW()),
('Claudia', 'Morales', 'claudia.morales@gmail.com', 2216765342, '$2a$10$fGPJEl5Twzz.eySDoWUFpeOgZB6yNlRGpbVltGt5/MBQMgHXGSrFu', NULL, 2, 'image8.jpg', NOW(), NOW());

-- Ubicacion

INSERT INTO `flashfood`.`locations` (`idCustomer`, `country`, `province`, `city`, `address`, `comment`) VALUES
(9, 'AR', 'Buenos Aires', 'Buenos Aires', 'Avenida de Mayo 123', 'Casa de 2 pisos, con puerta gris'),
(10, 'AR', 'Córdoba', 'Córdoba', 'Boulevard San Juan 456', 'Casa de 2 pisos, con puerta gris'),
(3, 'AR', 'Santa Fe', 'Rosario', 'Calle Santa Fe 789', 'Casa de 2 pisos, con puerta gris'),
(4, 'AR', 'Mendoza', 'Mendoza', 'San Martín 101', 'Casa de 2 pisos, con puerta gris'),
(5, 'AR', 'Salta', 'Salta', 'España 202', 'Casa de 2 pisos, con puerta gris'),
(6, 'AR', 'Tucumán', 'San Miguel de Tucumán', 'San Lorenzo 303', 'Casa de 2 pisos, con puerta gris'),
(7, 'AR', 'Misiones', 'Posadas', 'Avenida Uruguay 404', 'Casa de 2 pisos, con puerta gris'),
(8, 'AR', 'Entre Ríos', 'Paraná', 'Urquiza 505', 'Casa de 2 pisos, con puerta gris'),
(8, 'AR', 'Entre Ríos', 'Paraná', 'Urquiza 805', 'Casa de 2 pisos, con puerta gris'),
(NULL, 'AR', 'San Juan', 'San Juan', '25 de Mayo 606', 'Casa de 2 pisos, con puerta gris'),
(NULL, 'AR', 'La Pampa', 'Santa Rosa', 'Avenida Luro 707', 'Casa de 2 pisos, con puerta gris'),
(NULL, 'AR', 'Neuquén', 'Neuquén', 'Avenida Argentina 808', 'Casa de 2 pisos, con puerta gris'),
(NULL, 'AR', 'Chubut', 'Comodoro Rivadavia', 'Rivadavia 909', 'Casa de 2 pisos, con puerta gris'),
(NULL, 'AR', 'San Luis', 'San Luis', 'Avenida España 1010', 'Casa de 2 pisos, con puerta gris'),
(NULL, 'AR', 'Río Negro', 'Bariloche', 'Avenida Bustillo 1111', 'Casa de 2 pisos, con puerta gris'),
(NULL, 'AR', 'Corrientes', 'Corrientes', 'Avenida 3 de Abril 1212', 'Casa de 2 pisos, con puerta gris'),
(NULL, 'AR', 'Chaco', 'Resistencia', 'Avenida Sarmiento 1313', 'Casa de 2 pisos, con puerta gris');

-- Usuario - Vendedor

INSERT INTO `flashfood`.`commerces` (`name`, `email`, `password`, `token`, `idRole`, `idLocation`, `image`, `coverImage`, `phone`, `createdAt`, `updatedAt`) VALUES
('La Pizzería', 'pizzeria@gmail.com', '$2a$10$fGPJEl5Twzz.eySDoWUFpeOgZB6yNlRGpbVltGt5/MBQMgHXGSrFu', NULL, 1, 9, 'pizzeria.jpg', 'coverImage.jpg', 1134562789, NOW(), NOW()),
('El Rincón Mexicano', 'rincon.mexicano@gmail.com', '$2a$10$fGPJEl5Twzz.eySDoWUFpeOgZB6yNlRGpbVltGt5/MBQMgHXGSrFu', NULL, 1, 10, 'mexicano.jpg', 'coverImage.jpg', 1134562789, NOW(), NOW()),
('Sushi House', 'sushi.house@gmail.com', '$2a$10$fGPJEl5Twzz.eySDoWUFpeOgZB6yNlRGpbVltGt5/MBQMgHXGSrFu', NULL, 1, 11, 'sushi.jpg', 'coverImage.jpg', 1134562789, NOW(), NOW()),
('Panadería Delicias', 'panaderia.delicias@gmail.com', '$2a$10$fGPJEl5Twzz.eySDoWUFpeOgZB6yNlRGpbVltGt5/MBQMgHXGSrFu', NULL, 1, 12, 'panaderia.jpg', 'coverImage.jpg', 1134562789, NOW(), NOW()),
('La Parrilla', 'parrilla@gmail.com', '$2a$10$fGPJEl5Twzz.eySDoWUFpeOgZB6yNlRGpbVltGt5/MBQMgHXGSrFu', NULL, 1, 13, 'parrilla.jpg', 'coverImage.jpg', 1134562789, NOW(), NOW()),
('Burger King', 'burger.king@gmail.com', '$2a$10$fGPJEl5Twzz.eySDoWUFpeOgZB6yNlRGpbVltGt5/MBQMgHXGSrFu', NULL, 1, 14, 'burgerking.jpg', 'coverImage.jpg', 1134562789, NOW(), NOW()),
('Los Mariscos', 'mariscos@gmail.com', '$2a$10$fGPJEl5Twzz.eySDoWUFpeOgZB6yNlRGpbVltGt5/MBQMgHXGSrFu', NULL, 1, 15, 'mariscos.jpg', 'coverImage.jpg', 1134562789, NOW(), NOW()),
('Pasta Italia', 'pasta.italia@gmail.com', '$2a$10$fGPJEl5Twzz.eySDoWUFpeOgZB6yNlRGpbVltGt5/MBQMgHXGSrFu', NULL, 1, 16, 'pastaitalia.jpg', 'coverImage.jpg', 1134562789, NOW(), NOW());

-- Producto

INSERT INTO `flashfood`.`products` (`name`, `idCategory`, `idCommerce`, `description`, `price`, `available`, `image`, `createdAt`, `updatedAt`) VALUES
('Pizza Margherita', 1, 3, 'Pizza con tomate, mozzarella y albahaca.', 12, 20, '03_pizza.jpg', NOW(), NOW()),
('Burrito de Carne', 2, 3, 'Burrito de carne asada con guacamole.', 10, 15, '03_burrito.jpg', NOW(), NOW()),
('Nigiri de Salmón', 3, 3, 'Nigiri de salmón fresco sobre arroz.', 8, 30, '03_nigiri.jpg', NOW(), NOW()),
('Croissants', 4, 4, 'Croissants recién horneados.', 3, 50, '04_croissants.jpg', NOW(), NOW()),
('Choripán', 5, 4, 'Choripán con chimichurri.', 6, 25, '04_choripan.jpg', NOW(), NOW()),
('Hamburguesa Clásica', 6, 2, 'Hamburguesa con carne de res, lechuga, tomate y queso.', 9, 40, '02_hamburguesa.jpg', NOW(), NOW()),
('Ceviche de Pescado', 7, 2, 'Ceviche de pescado fresco con limón y cebolla.', 15, 10, '02_ceviche.jpg', NOW(), NOW()),
('Pasta Carbonara', 8, 7, 'Pasta con crema, huevo, panceta y queso.', 11, 15, '07_pasta.jpg', NOW(), NOW()),
('Pizza Pepperoni', 1, 8, 'Pizza con pepperoni y queso mozzarella.', 14, 25, '08_pizza.jpg', NOW(), NOW()),
('Tacos al Pastor', 2, 8, 'Tacos de cerdo marinado con piña.', 7, 35, '08_tacos.jpg', NOW(), NOW()),
('Sashimi de Atún', 3, 6, 'Sashimi de atún rojo fresco.', 13, 20, '06_sashimi.jpg', NOW(), NOW()),
('Panes Dulces', 4, 2, 'Variedad de panes dulces recién horneados.', 4, 45, '02_pan.jpg', NOW(), NOW()),
('Ensalada César', 9, 3, 'Ensalada César con pollo, parmesano y aderezo.', 7, 20, '03_ensalada.jpg', NOW(), NOW()),
('Chiles Rellenos', 10, 9, 'Chiles rellenos de queso y carne.', 9, 25, '09_chiles.jpg', NOW(), NOW()),
('Ramen de Pollo', 11, 2, 'Ramen con caldo de pollo y verduras.', 12, 30, '02_ramen.jpg', NOW(), NOW()),
('Pastel de Chocolate', 12, 3, 'Pastel de chocolate con glaseado.', 6, 15, '03_pastel.jpg', NOW(), NOW()),
('Asado de Tira', 13, 4, 'Asado de tira de res a la parrilla.', 18, 10, '04_asado.jpg', NOW(), NOW()),
('Pollo Frito', 14, 5, 'Pollo frito crujiente con especias.', 10, 40, '05_pollo.jpg', NOW(), NOW()),
('Pasta Alfredo', 15, 6, 'Pasta con salsa Alfredo cremosa.', 11, 25, '06_pasta.jpg', NOW(), NOW()),
('Pizza Hawaiana', 1, 7, 'Pizza con jamón, piña y queso mozzarella.', 13, 35, '07_pizza.jpg', NOW(), NOW()),
('Empanadas de Carne', 16, 9, 'Empanadas de carne con especias.', 4, 30, '09_empanada.jpg', NOW(), NOW()),
('Pozole', 10, 2, 'Pozole con maíz y carne de cerdo.', 8, 20, '02_pozole.jpg', NOW(), NOW()),
('Tempura de Verduras', 17, 2, 'Verduras en tempura crujientes.', 7, 30, '02_tempura.jpg', NOW(), NOW()),
('Muffins de Arándanos', 12, 3, 'Muffins de arándanos recién horneados.', 5, 40, '03_muffins.jpg', NOW(), NOW());

-- Favoritos

INSERT INTO `flashfood`.`favorites` (`idCustomer`, `idCommerce`) VALUES
(9, 2), (9, 2), (9, 9),
(7, 3), (10, 3), (10, 9),
(3, 4), (3, 4),
(4, 5), (4, 5),
(5, 6), (5, 6),
(6, 7), (6, 7),
(7, 8), (7, 8),
(8, 5), (8, 4);

-- Ordenes

INSERT INTO `flashfood`.`orders` (`idCustomer`, `idState`, `finalPrice`, `createdAt`, `updatedAt`) VALUES
(10, 1, 35, NOW(), NOW()),
(9, 2, 50, NOW(), NOW()),
(3, 3, 40, NOW(), NOW()),
(4, 1, 30, NOW(), NOW()),
(5, 2, 55, NOW(), NOW()),
(6, 3, 60, NOW(), NOW()),
(7, 1, 45, NOW(), NOW()),
(8, 2, 50, NOW(), NOW()),
(10, 3, 65, NOW(), NOW()),
(9, 1, 70, NOW(), NOW()),
(3, 2, 80, NOW(), NOW()),
(4, 3, 75, NOW(), NOW());

-- Detalle de orden

INSERT INTO `flashfood`.`orderdetails` (`idOrder`, `idProduct`, `quantity`, `unitPrice`) VALUES
(1, 1, 2, 20), (1, 2, 1, 15),
(2, 3, 3, 30), (2, 4, 2, 25),
(3, 5, 1, 35), (3, 6, 2, 18),
(4, 7, 1, 15), (4, 8, 3, 10),
(5, 9, 2, 50), (5, 10, 1, 60),
(6, 11, 2, 45), (6, 12, 1, 40),
(7, 1, 2, 20), (7, 2, 2, 15),
(8, 3, 3, 30), (8, 4, 2, 25),
(9, 5, 1, 35), (9, 6, 2, 18),
(10, 7, 1, 15), (10, 8, 3, 10),
(11, 9, 2, 50), (11, 10, 1, 60),
(12, 11, 2, 45), (12, 12, 1, 40), (12, 1, 3, 20), (12, 2, 2, 15);

-- Review

INSERT INTO `flashfood`.`reviews` (`idCustomer`, `idCommerce`, `comment`, `score`, `createdAt`, `updatedAt`) VALUES
(10, 2, 'Excelente servicio y comida deliciosa.', 5, NOW(), NOW()),
(9, 3, 'Buen ambiente, pero la comida podría mejorar.', 3, NOW(), NOW()),
(3, 3, 'Increíble comida y atención al cliente.', 5, NOW(), NOW()),
(4, 4, 'El lugar es agradable, pero el servicio es lento.', 2, NOW(), NOW()),
(5, 4, 'Gran experiencia, los platos son exquisitos.', 4, NOW(), NOW()),
(6, 5, 'Servicio rápido y comida deliciosa.', 4, NOW(), NOW()),
(7, 6, 'La comida es muy buena, pero el local estaba muy lleno.', 3, NOW(), NOW()),
(8, 7, 'Excelente relación calidad-precio.', 5, NOW(), NOW()),
(10, 8, 'El servicio podría mejorar, pero la comida es buena.', 3, NOW(), NOW()),
(9, 9, 'La atención al cliente es excelente.', 5, NOW(), NOW()),
(3, 8, 'Comida deliciosa y buen ambiente.', 4, NOW(), NOW()),
(4, 5, 'Un lugar agradable con un buen menú.', 4, NOW(), NOW());

-- Horarios

-- Horarios para el Local 2 (ID: 2)
INSERT INTO `flashfood`.`schedules` (idDay, idCommerce, open, opening, close) VALUES
(1, 2, 1, '09:00:00', '17:00:00'), -- Lunes
(2, 2, 1, '09:00:00', '17:00:00'), -- Martes
(3, 2, 1, '09:00:00', '17:00:00'), -- Miércoles
(4, 2, 1, '09:00:00', '17:00:00'), -- Jueves
(5, 2, 1, '09:00:00', '17:00:00'), -- Viernes
(6, 2, 1, '09:00:00', '17:00:00'), -- Sábado
(7, 2, 0, NULL, NULL),           -- Domingo (cerrado)

-- Horarios para el Local 3 (ID: 3)
(1, 3, 1, '08:30:00', '18:00:00'), -- Lunes
(2, 3, 1, '08:30:00', '18:00:00'), -- Martes
(3, 3, 1, '08:30:00', '18:00:00'), -- Miércoles
(4, 3, 1, '08:30:00', '18:00:00'), -- Jueves
(5, 3, 1, '08:30:00', '18:00:00'), -- Viernes
(6, 3, 1, '08:30:00', '18:00:00'), -- Sábado
(7, 3, 0, NULL, NULL),

-- Horarios para el Local 4 (ID: 4)
(1, 4, 1, '08:30:00', '18:00:00'), -- Lunes
(2, 4, 1, '08:30:00', '18:00:00'), -- Martes
(3, 4, 1, '08:30:00', '18:00:00'), -- Miércoles
(4, 4, 1, '08:30:00', '18:00:00'), -- Jueves
(5, 4, 1, '08:30:00', '18:00:00'), -- Viernes
(6, 4, 0, NULL, NULL), -- Sábado
(7, 4, 0, NULL, NULL),

-- Horarios para el Local 5 (ID: 5)
(1, 5, 1, '09:00:00', '17:00:00'), -- Lunes
(2, 5, 1, '09:00:00', '17:00:00'), -- Martes
(3, 5, 1, '09:00:00', '17:00:00'), -- Miércoles
(4, 5, 1, '09:00:00', '17:00:00'), -- Jueves
(5, 5, 1, '09:00:00', '17:00:00'), -- Viernes
(6, 5, 1, '09:00:00', '17:00:00'), -- Sábado
(7, 5, 0, NULL, NULL),          -- Domingo (cerrado)

-- Horarios para el Local 6 (ID: 6)
(1, 6, 1, '08:30:00', '18:00:00'), -- Lunes
(2, 6, 1, '08:30:00', '18:00:00'), -- Martes
(3, 6, 1, '08:30:00', '18:00:00'), -- Miércoles
(4, 6, 1, '08:30:00', '18:00:00'), -- Jueves
(5, 6, 1, '08:30:00', '18:00:00'), -- Viernes
(6, 6, 1, '08:30:00', '18:00:00'), -- Sábado
(7, 6, 0, NULL, NULL),

-- Horarios para el Local 7 (ID: 7)
(1, 7, 1, '08:30:00', '18:00:00'), -- Lunes
(2, 7, 1, '08:30:00', '18:00:00'), -- Martes
(3, 7, 1, '08:30:00', '18:00:00'), -- Miércoles
(4, 7, 1, '08:30:00', '18:00:00'), -- Jueves
(5, 7, 1, '08:30:00', '18:00:00'), -- Viernes
(6, 7, 0, NULL, NULL), -- Sábado
(7, 7, 0, NULL, NULL),

-- Horarios para el Local 8 (ID: 8)
(1, 8, 1, '08:30:00', '18:00:00'), -- Lunes
(2, 8, 1, '08:30:00', '18:00:00'), -- Martes
(3, 8, 1, '08:30:00', '18:00:00'), -- Miércoles
(4, 8, 1, '08:30:00', '18:00:00'), -- Jueves
(5, 8, 1, '08:30:00', '18:00:00'), -- Viernes
(6, 8, 1, '08:30:00', '18:00:00'), -- Sábado
(7, 8, 0, NULL, NULL),

-- Horarios para el Local 9 (ID: 9)
(1, 9, 1, '08:30:00', '18:00:00'), -- Lunes
(2, 9, 1, '08:30:00', '18:00:00'), -- Martes
(3, 9, 1, '08:30:00', '18:00:00'), -- Miércoles
(4, 9, 1, '08:30:00', '18:00:00'), -- Jueves
(5, 9, 1, '08:30:00', '18:00:00'), -- Viernes
(6, 9, 0, NULL, NULL), -- Sábado
(7, 9, 0, NULL, NULL); 