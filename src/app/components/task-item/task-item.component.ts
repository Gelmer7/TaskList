import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() edit = new EventEmitter<Task>();
  @Output() delete = new EventEmitter<number>();
  @Output() toggleComplete = new EventEmitter<number>();
  
  onEdit(): void {
    this.edit.emit(this.task);
  }
  
  onDelete(): void {
    if (confirm('Tem certeza que deseja excluir esta tarefa?')) {
      this.delete.emit(this.task.id);
    }
  }
  
  onToggleComplete(): void {
    this.toggleComplete.emit(this.task.id);
  }
}