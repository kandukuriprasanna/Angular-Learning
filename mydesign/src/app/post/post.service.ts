import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({providedIn: 'root'})
export class PostsService {
  apiUrl = "https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) {

  }

  getPost() {
    return this.http.get(this.apiUrl + "/posts").toPromise();
  }

  getPostComments(id: number) {
    return this.http.get(this.apiUrl + "/post/" + id + "/comments").toPromise();
  }
}
