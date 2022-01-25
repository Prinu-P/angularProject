import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';
import { TodosComponent } from './todo/todos/todos.component';

const routes: Routes = [

  { path: "", component: AppComponent },
  { path: "todos", component: TodosComponent },
  { path: "auth/login", component: LoginComponent },
  { path: "auth/register", component: SignupComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
