
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

import { APP_CONFIG } from '../apiProvider/app.apiconfig';
import { AppConfig } from '../apiProvider/IAppConfig';



import { Post } from './post';
@Injectable()
export class PostService {
  apiEndPoint: string;
  constructor( @Inject(APP_CONFIG) config: AppConfig, private http: HttpClient) {
    this.apiEndPoint = config.apiEndPoint;
  }

  getPosts() {
    return this.http.get<Post[]>(this.apiEndPoint + 'posts');
  }

  addPost(post: Post) {
    let header = new HttpHeaders().set('token', 'thisisdummytoken').set('userToken', 'thisisuserToken');
    return this.http.post(this.apiEndPoint + 'posts', post, { headers: header });
  }


  getPostsData() {
    let request = new HttpRequest('GET', this.apiEndPoint + 'posts', { reportProgress: true });
    return this.http.request(request);
  }

}
