import { Component, OnInit } from '@angular/core';
import { Credential } from '../models/Credential';
import { SempAuthService } from '../services/semp-auth.service';
import { Token } from '../models/token';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'sep-login',
    templateUrl: 'sep-login.component.html'
})

export class SepLoginComponent implements OnInit {
    constructor(private _authService: SempAuthService,private _router:Router,       private route: ActivatedRoute) {

     }
    pageTitle: string = "Welcome To SEMP Login!";

    user: Credential = new Credential();
    token: Token;
    returnUrl: string;
    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    onCredentialCheck(): void {
        this._authService.checkCredentials(this.user).subscribe(
            data => {
                this.token = data;
                console.log(this.token);
                if (this.token.success == true) {
                    sessionStorage.setItem("token", JSON.stringify(this.token));
                    this._router.navigateByUrl(this.returnUrl);
                }
            },
            err => console.log(err),
            () => console.log("Service call completed!")
        )
    }
}