import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { RoleEntity } from 'src/role/entities/role.entity';
export declare class UsersService {
    private repository;
    private roleRepository;
    constructor(repository: Repository<UserEntity>, roleRepository: Repository<RoleEntity>);
    create(dto: CreateUserDto): Promise<UserEntity>;
    findByUsername(username: string): Promise<UserEntity>;
    findById(id: number): Promise<UserEntity>;
}
