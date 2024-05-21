import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { RoleEntity } from 'src/role/entities/role.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
    @InjectRepository(RoleEntity)
    private roleRepository: Repository<RoleEntity>,
  ) {}

  async create(dto: CreateUserDto) {
    const existingUser = await this.findByUsername(dto.username);

    if (existingUser) {
      throw new BadRequestException(
        `Пользователь ${dto.username} уже существует`,
      );
    }
    const role = await this.roleRepository.findOneBy({ id: dto.roleID });
    const newUser = this.repository.create({
      username: dto.username,
      password: dto.password,
      role: role,
    });

    return this.repository.save(newUser);
  }

  async findByUsername(username: string) {
    return this.repository.findOneBy({ username: username });
  }

  async findById(id: number) {
    return this.repository.findOneBy({ id });
  }
}
