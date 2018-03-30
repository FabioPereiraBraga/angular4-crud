import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.css']
})
export class PostNewComponent implements OnInit {

public post: any = {
  id: null,
  title: '',
  body: ''
};
  constructor(
    private service: PostService,
    private route: Router,
    private routeParams: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routeParams.params.subscribe( params => {
      if (params.hasOwnProperty('id')) {
        this.service.find(params.id).subscribe(data => {
          this.post = data;
        });
      }
    });
  }

savePost() {
   !this.post.id
   ? this.service.post(this.post)
   .subscribe(() => this.route.navigate(['/post']))
   : this.service.edit(this.post.id, this.post)
   .subscribe(() => this.route.navigate(['/post'])
  );
}

}
