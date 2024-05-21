import { ApiProperty } from '@nestjs/swagger';
import { RoleEntity } from 'src/role/entities/role.entity';

export class CreateUserDto {
  @ApiProperty({ default: 'name1' })
  username: string;

  @ApiProperty({ default: '123' })
  password: string;

  roleID: number = 1;
}
