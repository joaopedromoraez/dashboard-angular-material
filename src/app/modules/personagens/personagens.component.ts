import { Component, OnInit } from '@angular/core';
import { StarWarsApiService } from 'src/app/services/star-wars-api.service'

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.scss']
})
export class PersonagensComponent implements OnInit {

  personagens;

  constructor(private starWarsApiService: StarWarsApiService) { }

  ngOnInit() {
    this.starWarsApiService.listarPersonagens()
      .subscribe(resposta => {
        this.personagens = resposta["results"];
        console.log(this.personagens);
      },
        error => {
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
