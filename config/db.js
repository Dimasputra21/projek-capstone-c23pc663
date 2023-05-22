// import { Sequelize } from "sequelize";
import mysql from 'mysql';
const db = mysql.createConnection({
    host: '34.128.95.248',
    user: 'root',
    database: 'authentication_db',
    password: 'dimas21032004'
});

export default db;
