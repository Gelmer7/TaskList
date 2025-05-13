import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { DogService } from '../../services/dog.service';
import { DogBreed } from '../../models/dog-api-response.model';

@Component({
  selector: 'app-dog-list',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {
  dogs: any[] = [];
  loading = true;
  error = false;

  constructor(private dogService: DogService) {}

  ngOnInit(): void {
    this.loadBreeds();
  }

  loadBreeds(): void {
    this.loading = true;
    this.error = false;
    
    this.dogService.getBreeds().subscribe({
      next: (breeds) => {
        this.dogs = breeds.map(breed => this.dogService.mapBreedToDisplayFormat(breed));
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar las razas de perros:', err);
        this.error = true;
        this.loading = false;
      }
    });
  }
}