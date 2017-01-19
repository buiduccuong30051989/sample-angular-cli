import { Injectable } from '@angular/core';
import { portfolioContent } from './portfolio';
import { PORTFOLIOCONTENT } from './mock-portfolio';

@Injectable()
export class PortfolioService {
   getPortfolioContent() : portfolioContent[] {
      return PORTFOLIOCONTENT;
   }
  constructor() { }

}
