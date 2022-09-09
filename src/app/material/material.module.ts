import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';


const materialComponents = [
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatMenuModule,
    MatBadgeModule,
    MatSelectModule,
    MatIconModule
    
]
@NgModule({
  imports: [
    materialComponents
  ],
  exports: [
    materialComponents
  ]
})
export class MaterialModule { }
