import { IsEmail, IsNotEmpty, MaxLength, MinLength, minLength } from "class-validator";

export class CreateUserDto {
    @IsEmail({},
        {
            message:'formato de email invalido'
        })
  email: string
  @MinLength(10,{
    message:'minimo 10 caracteres'
  })
  @MaxLength(10,{
    message: 'Maximo de 10 caracteres'
  })
  firstName: string;
  @IsNotEmpty()
  lastName: string;
}
