import { Component, Output, EventEmitter } from '@angular/core'
import { AppService } from '../app.service'
import { Address } from '../models'

@Component({
    selector: 'app-postcode',
    templateUrl: './postcode.component.html',
    styleUrls: ['./postcode.component.css']
})
export class PostcodeComponent {

    @Output() checkPostcode: EventEmitter<Address> = new EventEmitter<Address>()

    streetNumber: number
    postcode: string

    onClick = () => {
        const address: Address = {
            streetNumber: this.streetNumber,
            postcode: this.postcode
        }

        this.checkPostcode.emit(address)
    }

    isDirty = () => {
        return this.postcode && this.postcode !== '' && this.streetNumber && this.streetNumber > 0
    }
}