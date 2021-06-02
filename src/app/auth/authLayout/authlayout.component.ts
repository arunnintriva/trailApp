import { Component } from '@angular/core'

@Component({
    selector: 'app-authlayout',
    template: `<div class="container">
                    <mat-card>
                    <ng-content></ng-content>
                    </mat-card>
               </div>`,
    styleUrls:['./authlayout.component.scss']
})
export class AuthLayoutComponent {

}