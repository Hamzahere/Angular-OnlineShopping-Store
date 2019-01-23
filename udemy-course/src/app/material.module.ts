import { NgModule } from "@angular/core";
import {MatButtonModule,MatIconModule,MatFormFieldModule,
    MatInputModule,MatDatepickerModule,MatNativeDateModule
    ,MatSidenavModule,MatToolbarModule,MatListModule,MatGridListModule,MatTabsModule, MatSelectModule} from '@angular/material';
    import {MatCardModule} from '@angular/material/card';
    
import { from } from "rxjs";



@NgModule({
    imports:[MatButtonModule,MatIconModule
        ,MatFormFieldModule,MatInputModule,MatDatepickerModule,
        MatNativeDateModule,MatSidenavModule,MatToolbarModule,
        MatListModule,MatGridListModule,MatTabsModule,MatCardModule, MatSelectModule],
    
        exports:[MatButtonModule,MatIconModule,MatFormFieldModule,
        MatInputModule,MatDatepickerModule,MatNativeDateModule
        ,MatSidenavModule,
        MatToolbarModule,MatListModule,MatGridListModule,MatTabsModule,MatCardModule, MatSelectModule]
})
export class MaterialModule{
   
}