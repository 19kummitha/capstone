import { Component } from '@angular/core';
import { GetPostService } from '../../../../services/getpost.service';
import { LoginService } from '../../../../services/login.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts: any[] = [];
  errorMessage: string = '';
  isAdmin: boolean = false;
  baseUrl: string='http://localhost:5114';
  constructor(private postService: GetPostService,private loginService: LoginService) { }

  ngOnInit(): void {
    this.loadPosts();
    this.isAdmin=this.loginService.getUserRole()==='Admin';
  }
  loadPosts() {
    this.postService.getAllPosts().subscribe(posts => {
      this.posts = posts.map(post => ({
        ...post,
        mediaUrl: this.baseUrl + post.mediaUrl 
      }));
    });
}
deletePost(postId: number) {
  if(postId&&this.isAdmin)
  {
    this.postService.deletePost(postId).subscribe(
      () => {
        this.posts = this.posts.filter(post => post.id !== postId);
        console.log('delete')
      },
      (error) => {
        console.error('Error deleting post:', error);
      }
    );
  }
  }
  
}
