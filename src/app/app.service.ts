import { Observable } from 'rxjs/Observable'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

const apiUrl = 'http://api.postcodedata.nl/v1/postcode/?postcode=<postcode>&streetnumber=<streetnumber>&ref=domeinnaam.nl&type=json'

@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  checkPostcode(postCode: string, streetNumber: number) {
      console.log('calling api')
      return this.http.get(`http://api.postcodedata.nl/v1/postcode/?postcode=${postCode}&streetnumber=${streetNumber}&ref=domeinnaam.nl&type=json`)
  }

}
