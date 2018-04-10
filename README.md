# Scrollable List

Shows horizontal scrollable list items.
Looks quite neat in toolbars. 👌

## Installation

- Install via npm  
`npm i @webfactor/ionic-scrollable-list`

- Add `ScrollableListModule` to your ionic module imports

## I/O

```typescript
items: { title: string, imageUrl: string, icon: string }[]
```
Items to display. Can contain title, imageUrl and icon name.

```typescript
display?: 'card' | 'chip'
```  
Default: 'card'. Show items as _ion-card_ or _ion-chip_.  No icon is shown in Card Mode.

```typescript
color?: string
```
Default: 'light'. Shows chips in the corresponding color. Use colors defined in _variables.scss_ file.

```typescript
(itemClick)
```
Event is thrown on clicking an item. Returns clicked item as _$event_ param.

## Example
```html
<wf-scrollable-list [items]="items" (itemClick)="onItemClick($event)" display="chip">
    <!-- Additional content is placed at the beginning of the list. Don't use <ion-label> in here. -->
    <ion-chip>
        <ion-icon name="close"></ion-icon>
        Remove Filter
    </ion-chip>
</wf-scrollable-list>
```