// eslint-disable-next-line no-unused-vars
import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo Nome precisa ter de 3 a 255 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'Email inválido',
          },
        },
      },
      // o que criamos pra mandar a base de dados a partir da senha do user
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      // recebemos do usuario
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'A senha precisa ter entre 6 a 50 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });// o super chama o init do pai o Model

    this.addHook('beforeSave', async user => {
      if (user.password) { // se a senha for mandada faça isso
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });

    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}
