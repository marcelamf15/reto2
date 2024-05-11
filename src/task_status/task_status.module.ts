import { Module } from '@nestjs/common';
import { TaskStatusService } from './task_status.service';
import { TaskStatusController } from './task_status.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task_Status } from './entities/task_status.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'marcela123',
      database: 'apicul',
      entities: [Task_Status],
      synchronize: true,
    }),

  ],
  controllers: [TaskStatusController],
  providers: [TaskStatusService],
})
export class TaskStatusModule {}
