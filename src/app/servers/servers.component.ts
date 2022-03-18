import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverCreated = false;
  allowNewServer = false;
  userNameEntered = false;
  serverCreationStatus = 'no server was created';
  serverName = '';
  userName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created Name is ' + this.serverName;
  }

  onUserNameEntered(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
    if (this.userName) {
      this.userNameEntered = true;
    } else {
      this.userNameEntered = false;
    }
  }
  resetUserName() {
    this.userName = '';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}