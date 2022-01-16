import { IsEmail, IsAlphanumeric, IsEnum, IsString, IsPhoneNumber } from 'class-validator';


enum UserType {
    personal ="personal",
    business= "business"
}

export class CreateUserDTO {

   @IsEmail() 
    email : String;
    
    @IsAlphanumeric()
    username : String;
    
    @IsString()
    @IsEnum(UserType)
    usertype : UserType;

    @IsString()
    password : String;

    @IsString()
    @IsPhoneNumber("IN")
    phonenumber : String;

    @IsString()
    GSTnumber : String;

    @IsString()
    address: String;

}