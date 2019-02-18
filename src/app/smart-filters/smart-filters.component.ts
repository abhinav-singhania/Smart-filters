import { Component, OnInit } from '@angular/core';
import { tabFilterItem } from './smart-filters-data';
import { sectorFilters } from './popular-sectors-data';

@Component({
  selector: 'app-smart-filters',
  templateUrl: './smart-filters.component.html',
  styleUrls: ['./smart-filters.component.scss']
})
export class SmartFiltersComponent implements OnInit {

  public readonly tabFilterItems = tabFilterItem;
  public readonly allSectorFilters = sectorFilters;

  public readonly useCasesItems = ['Buy Side PE', 'Buy Side Corporate', 'Sell Side'];
  public readonly topChartsItems = ['Acquires', 'Founders', 'Institutional Investors',
  'Boardmembers', 'Investment Partners', 'Corprate VCs', 'Smart Money Investors', 'Private Equity'];

  constructor() { }

  ngOnInit() {
  }

}
