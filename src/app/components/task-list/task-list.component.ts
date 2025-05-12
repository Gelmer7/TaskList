import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskFormComponent } from '../task-form/task-form.component';
import { MaterialModule } from '../../material.module';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskItemComponent, TaskFormComponent, MaterialModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  selectedTask: Task | null = null;
  
  constructor(
    private taskService: TaskService,
    private snackBar: MatSnackBar
  ) {}
  
  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }
  
  onAddTask(task: Omit<Task, 'id' | 'createdAt'>): void {
    this.taskService.addTask(task);
    this.selectedTask = null;
    this.snackBar.open('Tarefa adicionada com sucesso!', 'Fechar', {
      duration: 3000
    });
  }
  
  onEditTask(task: Task): void {
    this.selectedTask = task;
  }
  
  onUpdateTask(task: Task): void {
    this.taskService.updateTask(task);
    this.selectedTask = null;
    this.snackBar.open('Tarefa atualizada com sucesso!', 'Fechar', {
      duration: 3000
    });
  }
  
  onDeleteTask(id: number): void {
    this.taskService.deleteTask(id);
    if (this.selectedTask?.id === id) {
      this.selectedTask = null;
    }
    this.snackBar.open('Tarefa excluída com sucesso!', 'Fechar', {
      duration: 3000
    });
  }
  
  onToggleCompletion(id: number): void {
    this.taskService.toggleTaskCompletion(id);
  }
  
  cancelEdit(): void {
    this.selectedTask = null;
  }
}