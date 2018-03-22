import { Component } from '@angular/core'
import { AppService } from '../app.service'

@Component({
    selector: 'app-postcode',
    templateUrl: './postcode.component.html',
    styleUrls: ['./postcode.component.css']
})
export class PostcodeComponent {

    constructor(private appService: AppService) {

    }

    checkPostcode = () => {
        this.appService.checkPostcode('7221', 13).subscribe(result => {
            console.log(result)
        })
    }
}