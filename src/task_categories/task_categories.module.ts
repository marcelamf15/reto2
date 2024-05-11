import { Module } from '@nestjs/common';
import { TaskCategoriesService } from './task_categories.service';
import { TaskCategoriesController } from './task_categories.controller';
import { task_catagory } from './entities/task_category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'marcela123',
      database: 'apicul',
      entities: [task_catagory],
      synchronize: true,
    }),

  ],
  controllers: [TaskCategoriesController],
  providers: [TaskCategoriesService],
})
export class TaskCategoriesModule {}
