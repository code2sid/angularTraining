import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SepLoginComponent } from './login/sep-login.component';
import { SempAuthService } from './services/semp-auth.service';



@NgModule({
    imports: [CommonModule, FormsModule, HttpClientModule],
    exports: [SepLoginComponent],
    declarations: [SepLoginComponent],
    providers: [SempAuthService],
})
export class SecurityModule { }
