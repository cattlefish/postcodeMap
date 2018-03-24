import { Component } from '@angular/core'
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx'

import { AppService } from './app.service'
import { Address, Map, emptyMap } from './models'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public map$: Map
    public errorMessage: string

    constructor(private appService: AppService) {

    }

    checkPostcode = (address: Address) => {
        this.appService.checkPostcode(address).subscribe((result: any) => {
            if (result.status === 'ok') {
                this.setMap(result)
            } else {
                this.errorMessage = result.errormessage
            }
        })
    }

    setMap = (result: any) => {
        if (result.details && result.details.length > 0) {
            const detail = result.details[0]
            const latitude = parseFloat(detail.lat)
            const longitude = parseFloat(detail.lon)

            if (!Number.isNaN(latitude) && !Number.isNaN(longitude)) {
                this.dismissError()
                this.map$ = {
                    latitude: latitude,
                    longitude: longitude
                }
                
                return
            }
        }

        this.errorMessage = 'No results found'
    }

    hasError = () => {
        return this.errorMessage && this.errorMessage !== ''
    }

    dismissError = () => {
        this.errorMessage = ''
    }

    hasResults = () => {
        return this.map$ !== undefined && this.map$ !== emptyMap
    }

}
