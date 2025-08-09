import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentsService {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateStudentDto) {
        return this.prisma.student.create({
            data: {
                ...data,
                dob: new Date(data.dob),// Convert string to Date object
            }
        })
    }

    findAll() {
        return this.prisma.student.findMany();
    }

    findOne(id: string) {
        return this.prisma.student.findUnique({ where: { id } });
    }

    remove(id: string) {
        return this.prisma.student.delete({ where: { id } });
    }
}
