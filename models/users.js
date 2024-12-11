// El modelo trae los datos de la DB de la tabla users

// #1 traer la configuración del entorno de knex y su información de la base de datos
const knex = require('../config')

// #2 Crear funciones que permitan interactuar con la tabla users

// CRUD
// CREATE
// Crear un nuevo usuario
const create = (bodyUser) => {
  return knex
    .insert(bodyUser) // Qué datos voy a insertar
    .into('users') // En qué tabla
    .returning(['user_id', 'first_name', 'last_name', 'email', 'phone',
      'role', 'created_at', 'updated_at', 'licence', 'years_experience']) // Qué datos voy a retornar
}
// READ
// UPDATE
// DELETE

// #3 Exportar las funciones para que sean accesibles desde el controlador
exports.create = create