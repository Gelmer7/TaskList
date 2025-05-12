import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task.model';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MaterialModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnChanges {
  @Input() task: Task | null = null;
  @Output() addTask = new EventEmitter<Omit<Task, 'id' | 'createdAt'>>();
  @Output() updateTask = new EventEmitter<Task>();
  @Output() cancelEdit = new EventEmitter<void>();
  
  formTitle = '';
  formDescription = '';
  isEditing = false;
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['task'] && this.task) {
      this.formTitle = this.task.title;
      this.formDescription = this.task.description || '';
      this.isEditing = true;
    } else if (changes['task'] && !this.task) {
      this.resetForm();
    }
  }
  
  onSubmit(): void {
    if (!this.formTitle.trim()) {
      alert('O título da tarefa é obrigatório!');
      return;
    }
    
    if (this.isEditing && this.task) {
      this.updateTask.emit({
        ...this.task,
        title: this.formTitle,
        description: this.formDescription || undefined
      });
    } else {
      this.addTask.emit({
        title: this.formTitle,
        description: this.formDescription || undefined,
        completed: false
      });
    }
    
    this.resetForm();
  }
  
  onCancel(): void {
    this.cancelEdit.emit();
    this.resetForm();
  }
  
  private resetForm(): void {
    this.formTitle = '';
    this.formDescription = '';
    this.isEditing = false;
  }
}