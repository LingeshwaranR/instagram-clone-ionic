import { Component } from '@angular/core';
import { ImageService } from '../service/image.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  private imageList : Array<any>;

  constructor(private imageService:ImageService) {
    this.getAllImages();

  }
  getAllImages = () =>{
    this.imageService.getImageList().subscribe((data)=>{
      this.imageList = data;
      console.log(this.imageList)
   
    })
  }

}
