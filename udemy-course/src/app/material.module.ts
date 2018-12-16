import { NgModule } from "@angular/core";
import {MatButtonModule,MatIconModule,MatFormFieldModule,
    MatInputModule,MatDatepickerModule,MatNativeDateModule
    ,MatSidenavModule,MatToolbarModule,MatListModule,MatGridListModule,MatTabsModule} from '@angular/material';
import { from } from "rxjs";



@NgModule({
    imports:[MatButtonModule,MatIconModule
        ,MatFormFieldModule,MatInputModule,MatDatepickerModule,
        MatNativeDateModule,MatSidenavModule,MatToolbarModule,
        MatListModule,MatGridListModule,MatTabsModule],
    
        exports:[MatButtonModule,MatIconModule,MatFormFieldModule,
        MatInputModule,MatDatepickerModule,MatNativeDateModule
        ,MatSidenavModule,
        MatToolbarModule,MatListModule,MatGridListModule,MatTabsModule]
})
export class MaterialModule{
   
}