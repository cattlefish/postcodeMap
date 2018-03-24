import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms'
import { AgmCoreModule } from '@agm/core'

import { environment } from '../environments/environment'
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
    FormsModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: environment.googleApiKey
    })
  ],
  providers: [ AppService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
