import { Controller, Post, Get, Put, Delete, Body, Headers } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ){}

    @Post('login')
    createUser(@Body() loginDto: LoginDto){
        return this.authService.createUser(loginDto)
    }

    
}
