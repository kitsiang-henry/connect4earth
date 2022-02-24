import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import glossaryBg from '../../assets/glossary/glossaryBg.png';

const DashboardGlossary = () => {
    return (
        <div style={{ height: 600, width: '100%',  backgroundImage: `url(${glossaryBg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", }}>
        <DataGrid
            columns={[
                { field: 'id', headerName: 'ID', width: 50 },
                { field: 'term', headerName: 'Term', minWidth: 200 },
                { field: 'description', headerName: 'Description', minWidth: 1700 },
            ]}
            rows={[
            { id: 1, term: 'Flood Hotspots', description: 'Ones that are relatively likely to be exposed to flooding'},
            { id: 2, term: 'Flood Prone Areas', description: 'Flood prone areas are those areas which are low-lying, with a history of flooding.' },
            { id: 3, term: 'Masterplan', description: 'The statutory land use plan which guides Singapore\'s development in the medium term over the next 10 to 15 years.' },
            { id: 4, term: 'Planning Area', description: 'Division of Singapore land area for development in accordance to the Masterplan' },
            { id: 5, term: 'Point of Interest (POI)', description: 'Specific location/landmark of interest which people can identify by' },
            { id: 6, term: 'PUB Water Level Sensors', description: 'Water level sensors around Singapore for monitoring of the drainage system. These water level sensors provide data on water levels in the drains and canals, enhancing the monitoring of real-time site conditions during heavy storms and response time.' },
            { id: 7, term: 'Subzones', description: 'Division of singapore land area within a planning area ' },
            { id: 8, term: 'Water Bodies', description: 'A body of water or waterbody (often spelled water body) is any significant accumulation of water, generally on a planet\'s surface.' },
            { id: 9, term: 'Weather Stations', description: 'Island-wide weather stations that collects data about rainfall' },
            ]}
            rowsPerPageOptions={[10]}
            pageSize={10}
        />
        </div>
    )
}

export default DashboardGlossary;