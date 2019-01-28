import { NgModule } from "@angular/core";
import {MatButtonModule,MatIconModule,MatFormFieldModule,
    MatInputModule,MatDatepickerModule,MatNativeDateModule
    ,MatSidenavModule,MatToolbarModule,MatListModule,MatGridListModule,MatTabsModule, MatSelectModule, MatDialogModule} from '@angular/material';
    import {MatCardModule} from '@angular/material/card';
    
import { from } from "rxjs";



@NgModule({
    imports:[MatButtonModule,MatIconModule
        ,MatFormFieldModule,MatInputModule,MatDatepickerModule,
        MatNativeDateModule,MatSidenavModule,MatToolbarModule,
        MatListModule,MatGridListModule,MatTabsModule,MatCardModule, MatSelectModule,MatDialogModule],
    
        exports:[MatButtonModule,MatIconModule,MatFormFieldModule,
        MatInputModule,MatDatepickerModule,MatNativeDateModule
        ,MatSidenavModule,
        MatToolbarModule,MatListModule,MatGridListModule,MatTabsModule,MatCardModule, MatSelectModule,MatDialogModule]
})
export class MaterialModule{
   
}