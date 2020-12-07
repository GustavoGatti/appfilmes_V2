import { Component, OnInit } from '@angular/core';
import { DiretorModel } from './shared/diretores.model';
import { DiretoresService } from './shared/diretores.service';

@Component({
  selector: 'app-diretores',
  templateUrl: './diretores.component.html',
  styleUrls: ['./diretores.component.css']
})
export class DiretoresComponent implements OnInit {
  diretores: Array<DiretorModel>;
  diretor: DiretorModel;

  constructor(
    private diretoresService: DiretoresService
    ) {
      
    }

  ngOnInit(): void {
    this.listarDiretores();
  }

  listarDiretores() {
    this.diretoresService.get().subscribe(_diretore => {
      this.diretores = _diretore;
      console.log(this.diretores);
    },
    error => {
      alert('Ocorreu algum erro ao buscar os dados!\n' + error);
    });
  }

  DeletarDiretor(id: number) {
    this.diretoresService.delete(id).subscribe(_data => {
      this.listarDiretores();
      alert('Deletado com sucesso!');
    },
    error => {
      alert('Erro ao deletar!\n' + error);
    });
  }

  EditarDiretor(id: number) {
    this.diretoresService.get(id).subscribe(_diretor => {
      console.log(_diretor);
    });
  }

}
