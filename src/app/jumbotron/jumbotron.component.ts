import { Component, OnInit } from '@angular/core';
import { jumboContent } from './jumbo';
import { JUMBOCONTENT } from './mock-jumbo';
import { JumbotronService } from './jumbotron.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})

export class JumbotronComponent implements OnInit {
   jumboCont : jumboContent;
   constructor(private jumbotronService: JumbotronService) { }
   getJumboContent(): void {
      this.jumboCont = this.jumbotronService.getJumboContent();
   }
   ngOnInit(): void {
      this.getJumboContent();
   }

}