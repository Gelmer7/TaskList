import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule, MaterialModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  menuItems = [
    { path: '/tarefas', label: 'Gerenciador de Tarefas', icon: 'task' },
    { path: '/cachorros', label: 'Lista de Cachorros', icon: 'pets' }
  ];
}