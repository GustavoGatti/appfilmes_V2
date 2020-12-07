import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { DiretorModel } from './diretores.model';

@Injectable({
  providedIn: 'root'
})
export class DiretoresService {
  
  url = environment.api + '/directors'

  constructor(private http: HttpClient) { }

  get(id: number = 0) : Observable<DiretorModel[]> {
    this.url = id === 0 ? this.url : this.url + '/' + id
    return this.http.get<DiretorModel[]>(this.url)
  }

  getById(id: number) : Observable<DiretorModel> {
    return this.http.get<DiretorModel>(this.url);
  }

  post(diretor: DiretorModel) {
    return this.http.post(this.url, diretor);
  }

  put(id: number, diretor: DiretorModel) {
    return this.http.put(this.url + '/' + id, diretor);
  }

  delete(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}

/*
 C REATE
 R EAD
 U PDATE
 D ELETE
 */
