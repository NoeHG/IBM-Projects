import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTPaises } from '../interfaces/rest-paises';
import { catchError, delay, map, Observable, of, tap, throwError } from 'rxjs';
import type { Pais } from '../interfaces/pais';
import { PaisMapper } from '../mappers/pais-mapper';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private http = inject(HttpClient);
  private queryCacheCapital = new Map<string, Pais[]>();
  private queryCachePais = new Map<string, Pais[]>();
  private queryCacheRegion = new Map<string, Pais[]>();

  buscarPorCapital(query: string): Observable<Pais[]>{
    query = query.toLocaleLowerCase();

    if (this.queryCacheCapital.has(query)){
      return of(this.queryCacheCapital.get(query) ?? []);
    }

    return this.http.get<RESTPaises[]>(`${API_URL}/capital/${query}`).pipe(
      map(respuestaPaises =>
        PaisMapper.mapRestPaisArrayToPaisArray(respuestaPaises)
      ),
      delay(1000),
      tap((paises) => this.queryCacheCapital.set(query, paises)),
      catchError(error => {
        console.log('Error fetching', error);
        return throwError(() => new Error(`No se pudo obtener paises con ese query: ${query}`))
      })
    );
  }

  buscarPorPais(query: string): Observable<Pais[]>{
    query = query.toLocaleLowerCase();

    if (this.queryCacheCapital.has(query)){
      return of(this.queryCachePais.get(query) ?? []);
    }

    return this.http.get<RESTPaises[]>(`${API_URL}/name/${query}`).pipe(
      map(respuestaPaises =>
        PaisMapper.mapRestPaisArrayToPaisArray(respuestaPaises)
      ),
      delay(1000),
      tap((paises) => this.queryCachePais.set(query, paises)),
      catchError(error => {
        console.log('Error fetching', error);
        return throwError(() => new Error(`No se pudo obtener paises con ese query: ${query}`))
      })
    );
  }

  buscarPaisPorCodigo(code: string){
    code = code.toLocaleLowerCase();

    return this.http.get<RESTPaises[]>(`${API_URL}/alpha?codes=${code}`).pipe(
      map(respuestaPais =>
        PaisMapper.mapRestPaisArrayToPaisArray(respuestaPais)
      ),
      map( (paises) => paises.at(0) ),
      delay(1000),
      catchError(error => {
        console.log('Error fetching', error);
        return throwError(() => new Error(`No se pudo obtener pais con ese query: ${code}`))
      })
    );
  }

  buscarPorRegion(region: string): Observable<Pais[]>{

    if (this.queryCacheRegion.has(region)){
      return of(this.queryCacheRegion.get(region) ?? []);
    }
    return this.http.get<RESTPaises[]>(`${API_URL}/region/${region}`).pipe(
      map(respuestaPaises =>
        PaisMapper.mapRestPaisArrayToPaisArray(respuestaPaises)
      ),
      delay(1000),
      tap((paises) => this.queryCacheRegion.set(region, paises)),
      catchError(error => {
        console.log('Error fetching', error);
        return throwError(() => new Error(`No se pudo obtener paises con ese query: ${region}`))
      })
    );
  }
}
