import { Component } from '@angular/core';
import { Post } from './models/post';
import { NgFor } from '@angular/common';
import { PostCardComponent } from './post-card/post-card.component';
import { PostFormComponent } from './post-form/post-form.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [NgFor, PostCardComponent, PostFormComponent]
})
export class AppComponent {
  posts: Post[] = [];

  addPost(post: Post) {
    this.posts.push(post);
  }
}
