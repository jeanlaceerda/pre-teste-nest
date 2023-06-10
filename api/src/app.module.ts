import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth/auth.controller';
import { UserController } from './auth/user/user.controller';
import { AuthService } from './auth/auth.service';
import { UserService } from './auth/user/user.service';
import { User } from './auth/user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port: 3307,
      username:'root',
      password:'',
      database:'atividadePreTest',
      entities:[User]
    }),
    TypeOrmModule.forFeature([User])
  ],
  controllers: [AppController, AuthController, UserController],
  providers: [AppService, AuthService, UserService],
})
export class AppModule {}
