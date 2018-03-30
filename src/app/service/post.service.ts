import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts' ;

  constructor(private http: HttpClient) { }

  get(  ) {
    return this.http.get(this.url);
  }

  find( id ) {
    return this.http.get(this.url + '/' + id);
  }

  post(data) {
    return this.http.post(this.url, data);
  }
  remove(id) {
    return this.http.delete(this.url + '/' + id);
  }
  edit( id, data ) {
    return this.http.put(this.url + '/' + id, data);
  }

}
