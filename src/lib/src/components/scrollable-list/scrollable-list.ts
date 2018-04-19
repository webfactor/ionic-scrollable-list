import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'wf-scrollable-list',
    templateUrl: 'scrollable-list.html',
    styleUrls: ['scrollable-list.scss']
})
export class ScrollableListComponent {
    @Input() items: any[] = [];
    @Input() display: string = 'card';
    @Input() color: string = '';
    @Input() colorClicked: string = '';
    @Input() iconColor: string = '';
    @Input() iconColorClicked: string = '';
    @Input() activeIndex?: number = null;

    @Output() itemClick: EventEmitter<any> = new EventEmitter();

    getImage(item: any): string {
        return item.imageUrl || null;
    }

    getIcon(item: any): string {
        return item.icon || null;
    }

    onItemClick(item: any, index: number): void {
        this.activeIndex = index;
        this.itemClick.emit({item, index});
    }
}
