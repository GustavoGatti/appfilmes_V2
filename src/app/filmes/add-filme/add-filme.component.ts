import { Component, OnInit } from '@angular/core';
import { FilmeModel } from './../shared/filme.model'

@Component({
  selector: 'app-add-filme',
  templateUrl: './add-filme.component.html',
  styleUrls: ['./add-filme.component.css']
})
export class AddFilmeComponent implements OnInit {
  
  filme: FilmeModel;
  constructor() { }

  ngOnInit(): void {
  }

}
