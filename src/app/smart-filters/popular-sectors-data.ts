// tslint:disable:max-line-length
export const sectorFilters: SectorFilter = {
  allFilters: [{
      key: 'infrastructure',
      value: 'Enterperise Infrastructure'
    },
    {
      key: 'software',
      value: 'Enterperise Software'
    },
    {
      key: 'analytics',
      value: 'AI & Analytics'
    },
    {
      key: 'iot',
      value: 'Internet of Things'
    },
    {
      key: 'fintech',
      value: 'Fintech'
    },
    {
      key: 'industrial',
      value: 'Industrial Tech'
    },
    {
      key: 'retail',
      value: 'Retail & Ecommerce Tech'
    },
    {
      key: 'enterprise',
      value: 'Enterperise Infrastructure'
    },
    {
      key: 'travel',
      value: 'Travel & Hospitality'
    },
    {
      key: 'other',
      value: 'Other Verticals'
    },
  ],
  filterItem: [
    {
      filterKey: 'infrastructure',
      filterName: 'Enterperise Infrastructure',
      filterValue: ['Enterprise Networking', 'Enterprise strorage', 'Enterprise IT Operations Management', 'Cyber Security', 'Application Developement & Integration'],
      icon: 'edit'
    },
    {
      filterKey: 'analytics',
      filterName: 'AI & Analytics',
      filterValue: ['Artifical Intelligence', 'Data Management & Analytics'],
      icon: 'memory'
    },
    {
      filterKey: 'industrial',
      filterName: 'Industrial Tech',
      filterValue: ['Auto Tech', '3D Printing', 'Robotics', 'Iot-auto', 'Iot-industrial', 'Drones', 'Manufaturing tech'],
      icon: 'build'
    },
    {
      filterKey: 'fintech',
      filterName: 'Fintech',
      filterValue: ['Alternative Lending & Financing', 'Banking Tech', 'Capital Markets Tech', 'Financial Data & Analytics', 'Insurance Tech Auto', 'RegTech', 'WealthTech'],
      icon: 'flag'
    },
    {
      filterKey: 'software',
      filterName: 'Enterperise Software',
      filterValue: ['Enterprise Communication', 'AdTech', 'Human Capital Management Tech', 'Supply Chain Management', 'Blockchain', 'Digital Marketing'],
      icon: 'tv'
    },
    {
      filterKey: 'iot',
      filterName: 'Internet of Things',
      filterValue: ['IoT - Device & Platforms', 'IoT - Auto', 'IoT - Commerical Buildings', 'IoT - Consumer', 'IoT - Industrial', 'IoT - smart city', 'IoT - Utilities'],
      icon: 'language'
    },
    {
      filterKey: 'retail',
      filterName: 'Retail & Ecommerce Tech',
      filterValue: ['Retail Tech', 'Ecommerce Tech'],
      icon: 'shopping_basket'
    },
    {
      filterKey: 'travel',
      filterName: 'Travel & Hospitality',
      filterValue: ['Travel Tech', 'Transport Tech', 'Hospitality Tech'],
      icon: 'airplanemode_active'
    },
    {
      filterKey: 'other',
      filterName: 'Other Verticals',
      filterValue: ['Education Tech', 'Legal Tech', 'Ag Tech'],
      icon: 'devices_other'
    },
  ]

};

export interface SectorFilter {
  allFilters: any[];
  filterItem: SectorFilterItem[];
}

export interface SectorFilterItem {
  filterName: string;
  filterKey: string;
  filterValue: string[];
  icon: string;
}
