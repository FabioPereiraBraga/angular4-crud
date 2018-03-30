import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../service/post.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

public posts;

  constructor(private service: PostService) {
  }


  ngOnInit() {
     this.service.get()
    .subscribe(data => this.posts = data);
  }

  remove(id, index: any) {
    this.service.remove(+id)
    .subscribe((): any =>
    this.posts.splice(index, 1)
    );
    }

}
