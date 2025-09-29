import { Injectable } from '@nestjs/common';

import { CreateRequestDto } from './dto/create-request.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class RequestsService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateRequestDto) {
    return this.prisma.request.create({ data: dto });
  }

  findAll() {
    return this.prisma.request.findMany({ orderBy: { createdAt: 'desc' } });
  }
}
