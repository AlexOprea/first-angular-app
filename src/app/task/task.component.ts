import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task} from './task.model';
import { DatePipe } from '@angular/common';
import { TaskService } from '../app-task/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})


export class TaskComponent implements OnInit {

  constructor(taskService : TaskService) { 
    this.taskService = taskService;
  }

  @Input() task!:Task;
  private taskService : TaskService;

  ngOnInit() {
  }
  


  completeTask():void{
    this.taskService.removeTask(this.task.id);
  }
}
