import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component'
import {HeaderComponent} from './header/header.component';
import {AppTasks} from './app-tasks/app-tasks';
import {User} from './user/user';


@NgModule({
    declarations:[
        AppComponent,HeaderComponent
    ],  // Module/ Non stand-alone  componets list
    bootstrap:[AppComponent],
    imports:[BrowserModule,User,AppTasks], // Standalone componets or modules list 

})

export class AppModule{}