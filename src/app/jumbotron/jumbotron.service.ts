import { Injectable } from '@angular/core';
import { jumboContent } from './jumbo';
import { JUMBOCONTENT } from './mock-jumbo';
@Injectable()
export class JumbotronService {
   getJumboContent(): jumboContent {
    return JUMBOCONTENT;
  }
  constructor() { }

}
