import { Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { DogListComponent } from './components/dog-list/dog-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'tarefas', pathMatch: 'full' },
  { path: 'tarefas', component: TaskListComponent },
  { path: 'cachorros', component: DogListComponent },
  { path: '**', redirectTo: 'tarefas' }
];
