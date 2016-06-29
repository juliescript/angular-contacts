import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Contact Manager';
  contact: Contact = {
  	id: 1,
  	name: 'Teniente',
  	email: 'vteniente@itexico.net'
  }
}

export class Contact {
	id: number;
	name: string;
	email: string;
	// favourite: boolean;
}