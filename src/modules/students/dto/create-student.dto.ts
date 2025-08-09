import { IsString, IsEmail, IsDateString } from 'class-validator';

export class CreateStudentDto {
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    className: string;

    @IsDateString()
    dob: string;
}
