import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private url = "https://picsum.photos/v2/list?page=1&limit=20";

constructor(private http : HttpClient) { }
  public  getImageList = ():Observable<any> =>{
    return this.http.get(`https://picsum.photos/v2/list?page=5&limit=20`);
  }
}
