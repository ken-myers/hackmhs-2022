import { ReturnStatement } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { User } from 'src/app/shared/services/user';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.sass']
})
export class ListAdminComponent implements OnInit {

  @Input() user!: User;
  orgCode: string = "";
  tasks: string[] = [];
  constructor(private teamService: TeamService) {

  }
  updateList(): void {
    this.teamService.getDefaultTodoItems(this.orgCode).subscribe((t) => {
      this.tasks = t;
    })
  }
  ngOnInit(): void {
    this.orgCode = this.user.org_code;
  }

  addTask(task: string): void {
    this.teamService.addDefaultTodoItem(this.orgCode, task).subscribe(() => { this.updateList(); });
  }

  deleteTask(task: string): void {
    this.teamService.deleteDefaultTodoItem(this.orgCode, task).subscribe(() => {
      this.updateList();
    });
    this.updateList()
  }

}
