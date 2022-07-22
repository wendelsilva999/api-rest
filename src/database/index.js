import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

// todo model que criarmos vai ter que vir dentro desse arquivo aqui
import Aluno from '../models/Aluno';
import User from '../models/User';
import Foto from '../models/Foto';

// vamos criar um array contendo todos os nosso models
const models = [Aluno, User, Foto];
const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
