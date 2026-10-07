import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type addtask } from '../task/task.model';
import { TaskService } from '../task-service';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
  @Output() closeForm = new EventEmitter<void>();
  @Input({ required: true }) selectedUserId: string = '';
  constructor(private taskService: TaskService) {}

  title = '';
  summary = '';
  dueDate = '';

  onClosedHandeler() {
    console.log('Closed clickerd');
    this.closeForm.emit();
  }
  onSubmitHandler() {
    this.taskService.addTaskHandler({
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate,
      userId: this.selectedUserId,
      id: new Date().toDateString(),
    });
    this.closeForm.emit();
  }
}
