import { Component, OnInit } from '@angular/core';
import { ImageService } from '../service/image.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  
  
  private listofusers: Array<any> = [ { "name": "Senathipathi","index":1},
  { "name": "Nirmal","index":2}, 
  { "name": "Rose","index":3},
   { "name": "Selva","index":4},
    { "name": "Vishal","index":5}];
  private imageList : Array<any>;
  
  constructor(private imageService:ImageService) {
    this.getAllImages();

  }
    ngOnInit(): void {
    }
    getAllImages = () =>{
      this.imageService.getImageList().subscribe((data)=>{
        this.imageList = data;
        console.log(this.imageList)
     
      })
    }
}
