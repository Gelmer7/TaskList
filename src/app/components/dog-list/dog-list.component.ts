import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-dog-list',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent {
  dogs = [
    { id: 1, name: 'Rex', breed: 'Pastor Alemão', age: 3 },
    { id: 2, name: 'Luna', breed: 'Labrador', age: 2 },
    { id: 3, name: 'Thor', breed: 'Golden Retriever', age: 4 },
    { id: 4, name: 'Bella', breed: 'Bulldog', age: 1 }
  ];
}