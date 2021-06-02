import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AuthLayoutComponent } from '../auth/authLayout/authlayout.component';
import { LoginComponent } from '../auth/login//login.component';
import { SignupComponent } from '../auth/signup/signup.component';

@NgModule({
    declarations: [
        AuthLayoutComponent,
        LoginComponent,
        SignupComponent
    ],
    imports : [
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        RouterModule
    ]
})

export class AuthModule { }