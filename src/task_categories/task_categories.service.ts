import { Injectable } from '@nestjs/common';
import { CreateTaskCategoryDto } from './dto/create-task_category.dto';
import { UpdateTaskCategoryDto } from './dto/update-task_category.dto';

@Injectable()
export class TaskCategoriesService {
  task_category: any;
  Task_categoryRepository: any;
  create(createTaskCategoryDto: CreateTaskCategoryDto) {
    return this.task_category.save(createTaskCategoryDto);
  }

  findAll() {
    return this.Task_categoryRepository.find();
  }

  findOne(id: number) {
    return this.Task_categoryRepository.findOne({
      where: {
        id
      }
    });
  }

  update(id: number, updateTaskCategoryDto: UpdateTaskCategoryDto) {
    return this.Task_categoryRepository.update({id}, updateTaskCategoryDto);
  }

  remove(id: number) {
    return this.Task_categoryRepository.delete({id});
  }
}
