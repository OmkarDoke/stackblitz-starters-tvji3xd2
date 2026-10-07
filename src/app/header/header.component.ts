import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  // template: '<h1>Hello Angular via template</h1>',
  // styleUrl: './header.component.css', // OR
  styleUrls: ['./header.component.css'],
  // styles:['h1 {color:black}']
})
export class HeaderComponent {}

//   Multiple styling files user array
// inline style approch not recomended
// inline template also possible
