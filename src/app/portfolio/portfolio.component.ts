import { Component, OnInit } from '@angular/core';
import { portfolioContent } from './portfolio';
import { PORTFOLIOCONTENT } from './mock-portfolio';
import { PortfolioService } from './portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
   portfolioCont : portfolioContent[];
   constructor(private portfolioService: PortfolioService) { }

   getPortfolioContent(): void{
      this.portfolioCont = this.portfolioService.getPortfolioContent();
   }

  ngOnInit(): void {
     this.getPortfolioContent();
  }

}
