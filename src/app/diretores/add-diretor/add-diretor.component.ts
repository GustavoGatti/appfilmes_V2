import { Component, OnInit } from '@angular/core';
import { DiretoresComponent } from '../diretores.component';
import { DiretorModel } from '../shared/diretores.model';
import { DiretoresService } from '../shared/diretores.service';

@Component({
  selector: 'app-add-diretor',
  templateUrl: './add-diretor.component.html',
  styleUrls: ['./add-diretor.component.css']
})
export class AddDiretorComponent implements OnInit {
  
  diretor: DiretorModel = new DiretorModel();
  
  constructor(private diretoresService: DiretoresService, private diretorComponent: DiretoresComponent) { }

  ngOnInit(): void {
  }

  SalvarDiretor() {
    console.log(this.diretor);
    this.diretoresService.post(this.diretor).subscribe(_diretor => {
      alert('Salvo!');
      this.diretorComponent.listarDiretores();
    },
    error => {
      alert('Erro ao salvar!');
    });
  }
}
