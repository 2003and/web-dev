import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RoleEntity } from './entities/role.entity';
import { Repository } from 'typeorm';
export declare class RoleService {
    private roleRepository;
    constructor(roleRepository: Repository<RoleEntity>);
    create(dto: CreateRoleDto): Promise<{
        name: string;
    } & RoleEntity>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateRoleDto: UpdateRoleDto): string;
    remove(id: number): string;
}
