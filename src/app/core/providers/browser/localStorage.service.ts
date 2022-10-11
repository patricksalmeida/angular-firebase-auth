import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(key: string, value: any): void {
    if (this.exists(key)) {
      localStorage.removeItem(key)
    }

    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any {
    return JSON.parse(JSON.stringify(localStorage.getItem(key)));
  }

  exists(key: string): boolean {
    return !!localStorage.getItem(key)
  }

  clear(): void {
    localStorage.clear();
  }

}
