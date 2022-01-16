import { Controller, Post, Get, Body } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create.user.dto'; 
import { SigninDTO } from './dtos/sigin.user.dto';


@Controller('auth')
export class UsersController {
        @Post('/signup')
        createUser (@Body() body :  CreateUserDTO) {
            console.log(body);
        }

        @Post('/signin')
        signin (@Body() body : SigninDTO) {
            console.log(body);
        }
}
