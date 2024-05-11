import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  TaskRepository: any;
  create(createTaskDto: CreateTaskDto) {
    return this.TaskRepository.save(createTaskDto);
  }

  findAll() {
    return this.TaskRepository.find();
  }

  findOne(id: number) {
    return this.TaskRepository.findOne({
      where: {
        id
      }
    });
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.TaskRepository.update({id}, updateTaskDto);
  }

  remove(id: number) {
    return this.TaskRepository.delete({id});
  }
}
