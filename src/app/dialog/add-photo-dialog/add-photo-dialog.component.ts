import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Photo } from 'src/models/photo.model';

@Component({
  templateUrl: './add-photo-dialog.component.html',
  styleUrls: ['./add-photo-dialog.component.scss']
})
export class AddPhotoDialogComponent {
  photo: Photo = {
    id: '',
    name: 'CAT',
    url: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg',
    like: 0,
    comment: []
  }
  constructor(
    public dialogRef: MatDialogRef<AddPhotoDialogComponent>) { }
  // @Inject(MAT_DIALOG_DATA) public data: DialogRoomData) 
  // {
  //   if (data.title == "url") {
  //     this.componentTitle = "Please Paste The Room URL"
  //   }else{
  //     this.componentTitle = "Please Enter Your Room Name"
  //   }
  // }

  onNoClick(): void {
    console.log(this.photo)
    if (this.photo.name != '' && this.photo.url.includes("http")) {
      this.dialogRef.close(this.photo);
    } else {
      this.dialogRef.close(null);

    }
  }

}
