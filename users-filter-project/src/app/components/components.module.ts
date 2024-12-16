import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsModule } from '@angular/forms';

import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { FilterComponent } from './filter/filter.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UserDetailsComponent, FilterComponent],
  imports: [
    AngularMaterialModule,
    CommonModule,
    MatListModule,
    MatDividerModule,
    FormsModule,
  ],
  exports: [UserDetailsComponent, FilterComponent],
})
export class ComponentsModule {}
