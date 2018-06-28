import { Component, OnInit } from '@angular/core';
import { DataService} from '../../Services/data.service';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {
  posts: Posts[];
  iframe_html: any;
  constructor(private dataService:DataService,private embedService: EmbedVideoService) {

   }
  
  ngOnInit() {
  }


  GetData(data){
    console.log("8888888888888888");
    this.dataService.getServiceData(data).subscribe((posts) => {
      console.log(posts.items);
      this.posts = posts.items;
    });
  }

  updateVideoUrl(id: string) {
    return this.iframe_html = this.embedService.embed("https://www.youtube.com/watch?v="+id);
  }

}

interface Posts{
  id: String,
  etag: String,
  kind: String,
  snippet:String
}
