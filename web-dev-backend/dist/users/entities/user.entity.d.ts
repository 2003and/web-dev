import { RoleEntity } from 'src/role/entities/role.entity';
export declare class UserEntity {
    id: number;
    username: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    role: RoleEntity;
}
