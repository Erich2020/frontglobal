import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/models/personas';
import { Respuesta } from 'src/app/models/respuesta';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'}),
  'Accept': '*/*',
  'Accept-Encoding': 'gzip, deflate, br',
  'Transfer-Encoding':'chunked'

}

@Injectable({ providedIn: 'root' })
export class PersonaRepo {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}
  
   
  // Method Get
  public async GetAll(): Promise<Observable<Respuesta<Array<Persona>>>> {
    return this.http.get<Respuesta<Array<Persona>>>(
      environment.ApiURL + environment.EndPoints.Personas.Consultar
    );
  }

  //Method Get{id}
  public async GetByIdNombre(value: string) {
    return this.http.get<Respuesta<Array<Persona>>>(
      environment.ApiURL + environment.EndPoints.Personas.ConsultaNombre + '/' + value, httpOptions
    );
  }
  public async GetByIdPaterno(value: string) {
    return this.http.get<Respuesta<Array<Persona>>>(
      environment.ApiURL + environment.EndPoints.Personas.ConsultaPaterno + '/' + value, httpOptions
    );
  }
  public async GetByIdMaterno(value: string) {
    return this.http.get<Respuesta<Array<Persona>>>(
      environment.ApiURL + environment.EndPoints.Personas.ConsultaMaterno + '/' + value, httpOptions
    );
  }

  //Method Post
  public async Create(
    object: Persona
  ) {
    return await this.http.post<Respuesta<Persona>>(
      environment.ApiURL + environment.EndPoints.Personas.Registrar,
      object, httpOptions
    );
  }

  // Method Put
  public async Update(
    id: string,
    object: Persona
  ) {
    return await this.http.put<Respuesta<Persona>>(
      environment.ApiURL + environment.EndPoints.Personas.Actualizar + '/' + id,
      object, httpOptions
    );
  }

  // Method Delete{Id}
  public async Delete(
    id: string
  ): Promise<Observable<Respuesta<Persona>>> {
    return await this.http.delete<Respuesta<Persona>>(
      environment.ApiURL + environment.EndPoints.Personas.Eliminar + '/' + id,httpOptions
    );
  }

}
