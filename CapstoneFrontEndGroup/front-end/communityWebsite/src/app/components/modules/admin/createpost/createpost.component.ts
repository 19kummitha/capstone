import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { PostService } from '../../../../services/post.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrl: './createpost.component.css'
})
export class CreatepostComponent {
  post: any = {
    title: '',
    content: ''
  };
  successMessage:string='';
  selectedFile: File | null = null;
  @ViewChild('fileInput') fileInput!: ElementRef;
  constructor(private postService: PostService) { }
  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  onSubmit(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('title', this.post.title);
      formData.append('content', this.post.content);
      formData.append('media', this.selectedFile, this.selectedFile.name);

      this.postService.createPost(formData).subscribe((event: HttpEvent<any>) => {
        if (event.type === HttpEventType.Response) {
          console.log('Post created successfully', event.body);
          this.successMessage="Post Created Successfully";
          this.resetForm();
        }
      });
    }
  }
  resetForm():void {
    this.post.title='';
    this.post.content='';
    this.selectedFile=null;
    if (this.fileInput) {
      this.fileInput.nativeElement.value = '';
    }
  }
}
