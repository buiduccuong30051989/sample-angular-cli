import { Component, OnInit } from '@angular/core';
import { blogContent } from './blog';
import { BLOGCONTENT } from './mock-blog';
import { BlogService } from './blog.service';

@Component({
   selector: 'app-blog',
   templateUrl: './blog.component.html',
   styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
   blogCont : blogContent[];

   constructor(private blogService: BlogService) { }

   getBlogContent(): void{
      this.blogCont = this.blogService.getBlogContent();
   }

   ngOnInit(): void {
      this.getBlogContent();
   }

}
