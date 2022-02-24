import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Button } from '@material-ui/core';
import CelebrationIcon from '@mui/icons-material/Celebration';
import CircularProgress from '@mui/material/CircularProgress';
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

const backUpRes = [{"id":1,"userCookieId":"gdksaj284k_823n2v","quizTotalScore":"{\"total\": 1500, \"awareness\": 300, \"spending\": 300, \"waterEnergy\": 300, \"foodWaste\": 300, \"travel\": 300}","userEmail":"greenchange@gmail.com","quizProfile":"Tree In The Forest","createdAt":"2021-10-25T16:33:51.000Z","updatedAt":"2021-10-25T16:42:55.000Z"},{"id":2,"userCookieId":"dmcjgu159u_148r7f","quizTotalScore":"{\"total\": 2000, \"awareness\": 300, \"spending\": 400, \"waterEnergy\": 500, \"foodWaste\": 500, \"travel\": 300}","userEmail":"climatetest@gmail.com","quizProfile":"Climate Change Advocate","createdAt":"2021-10-25T16:35:57.000Z","updatedAt":"2021-10-25T16:35:57.000Z"},{"id":3,"userCookieId":"bndgsy285u_475t9f","quizTotalScore":"{\"total\": 1000, \"awareness\": 200, \"spending\": 300, \"waterEnergy\": 100, \"foodWaste\": 200, \"travel\": 200}","userEmail":"bricksclimate@gmail.com","quizProfile":"Growing Planet","createdAt":"2021-10-25T16:37:44.000Z","updatedAt":"2021-10-25T16:37:44.000Z"},{"id":4,"userCookieId":"cnmert576p_123d1c","quizTotalScore":"{\"total\": 1600, \"awareness\": 300, \"spending\": 300, \"waterEnergy\": 500, \"foodWaste\": 200, \"travel\": 300}","userEmail":"bricksclimate@gmail.com","quizProfile":"Tree In The Forest","createdAt":"2021-10-25T16:38:59.000Z","updatedAt":"2021-10-25T16:38:59.000Z"},{"id":5,"userCookieId":"rkwvkt296q_865d2e","quizTotalScore":"{\"total\": 2500, \"awareness\": 500, \"spending\": 500, \"waterEnergy\": 500, \"foodWaste\": 500, \"travel\": 500}","userEmail":"forenvironment@gmail.com","quizProfile":"Planet Protector","createdAt":"2021-10-25T16:40:51.000Z","updatedAt":"2021-10-25T16:40:51.000Z"},{"id":12,"userCookieId":"John Song","quizTotalScore":"{\"total\":\"220\"}","userEmail":"johnsong@gmail.com","quizProfile":"undefined","createdAt":"2021-11-13T09:34:01.000Z","updatedAt":"2021-11-13T09:34:01.000Z"},{"id":13,"userCookieId":"John Song","quizTotalScore":"{\"total\":\"220\"}","userEmail":"johnsong@gmail.com","quizProfile":"undefined","createdAt":"2021-11-13T09:36:38.000Z","updatedAt":"2021-11-13T09:36:38.000Z"},{"id":14,"userCookieId":"John Song","quizTotalScore":"{\"total\":\"180\"}","userEmail":"johnsong@gmail.com","quizProfile":"undefined","createdAt":"2021-11-13T09:38:52.000Z","updatedAt":"2021-11-13T09:38:52.000Z"},{"id":15,"userCookieId":"John Song","quizTotalScore":"{\"total\":\"190\"}","userEmail":"johnsong@gmail.com","quizProfile":"undefined","createdAt":"2021-11-13T09:39:52.000Z","updatedAt":"2021-11-13T09:39:52.000Z"},{"id":16,"userCookieId":"John Song","quizTotalScore":"{\"total\":\"115\"}","userEmail":"johnsong@gmail.com","quizProfile":"undefined","createdAt":"2021-11-13T09:41:25.000Z","updatedAt":"2021-11-13T09:41:25.000Z"},{"id":17,"userCookieId":"John Song","quizTotalScore":"{\"total\":\"155\"}","userEmail":"johnsong@gmail.com","quizProfile":"undefined","createdAt":"2021-11-13T09:42:41.000Z","updatedAt":"2021-11-13T09:42:41.000Z"},{"id":18,"userCookieId":"John Song","quizTotalScore":"{\"total\":\"115\"}","userEmail":"johnsong@gmail.com","quizProfile":"undefined","createdAt":"2021-11-13T09:43:20.000Z","updatedAt":"2021-11-13T09:43:20.000Z"},{"id":19,"userCookieId":"John Song","quizTotalScore":"{\"total\":\"115\"}","userEmail":"johnsong@gmail.com","quizProfile":"Tree in the Forest","createdAt":"2021-11-13T09:44:30.000Z","updatedAt":"2021-11-13T09:44:30.000Z"},{"id":20,"userCookieId":"John Song","quizTotalScore":"{\"total\":\"115\"}","userEmail":"johnsong@gmail.com","quizProfile":"Planet Protector","createdAt":"2021-11-13T10:07:52.000Z","updatedAt":"2021-11-13T10:07:52.000Z"}];

