import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { RoleEntity } from './entities/role.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [RoleController],
  providers: [RoleService],
  imports: [ConfigModule, TypeOrmModule.forFeature([RoleEntity])],
})
export class RoleModule {}
