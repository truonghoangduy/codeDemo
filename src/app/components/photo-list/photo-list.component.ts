import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListOfPhoto } from 'src/models/photos.model';
import { Store, select } from '@ngrx/store';
import { map} from 'rxjs/operators';
import { Photo } from 'src/models/photo.model';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  photos:Observable<ListOfPhoto>;
  constructor(private store:Store) {
    this.photos = this.store.select((state)=>state['photoList'])
   }

  listOfPhoto:ListOfPhoto


  ngOnInit(): void {
    // QUICK IMPLEMTATION
    this.photos.subscribe((photoList)=>{
      this.listOfPhoto = photoList;

    })
  }



}
