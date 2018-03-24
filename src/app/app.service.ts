import { Observable } from 'rxjs/Observable'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Address } from './models'

@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  checkPostcode(address: Address) {
      return this.http.get(`http://api.postcodedata.nl/v1/postcode/?postcode=${address.postcode}&streetnumber=${address.streetNumber}&ref=domeinnaam.nl&type=json`)
  }

}
