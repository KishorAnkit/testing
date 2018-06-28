import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: Http) {

      console.log("Service Constructor rans....");

   }

   getServiceData(data_){
      return this.http.get('https://www.googleapis.com/youtube/v3/search',
      {
        params: {  part: "snippet", //Youtube API special parameter (please check documentation here https://developers.google.com/youtube/)
        maxResults: 10, //number of results per page
        key: "AIzaSyDpj5RczCPvJCKLCXUlrquc0D41AUEKV04",
        q: data_, //shearch query from the user
        type: "video", //only return videos (no channels or playlists) so we can take the video ID and link it back to Youtube
        publishedAfter: "2018-06-21T00:00:00Z" }
      }
    ).pipe(map(res => res.json()));
   }



   /*getServiceData(data_){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .pipe(map(res => res.json()));
 }*/
}
