import { Component } from '@angular/core';
import { Post } from './models/post';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  posts: Post[] = [];

  addPost(post: Post) {
    this.posts.push(post);
  }
}
