import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoadingPanelComponent } from './index';

//Used to define little Components
@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [LoadingPanelComponent],//More declaration possible
  exports: [LoadingPanelComponent, RouterModule] // Extend the export maybe with  necassary modules which are used by e.g toolbar
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      //providers: [NameListService]
    };
  }
}
