import { Injectable } from '@angular/core';
import { ListOfPhoto } from 'src/models/photos.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { 
  }

  setDB(listOfPhoto:ListOfPhoto){
    localStorage.setItem("db",JSON.stringify(listOfPhoto))
  }

  readDB(listOfPhoto:ListOfPhoto):ListOfPhoto{
    return <ListOfPhoto>JSON.parse(localStorage.getItem("db"));
  }
}
