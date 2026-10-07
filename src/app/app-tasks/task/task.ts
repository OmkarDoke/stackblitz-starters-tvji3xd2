import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { type TaskInterface } from './task.model';
import { AppCard } from '../../shared/card/card';
import { TaskService } from '../task-service';

@Component({
  selector: 'app-task',
  imports: [AppCard],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: TaskInterface;

  private taskService = inject(TaskService);

  onTaskComplete() {
    this.taskService.onCompleteTask(this.task.id);
  }
}
