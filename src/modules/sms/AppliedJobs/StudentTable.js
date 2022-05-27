import React,{useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const TableColumns = [
  { id: 'name', label: 'S.NO', minWidth: 170 },
  { id: 'code', label: 'COMPANY', minWidth: 100 },
  {
    id: 'population',
    label: 'Profile',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Location',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Date Applied',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

const TableDataCreated = (name, code, population, size) => {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  TableDataCreated('India', 'IN', 1324171354, 3287263),
  TableDataCreated('China', 'CN', 1403500365, 9596961),
  TableDataCreated('Italy', 'IT', 60483973, 301340),
  TableDataCreated('United States', 'US', 327167434, 9833520),
  TableDataCreated('Canada', 'CA', 37602103, 9984670),
  TableDataCreated('Australia', 'AU', 25475400, 7692024),
  TableDataCreated('Germany', 'DE', 83019200, 357578),
  TableDataCreated('Ireland', 'IE', 4857000, 70273),
  TableDataCreated('Mexico', 'MX', 126577691, 1972550),
  TableDataCreated('Japan', 'JP', 126317000, 377973),
  TableDataCreated('France', 'FR', 67022000, 640679),
  TableDataCreated('United Kingdom', 'GB', 67545757, 242495),
  TableDataCreated('Russia', 'RU', 146793744, 17098246),
  TableDataCreated('Nigeria', 'NG', 200962417, 923768),
  TableDataCreated('Brazil', 'BR', 210147125, 8515767),
];

const StudentTable = () => {
  const [pageNum, setPageNum] = useState(0);
  const [rowsPerPageNum, setRowsPerPageNum] = useState(10);

  const handlePageChange = (event, newPage) => {
    setPageNum(newPage);
  };

  const handleRowsPerPage = (event) => {
    setRowsPerPageNum(+event.target.value);
    setPageNum(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {TableColumns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(pageNum * rowsPerPageNum, pageNum * rowsPerPageNum + rowsPerPageNum)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {TableColumns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPageNum={rowsPerPageNum}
        pageNum={pageNum}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPage}
      />
    </Paper>
  );
}

export default StudentTable;