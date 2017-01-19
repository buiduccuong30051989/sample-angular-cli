import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { JumbotronService } from './jumbotron/jumbotron.service';
import { ListgroupComponent } from './listgroup/listgroup.component';
import { BlogComponent } from './blog/blog.component';
import { BlogService } from './blog/blog.service';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioService } from './portfolio/portfolio.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    ListgroupComponent,
    BlogComponent,
    PortfolioComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [JumbotronService,BlogService,PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
