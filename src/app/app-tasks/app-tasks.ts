import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Task } from './task/task';
import { AddTask } from './add-task/add-task';
import { TaskService } from './task-service';

@Component({
  selector: 'app-tasks',
  imports: [Task, AddTask],
  templateUrl: './app-tasks.html',
  styleUrl: './app-tasks.css',
})
export class AppTasks {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) userData!: {
    id: string;
    name: string;
    avatar: string;
  };

  showAddForm = false;

  constructor(private taskService: TaskService) {}

  get getUserTaskList() {
    return this.taskService.getUserTasks(this.userId);
  }

  onAddTaskClicked() {
    this.showAddForm = true;
  }

  onClosedHandeler() {
    this.showAddForm = false;
  }
}
