import { Component } from '@angular/core';
import {CommandService} from './command.service'

@Component({
  selector: 'rmmc-app',
  templateUrl: 'app/app.component.html',
  providers: [CommandService]
})
export class AppComponent  {
  name = 'Robo';
  private data: any;
  constructor(private commandService: CommandService) {
    this.commandService.getAll().then(data => {
      this.data = data && JSON.stringify(data);
    });
  }
}
