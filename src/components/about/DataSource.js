import React from 'react';
import { Container, ThemeProvider, Typography, Box, makeStyles } from '@material-ui/core';
import { useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import PropTypes from 'prop-types';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import THEME from '../home/theme';

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        flexDirection: "column",
        paddingBottom: 15
    }
}));

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
  
    const handleFirstPageButtonClick = (event) => {
      onPageChange(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </Box>
    );
}


  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};




// const columns = [
//     { field: 'id', headerName: 'id', width: 80},
//     { field: 'viz', headerName: 'Visualization', width: 130 },
//     { field: 'dataset', headerName: 'Dataset', width: 300 },
//     { field: 'source', headerName: 'Source', width: 150 }
// ];

// const rows = [
//     { id: 1, viz: 'Base Map', dataset: '2019 Master Plan Subzone Boundary', source: <p>https://data.gov.sg/dataset/master-plan-2019-subzone-boundary-no-sea</p> },
//     { id: 2, viz: 'Base Map', dataset: '2019 Master Plan Planning Area Boundary', source: 'Cersei' },
//     { id: 3, viz: 'Base Map', dataset: '2019 Master Plan Region Boundary', source: 'smth' }
// ];

function createData(id, visualization, dataset, source) {
    return { id, visualization, dataset, source };
}

const rows = [
    createData(1, "Basemap", "2019 Master Plan Subzone Boundary", "https://data.gov.sg/dataset/master-plan-2019-subzone-boundary-no-sea"),
    createData(2, "Basemap", "2019 Master Plan Planning Area Boundary", "https://data.gov.sg/dataset/master-plan-2019-planning-area-boundary-no-sea"),
    createData(3, "Basemap", "2019 Master Plan Region Boundary", "https://data.gov.sg/dataset/master-plan-2019-region-boundary-no-sea"),
    createData(4, "Basemap", "2019 Master Plan Waterbody", "https://data.gov.sg/dataset/master-plan-2019-sdcp-waterbody-layer"),
    createData(5, "Basemap", "Flood Hotspots", "https://www.pub.gov.sg/drainage/floodmanagement"),
    createData(6, "Basemap", "Flood Prone Areas", "https://www.pub.gov.sg/drainage/history"),
    createData(7, "Basemap", "National Map Line", "https://data.gov.sg/dataset/national-map-line"),    
    createData(8, "Daily Rainfall", "Singapore Monthly Rainfall by Weather Station", "https://github.com/Kpioohyk/API_call"),
    createData(9, "Daily Rainfall", "Nation wide Monthly Rainfall Data", "https://www.singstat.gov.sg/find-data/search-by-theme/society/environment/latest-data"),
    createData(10, "Daily Rainfall", "PUB Water Level Sensors", "https://data.gov.sg/dataset/pub-water-level-sensors"),
    createData(11, "Sea Level Rise", "Sentinel-1 Digital Elevation Model", "https://search.asf.alaska.edu/#/"),
    createData(12, "Sea Level Rise", "Living Atlas Terrain Data", "https://elevation.arcgis.com/arcgis/rest/services/WorldElevation/Terrain/ImageServer"),
    createData(13, "Sea Level Rise", "Sentinel-1 Digital Elevation Model", "https://search.asf.alaska.edu/#/"),
    createData(14, "Demographics Dashboard", "Demographics Data", "https://www.singstat.gov.sg/publications/reference/cop2020/cop2020-sr2/census20_stat_release2"),
    createData(15, "Business/POI Dashboard", "2019 Master Plan Land Use", "https://data.gov.sg/dataset/master-plan-2019-land-use-layer"),
    createData(16, "Business/POI Dashboard", "Singapore Open Street Map Data", "https://download.bbbike.org/osm/bbbike/Singapore/"),
    createData(17, "Business/POI Dashboard", "Singapore POI Data", "https://github.com/MorbZ/OsmPoisPbf")
];
  
// export default function DataSource() {
//     return (
//       <div style={{ height: 400, width: '100%' }}>
//         <DataGrid
//           getRowId={(r) => r.id}
//           rows={rows}
//           columns={columns}
//           pageSize={10}
//           rowsPerPageOptions={[10]}
//         />
//       </div>
//     );
// }

// export default function DataSource() {
//     return (
//         <Container>
//             <Typography variant="h6" align="left" style={{ textDecoration: "underline" }}>
//                 Data Source
//             </Typography>
//             <TableContainer component={Paper}>
//                 <Table sx={{ maxWidth: 650 }} aria-label="simple table">
//                 <TableHead>
//                     <TableRow>
//                     <TableCell>ID</TableCell>
//                     <TableCell>Dataset</TableCell>
//                     <TableCell>Source</TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {rows.map((row) => (
//                     <TableRow
//                         key={row.id}
//                         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                     >
//                         <TableCell component="th" scope="row">
//                         {row.id}
//                         </TableCell>
//                         <TableCell >{row.dataset}</TableCell>
//                         <TableCell ><a href={row.source} target='_blank'>Link</a></TableCell>
//                     </TableRow>
//                     ))}
//                 </TableBody>
//                 </Table>
//             </TableContainer>
//         </Container>
//     );
// }

export default function CustomPaginationActionsTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    const classes = useStyles();
  
    return (
        <ThemeProvider theme={THEME}>
            <Container className={classes.container}>
                <Typography variant="h6" align="left" style={{ textDecoration: "underline" }}>
                    Data Source
                </Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="custom pagination table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ fontFamily: "Montserrat", fontSize: 20 }}>ID</TableCell>
                                <TableCell style={{ fontFamily: "Montserrat", fontSize: 20 }}>Visualization</TableCell>
                                <TableCell style={{ fontFamily: "Montserrat", fontSize: 20 }}>Dataset</TableCell>
                                <TableCell style={{ fontFamily: "Montserrat", fontSize: 20 }}>Source</TableCell>
                            </TableRow>
                        </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : rows
                        ).map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                            {row.id}
                            </TableCell>
                            <TableCell>
                            {row.visualization}
                            </TableCell>
                            <TableCell>
                            {row.dataset}
                            </TableCell>
                            <TableCell>
                            <a href={row.source} target='_blank'>Link</a>
                            </TableCell>
                        </TableRow>
                        ))}
            
                        {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[10, 20, { label: 'All', value: -1 }]}
                            colSpan={3}
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                            inputProps: {
                                'aria-label': 'rows per page',
                            },
                            native: true,
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                        </TableRow>
                    </TableFooter>
                    </Table>
                </TableContainer>
        </Container>
      </ThemeProvider>
    );
}