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

  tasks: Task[] = [
    new Task("Set up your laptop", true),
    new Task("Configure your RapidIdentity", false),
    new Task("Get badged", false),
    new Task("Onboarding paperwork", false),
    new Task("Review schedule", false)
  ];
  @Input() user!: User;
  constructor() {

  }

  ngOnInit(): void {
    console.log(this.user);
    let t = this.user.todoList;
    if (t) {
      this.tasks = t;
    }
  }

}
