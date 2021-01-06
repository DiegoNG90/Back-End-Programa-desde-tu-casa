/*CREATE TABLE t_alumnos(
    id INT,
    nombre VARCHAR(30),
    apellido VARCHAR(30),
    email VARCHAR (45),
    telefono VARCHAR (15),
    curso VARCHAR (30)
)
INSERT INTO t_alumnos(
    id, nombre, apellido, email, telefono, curso
)
VALUES
    (1, "Brenda", "Lopez", "brenda@live.com", "655-330-5736", "React"),
    (2, "Oscar", "Chas", "oscar@gmail.com", "655-143-4181", "NodeJS"),
    (3, "Jose", "Franco", "franco@gmail.com", "655-143-3922", "NodeJS"),
    (4, "Luis", "Quenn", "quenn@outlook.com", "655-137-1279", "React"),
    (5, "Sandra", "Colman", "sandra@hotmail.com", "655-100-8260", "VueJS"),
    (6, "Daniela", "Agreda", "daniela@gmail.com", "655-145-2586", "NodeJS");
*/

SELECT nombre, apellido 
FROM t_alumnos;
/* SELECT COUNT(nombre) AS NumberOfProducts FROM Products;*/
