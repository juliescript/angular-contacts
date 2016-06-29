import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Contact Manager';
  public contacts = CONTACTS;
}

export class Contact {
	id: number;
	name: string;
	email: string;
	// favourite: boolean;
}

const CONTACTS: Contact[] = [
  {id: 1, name: 'Teni', email: 'vteniente@itexico.net'},
  {id: 2, name: 'Perla', email: 'pfranco@itexico.net'},
  {id: 3, name: 'Sevilla', email: 'fsevilla@itexico.net'},
  {id: 4, name: 'Isra', email: 'igarcia@itexico.net'},
  {id: 5, name: 'Uriel', email: 'ucoria@itexico.net'},
  {id: 6, name: 'Braulio', email: 'blomeli@itexico.net'},
  {id: 7, name: 'Jonathan', email: 'jcasarrubias@itexico.net'},
  {id: 8, name: 'Javi', email: 'jsalazar@itexico.net'},
];
