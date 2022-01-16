import { IsString, IsAlphanumeric } from 'class-validator';

export class SigninDTO {

    @IsAlphanumeric()
     username : String;

     @IsString()
     password : String;
}