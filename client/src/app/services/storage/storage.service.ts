import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly m_Storage = {
    jwt: '',
  }

  constructor() { }
  
  public get storage() {
    return this.m_Storage;
  }

}