import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as photoActions from '../../../states/actions/photo.action';
import { initialPhoto } from 'src/states/reducers/photo.reducer';
import { Photo } from 'src/models/photo.model';
// import {} from ''


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private store:Store) { }

  ngOnInit(): void {
  }

  fakePhotoGenerater(uuid:string):Photo{
    return {
      id:uuid,
      url:"../../../assets/dog.jpg",
      name:"Dog",
      like:0,
      comment:["Nice Dog","sdaf"],
  };
  }


  addPhoto(){
    console.log("Add Photo");
    this.store.dispatch(photoActions.add(this.fakePhotoGenerater(new Date().toUTCString())))
  }

}
