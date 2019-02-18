import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  public sideNavWidgetData = [
    {
      name: 'strategy',
      title: 'Find strategic gaps',
      icon: 'category',
      isSearch: true
    },
    {
      name: 'market',
      title: 'Explore market maps',
      icon: 'map',
      isSearch: false
    },
    {
      name: 'acquires',
      title: 'Identify potential acquires',
      icon: 'pie_chart',
      isSearch: true
    },
    {
      name: 'company',
      title: 'Identify companies due for exit',
      icon: 'exit_to_app',
      isSearch: false
    },
    {
      name: 'strategy',
      title: 'Identify growth companies',
      icon: 'insert_chart',
      isSearch: true
    },
  ];

  ngOnInit() {
  }

}
