import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'wf-scrollable-list',
    templateUrl: 'scrollable-list.html',
    styleUrls: ['scrollable-list.scss']
})
export class ScrollableListComponent {
    @Input() items: any[] = [];
    @Input() display = 'card';
    @Input() activeIndex?: number = null;
    @Input() color = 'light';
    @Input() colorSelected = 'light';
    @Input() iconColor = 'light';
    @Input() iconColorSelected = 'light';

    @Output() itemClick: EventEmitter<any> = new EventEmitter();

    getImage(item: any): string {
        return item.imageUrl || null;
    }

    getIcon(item: any): string {
        return item.icon || null;
    }

    onItemClick(item: any, index: number): void {
        this.activeIndex = index;
        this.itemClick.emit({ item, index });
    }
}
