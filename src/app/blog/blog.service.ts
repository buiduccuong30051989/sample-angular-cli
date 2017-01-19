import { Injectable } from '@angular/core';
import { blogContent } from './blog';
import { BLOGCONTENT } from './mock-blog';

@Injectable()
export class BlogService {
   getBlogContent(): blogContent[] {
      return BLOGCONTENT;
   }
  constructor() { }
}
