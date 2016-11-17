import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { IndexComponent } from './index.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [IndexComponent],
  exports: [IndexComponent],
  providers: []
})
export class IndexModule { }
