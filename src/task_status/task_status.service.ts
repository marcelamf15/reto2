import { Injectable } from '@nestjs/common';
import { CreateTaskStatusDto } from './dto/create-task_status.dto';
import { UpdateTaskStatusDto } from './dto/update-task_status.dto';

@Injectable()
export class TaskStatusService {
  task_Status: any;
  Task_StatusRepository: any;
  create(createTaskStatusDto: CreateTaskStatusDto) {
    return this.task_Status.save(createTaskStatusDto);
  }

  findAll() {
    return this.Task_StatusRepository.find();
  }
  

  findOne(id: number) {
    return this.Task_StatusRepository.findOne({
      where: {
        id
      }
    });
  }

  update(id: number, updateTaskStatusDto: UpdateTaskStatusDto) {
    return this.Task_StatusRepository.update({id}, updateTaskStatusDto)
    }
  remove(id: number) {
    return this.Task_StatusRepository.delete({id});
  }
}
