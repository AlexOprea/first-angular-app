import { Component, OnInit, Input, EventEmitter, Output, Inject } from '@angular/core';
import { NewTaskData } from '../task/task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './app-task.component.html',
  styleUrls: ['./app-task.component.scss']
})
export class AppTaskComponent implements OnInit {

  @Input() name:string | undefined;//union type! alternative to ? operator
  @Input() userId!:string;
  @Output() addTask = new EventEmitter();
  isAddingTask = false;
  private taskService: TaskService;
  

  constructor(taskService: TaskService) {
    this.taskService = taskService;
   }

  ngOnInit() {
  }

  get selectedUserTask(){
    return this.taskService.getUserTasks(this.userId);
  }

  createTask() : void {
    this.isAddingTask = true;
  }

  onCloseTask() : void{
    this.isAddingTask = false;
  }
}
