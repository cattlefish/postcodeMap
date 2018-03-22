import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppService } from './app.service'
import { AppComponent } from './app.component'
import { PostcodeComponent } from './postcode/postcode.component'
import { MapComponent } from './map/map.component'

@NgModule({
  declarations: [
    AppComponent,
    PostcodeComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [ AppService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
