/*2.1) SELECT nombre, apellido
FROM t_alumnos; */
/*2.2)
SELECT COUNT(nombre) AS CantidadDeAlumnos FROM t_alumnos; */

/*2.3)
SELECT email
FROM t_alumnos
WHERE email LIKE '%gmail%';
*/
/*2.4)
SELECT nombre, apellido, telefono
FROM t_alumnos
WHERE curso <> "VueJS";
*/
/*3.1) 

DELETE FROM t_alumnos WHERE nombre = "Daniela" AND apellido = "Agreda";


UPDATE t_alumnos
SET curso = "NodeJS"
WHERE id = 5;
*/

SELECT *
FROM t_alumnos;