const QuizLeaderboard = () => {
    const [data, setData] = useState(null);
    const [topTen, setTopTen] = useState(null);
    const [refresh, setRefresh] = useState(true);
    const [loading, setLoading] = useState(true);
    var arr = [];

    const refreshLeaderboard = () => {
        setRefresh(!refresh);
        fetch('https://7pbmplsc5c.execute-api.us-east-1.amazonaws.com/latest/api/all')
            .then(res => {
                setLoading(true);
                return(res.json());
            })
            .then(a => {
                if(a != null || a.length >= 1) {
                    a.forEach(entry => {
                        let newScore = 0;
                        if (typeof(entry.quizTotalScore)=='string') {
                            try {
                                newScore = JSON.parse(entry.quizTotalScore.replace(/(?:\\[rn])+/g, '')).total;
                                // console.log(JSON.parse(entry.quizTotalScore.replace(/(?:\\[rn])+/g, '')).total)
                            } catch (e) {
                                console.log(e)
                            }
                        } else {
                            try {
                                newScore = JSON.parse(entry.quizTotalScore).total
                            } catch (e) {
                                console.log(e)
                            }
                        }
                        
                        let newEntry = {
                            id: entry.id,
                            name: entry.userCookieId,
                            score: newScore
                        };
    
                        arr.push(newEntry);
                    });
                    arr.sort((a, b) => b.score - a.score);
                    console.log(arr)
                    setData(arr);
                    setLoading(false);
                } else {
                    setLoading(false);
                    return
                }
            })
            .catch(error => {
                console.log('error: \n', error);
                return;
            })
    }
    
    const backupLeaderboard = () => {
        let rank = 1;
        backUpRes.forEach(entry => {
            let newScore = 0;
            if (typeof(entry.quizTotalScore)=='string') {
                try {
                    newScore = JSON.parse(entry.quizTotalScore.replace(/(?:\\[rn])+/g, '')).total;
                    // console.log(JSON.parse(entry.quizTotalScore.replace(/(?:\\[rn])+/g, '')).total)
                } catch (e) {
                    console.log(e)
                }
            } else {
                try {
                    newScore = JSON.parse(entry.quizTotalScore).total
                } catch (e) {
                    console.log(e)
                }
            }
            
            let newEntry = {
                id: entry.id,
                name: entry.userCookieId,
                score: newScore
            };
            arr.push(newEntry);
        });
        arr.sort((a, b) => b.score - a.score);
        setData(arr);
        setRefresh(false);
    }

    useEffect(()=> {
        refreshLeaderboard();
        // backupLeaderboard();
    },[])

    const columns = [
        // { id: 'rank', label: 'Rank', minWidth: 30, align: 'left' },
        { id: 'name', label: 'Name', align: 'left' },
        { id: 'score', label: 'Score', align: 'right' },
    ]

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        // <div>
        //     <button onClick={backupLeaderboard}>Refresh Leaderboard</button>
        //     <TableContainer component={Paper}>
        //     <Table sx={{ minWidth: 650 }} aria-label="simple table">
        //     <TableHead>
        //         <TableRow>
        //             <TableCell>Name</TableCell>
        //             <TableCell>Score</TableCell>
        //         </TableRow>
        //     </TableHead>
        //     <TableBody>
        //         {data && data.map(item => {
        //             return(
        //                 <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        //                     <TableCell>
        //                         {item.name}
        //                     </TableCell>
        //                     <TableCell>
        //                         {item.score}
        //                     </TableCell>
        //                 </TableRow>
        //             )
        //         })}
        //     </TableBody>
        //     </Table>
        //     </TableContainer>
        // </div>
        <div style={{backgroundColor: "white", borderRadius: 3, width: '55%'}}>
            <h1 style={{fontFamily: 'Montserrat'}}><CelebrationIcon />Leaderboard</h1>
            <p style={{fontFamily: 'Open Sans'}}>...And here are the winners!</p>
        <Button onClick={refreshLeaderboard} style={{textTransform: 'none', color: "grey"}}>
            <RefreshIcon />
            Refresh Leaderboard
        </Button>
            {loading && 
            <Box sx={{ display: 'flex' }} style={{placeContent: 'center'}}>
                <CircularProgress color="inherit"/>
            </Box>
            }
            {!loading && <TableContainer component={Paper}>
            <Table sx={{ minWidth: 0 }} aria-label="custom pagination table">
                <TableHead>
                <TableRow>
                {columns.map((column) => (
                    <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    >
                    <b>{column.label}</b>
                    </TableCell>
                ))}
                </TableRow>
                </TableHead>
                <TableBody>
                {(rowsPerPage > 0
                    ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : data
                ).map((row) => (
                    <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="right">
                        {row.score}
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
                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    colSpan={3}
                    count={data.length}
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
            </TableContainer>}
        </div>
    )
};

export default QuizLeaderboard;