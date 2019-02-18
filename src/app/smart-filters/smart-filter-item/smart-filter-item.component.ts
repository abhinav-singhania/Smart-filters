import { Component, OnInit, Input } from '@angular/core';
import { TabFilterItem, SmartFilterItem } from '../smart-filters-data';
import { isEmpty } from 'lodash';

@Component({
  selector: 'app-smart-filter-item',
  templateUrl: './smart-filter-item.component.html',
  styleUrls: ['./smart-filter-item.component.scss']
})
export class SmartFilterItemComponent implements OnInit {

  @Input() public tabItem: TabFilterItem;

  public filterItems: SmartFilterItem[];
  public selectedFilter: SmartFilterItem[];
  public filterKey: string;
  public allFilters: string[];

  constructor() { }

  ngOnInit() {
    this.filterItems = this.tabItem.filterItem;
    this.chooseFilter();
  }

  public chooseFilter( _filterKey?: string ) {
    if (this.filterKey === _filterKey) {
      _filterKey = '';
    }
    this.filterKey = _filterKey;
    this.selectedFilter = this.filterItems.filter(({filterKey}) => filterKey === _filterKey);
    if (isEmpty(this.selectedFilter)) {
      this.selectedFilter = this.filterItems;
    }
    return this.selectedFilter;
  }

  public get smartFilters() {
    return this.selectedFilter;
  }
}
