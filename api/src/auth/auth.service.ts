import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user/user.entity";
import { LoginDto } from "./dto/login.dto";
import * as jwt from "jsonwebtoken";


@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) { }

    async createUser(loginDto: LoginDto) {
        const { email, password } = loginDto
        const user = await this.userRepository.findOne({ where: { email } })

        if (!user || user.password !== password) {
            throw new Error('Invalid email or password.');
        }

        const token = this.gerarToken(user.id)

        return { message: 'Login sucessful', token };
    }

    private gerarToken(userId: number) {
        let payload = { userId }
        let secretKey = 'Your-key';
        let expiresIn = '2h';

        return jwt.sign(payload, secretKey, { expiresIn });
    }

    private getUserIdToken(token: string) {
        const secretKey = 'Your-key';
        
        try {
            const tokenDecoded = jwt.verify(token, secretKey) as { userId: number };
            return tokenDecoded.userId;
        } catch (error) {
            throw new Error('Invalid token');
        }
    }
}