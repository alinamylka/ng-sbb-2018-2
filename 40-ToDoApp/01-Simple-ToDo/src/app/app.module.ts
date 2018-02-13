import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './todos/components/overview.component';
import {ToDoService} from './todos/model/todo.service';
import {TodoListComponent} from './todos/components/todolist.component';
import {NewToDoComponent} from './todos/components/newtodo.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    NewToDoComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
