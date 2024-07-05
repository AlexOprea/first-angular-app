import { NgModule } from "@angular/core";
import { AppTaskComponent } from './app-task.component';
import { TaskComponent } from '../task/task.component';
import { NewTaskComponent } from '../new-task/new-task.component';
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [AppTaskComponent, TaskComponent, NewTaskComponent],
    exports: [AppTaskComponent],
    imports: [SharedModule, CommonModule, FormsModule]
})
export class TaskModule {}