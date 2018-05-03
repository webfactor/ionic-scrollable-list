import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { ScrollableListComponent } from './components/scrollable-list/scrollable-list';

export * from './components/scrollable-list/scrollable-list';

@NgModule({
    imports: [CommonModule, IonicModule],
    declarations: [ScrollableListComponent],
    exports: [ScrollableListComponent]
})
export class ScrollableListModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ScrollableListModule
        };
    }
}
