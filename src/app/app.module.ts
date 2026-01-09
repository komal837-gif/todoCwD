import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoDashboardComponent } from './shared/components/todo-dashboard/todo-dashboard.component';
import { TodoFormComponent } from './shared/components/todo-form/todo-form.component';
import { TodoListComponent } from './shared/components/todo-list/todo-list.component';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatDialogModule} from '@angular/material/dialog';
import { GetConfirmComponent } from './shared/components/get-confirm/get-confirm.component'
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoFormComponent,
    TodoListComponent,
    GetConfirmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
