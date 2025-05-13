import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { DogApiResponse, DogBreed } from '../models/dog-api-response.model';
import { BreedsAttributes } from '../models/breedsAttributes.model';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private apiUrl = 'https://dogapi.dog/api/v2/breeds';

  constructor(private http: HttpClient) { }

  getBreeds(): Observable<DogBreed[]> {
    return this.http.get<DogApiResponse>(this.apiUrl)
      .pipe(
        map(response => response.data)
      );
  }

  // Método para transformar DogBreed a un formato más simple para mostrar en la UI
  mapBreedToDisplayFormat(breed: DogBreed): any {
    return {
      id: breed.id,
      name: breed.attributes.name,
      description: breed.attributes.description,
      lifeExpectancy: `${breed.attributes.life.min}-${breed.attributes.life.max} años`,
      weight: `♂ ${breed.attributes.male_weight.min}-${breed.attributes.male_weight.max}kg | ♀ ${breed.attributes.female_weight.min}-${breed.attributes.female_weight.max}kg`,
      hypoallergenic: breed.attributes.hypoallergenic ? 'Sí' : 'No'
    };
  }
}