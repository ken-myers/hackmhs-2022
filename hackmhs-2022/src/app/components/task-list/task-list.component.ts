import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../shared/services/user';
import { Task } from 'src/app/models/task';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] =[];
  @Input() user!: User;
  constructor() {

  }

  ngOnInit(): void {
    console.log(this.user);
    let t= this.user.todoList;
    if (t){
      this.tasks = t;
    }
  }

}
