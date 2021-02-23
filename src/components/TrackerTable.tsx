import React, { useEffect, useState } from 'react';
import {
  Column,
  Sorting,
  SearchState,
  IntegratedFiltering,
  SortingState,
  IntegratedSorting,
  PagingState,
  IntegratedPaging,
} from '@devexpress/dx-react-grid';

import {
  PagingPanel,
  TableHeaderRow,
  SearchPanel,
  Grid,
  Table,
  Toolbar,
} from '@devexpress/dx-react-grid-material-ui';

import { Paper } from '@material-ui/core';
import { fetchCovidData } from '../api';
import { ICountryStats } from '../interfaces/ICountryStats';

const columns: Column[] = [
  { name: 'Country', title: 'Country' },
  { name: 'TotalConfirmed', title: 'Confirmed' },
  { name: 'TotalRecovered', title: 'Recovered' },
  { name: 'TotalDeaths', title: 'Deaths' },
];

const TrackerTable = () => {
  const [stats, setStats] = useState<ICountryStats[]>([]);
  const [country, setCountry] = useState<string>('');
  const [sorting, setSorting] = useState<Sorting[]>([
    {
      columnName: 'TotalDeaths',
      direction: 'desc',
    },
    {
      columnName: 'TotalConfirmed',
      direction: 'asc',
    },
    {
      columnName: 'TotalRecovered',
      direction: 'asc',
    },
  ]);

  useEffect(() => {
    fetchCovidData().then((data) => setStats(data.Countries));
  }, []);

  return (
    <Paper>
      <Grid columns={columns} rows={stats}>
        <SearchState value={country} onValueChange={setCountry} />
        <IntegratedFiltering />

        <SortingState sorting={sorting} onSortingChange={setSorting} />
        <IntegratedSorting />

        <PagingState pageSize={8} defaultCurrentPage={0} />
        <IntegratedPaging />

        <Table />

        <PagingPanel />
        <TableHeaderRow showSortingControls />

        <Toolbar />
        <SearchPanel />
      </Grid>
    </Paper>
  );
};

TrackerTable.propTypes = {};

export default TrackerTable;
