import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

//Routes
import { app_routing } from './app.routes';

//services
import { YoutubeService } from './services/youtube.service';
import { MysqlService } from './services/mysql.service';
import { ChartService } from './services/chart.service';

//Pipes
import { SafeDomPipe } from './pipes/safe-dom.pipe';

//Components
import { DescriptionComponent } from './components/description/description.component';
import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';
import { CategorynamePipe } from './pipes/categoryname.pipe';
import { KeywordComponent } from './components/keyword/keyword.component';
import { SearchComponent } from './components/search/search.component';
import { ReqformComponent } from './components/reqform/reqform.component';
import { DescPipe } from './pipes/desc.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SafeDomPipe,
    DescriptionComponent,
    PieChartComponent,
    CategorynamePipe,
    KeywordComponent,
    SearchComponent,
    ReqformComponent,
    DescPipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    app_routing,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [
    YoutubeService,
    MysqlService,
    ChartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
