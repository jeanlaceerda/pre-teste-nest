import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";


@Injectable()
export class UserService{
    private users: User [] = []


    createUser (user: User): User{
        const newId = this.user
    }
}