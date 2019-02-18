import { Component, OnInit, Input } from '@angular/core';
import { sectorFilters } from '../popular-sectors-data';
import { isEmpty } from 'lodash';

@Component({
  selector: 'app-sector-filter-item',
  templateUrl: './sector-filter-item.component.html',
  styleUrls: ['./sector-filter-item.component.scss']
})
export class SectorFilterItemComponent implements OnInit {

  @Input() public allSectorFilters;

  public selectedFilter: any;
  public filterKey: string;
  public filterItems;

  constructor() { }

  ngOnInit() {
    this.filterItems = this.allSectorFilters.filterItem;
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

  public get selectedSectorFilters() {
    return this.selectedFilter;
  }

}
