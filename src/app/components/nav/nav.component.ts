import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as photoActions from '../../../states/actions/photo.action';
import { initialPhoto } from 'src/states/reducers/photo.reducer';
import { Photo } from 'src/models/photo.model';
import { MatDialog } from '@angular/material/dialog';
import { AddPhotoDialogComponent } from 'src/app/dialog/add-photo-dialog/add-photo-dialog.component';
// import {} from ''


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private store: Store, private addPhotoDiaLog: MatDialog) { }

  ngOnInit(): void {
  }

  fakePhotoGenerater(uuid: string): Photo {
    return {
      id: uuid,
      url: "../../../assets/dog.jpg",
      name: "Dog",
      like: 0,
      comment: ["Nice Dog", "sdaf"],
    };
  }


  addPhoto() {
    console.log("Add Photo");
    let addPhotoDiaLogRef = this.addPhotoDiaLog.open(AddPhotoDialogComponent);
    addPhotoDiaLogRef.afterClosed().subscribe((dialogValue: Photo) => {
      console.log(dialogValue)
      if (dialogValue != null) {
        dialogValue.id = new Date().toUTCString();
        this.store.dispatch(photoActions.add(dialogValue));

      }

    })
    // this.dialogRef.
    // this.store.dispatch(photoActions.add(this.fakePhotoGenerater(new Date().toUTCString())))
  }

  // listenAddPhotoDialog(){
  //   this.dialogRef.
  // }

}
