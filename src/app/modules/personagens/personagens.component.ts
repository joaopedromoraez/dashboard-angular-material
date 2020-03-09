import { Component, OnInit, ViewChild } from '@angular/core';
import { StarWarsApiService } from 'src/app/services/star-wars-api.service'
import { Personagem } from 'src/app/models/personagem.model'
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.scss']
})
export class PersonagensComponent implements OnInit {

  isLoadingResults: boolean = false;
  personagens = new MatTableDataSource<Personagem>();
  total_personagens: number;
  displayedColumns: string[] = [
    'name',
    'height',
    'mass',
    'hair_color',
    'skin_color',
    'eye_color',
    'birth_year',
    'gender'
  ];

  constructor(private starWarsApiService: StarWarsApiService) { }

  ngOnInit() {
    this.listarPersonagens(1);
  }

  page(event){
    console.log(event);
    this.listarPersonagens(event.pageIndex + 1)
  }

  listarPersonagens(pagina){
    this.isLoadingResults = true;
    this.starWarsApiService.listarPersonagens(pagina)
    .subscribe(resposta => {
      this.personagens.data = resposta["results"];
      this.total_personagens = resposta["count"];
      this.isLoadingResults = false;
      console.log(this.personagens);
    },
      error => {
      this.isLoadingResults = false;
        switch (error.status) {
          case 401: alert(`${error.status}: ${error.error}`); break;
          case 402: alert(`${error.status}: ${error.error}`); break;
          case 403: alert(`${error.status}: ${error.error}`); break;
          case 404: alert(`${error.status}: ${error.error}`); break;
          case 406: alert(`${error.status}: ${error.error}`); break;
          case 422: alert(`${error.status}: ${error.error}`); break;
          case 429: alert(`${error.status}: ${error.error}`); break;
          case 400: alert(`${error.status}: ${error.error}`); break;
          case 500: alert(`${error.status}: ${error.error}`); break;
        }
      });
  }

}
