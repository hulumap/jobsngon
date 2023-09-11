import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { NgZorroAntModule } from '../ng-zorro-ant.module';
import { SigninComponent } from './signin/signin.component';
import { MaterialModule } from '../material.module';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        children: [
            {
                path: '',
                component: SigninComponent,
            },
            {
                path: 'signup',
                component: SignupComponent,
            },
        ]
    },
]
@NgModule({
    declarations: [LoginComponent, SigninComponent,SignupComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgZorroAntModule,
        MaterialModule,
        RouterModule.forChild(routes)
    ],
    exports: [MaterialModule],
})
export class LoginModule { }
