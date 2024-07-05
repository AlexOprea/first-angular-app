import { Component, OnInit, Input, Output, EventEmitter, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TaskService } from '../app-task/tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  @Input() shouldDisplay!: boolean;
  @Output() close = new EventEmitter<void>();
  @Input() userId!:string;
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private taskService : TaskService;
  constructor(taskService : TaskService) {
    this.taskService = taskService;
   }

  ngOnInit() {
  }

  onCancel(): void{
    this.close.emit();
  }

  onSubmit() :void{
    this.taskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    },
  this.userId);
  this.close.emit();
  }
  
}
