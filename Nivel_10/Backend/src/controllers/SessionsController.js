const knex = require("../database/knex");
const AppError = require("../utils/AppError")
const { compare } = require("bcryptjs");

const authConfig = require("../config/auth");
const { sign } = require("jsonwebtoken")

class SessionController {
    async create(request, response) {
        const { email, password } = request.body;
        
        //Validação email
        const user = await knex("users").where({ email }).first();

        if(!user) {
            throw new AppError("E-mail e/ou senha incorretos", 401);
        }
        
        //Validação senha
        const passwordMatched = await compare(password, user.password);

        if(!passwordMatched) {
            throw new AppError("E-mail e/ou senha incorretos", 401);
        }

        //Geração do token JWT
        const { secret, expiresIn } = authConfig.jwt;
        const token = sign({}, secret, {
            subject: String(user.id),
            expiresIn
        })

        return response.json({ user, token });
    }
}

module.exports = SessionController;