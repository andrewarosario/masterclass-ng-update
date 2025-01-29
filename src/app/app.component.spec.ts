import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PostCardComponent } from './post-card/post-card.component';
import { PostFormComponent } from './post-form/post-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, PostCardComponent, PostFormComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app!', () => {
    expect(component).toBeTruthy();
  });

  it('should add post to the list', () => {
    const post = { title: 'Post title', body: 'Post body' };
    component.addPost(post);

    expect(component.posts).toEqual([
      { title: 'Post title', body: 'Post body' },
    ]);

    component.addPost({ title: 'Post title 2', body: 'Post body 2' });
    expect(component.posts).toEqual([
      { title: 'Post title', body: 'Post body' },
      { title: 'Post title 2', body: 'Post body 2' },
    ]);
  });
});
