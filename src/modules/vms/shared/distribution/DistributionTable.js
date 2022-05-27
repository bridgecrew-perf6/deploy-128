import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import AddNetworkModal from './AddNetworkModal';
import MenuPopupState from './MenuPopupState';
// import RemoveCsv from './RemoveCsv';
const columns = [
  { field: 'id', headerName: 'S.No', width: 103 },
  {
    field: 'FirmName',
    headerName: 'Firm Name',
    width: 240,
    editable: true,
  },
  {
    field: 'NetworkType',
    headerName: 'Network Type',
    width: 147,
    editable: true,
  },
  {
    field: 'Email',
    headerName: 'Email ID',
    width: 266,
    editable: true,
  },

  {
    field: 'contact',
    headerName: 'Contact Number',
    width: 181,
    editable: true,
  },

  {
    field: 'Branch',
    headerName: 'Branch Address',
    type: 'number',
    width: 220,
    editable: true,
  },
];




const originalRows = [
  { id: 1, FirmName: 'Snow', NetworkType: 'Jon', Email: 'salman@gmail.com', contact: 9810283824, Branch: 'metro world' },
  { id: 2, FirmName: 'low', NetworkType: 'loan', Email: 'arman@gmail.com', contact: 9810283834, Branch: 'metro world' },
  { id: 3, FirmName: 'wo', NetworkType: 'phone', Email: 'pankajudash@gmail.com', contact: 9830283824, Branch: 'metro world' },
  { id: 4, FirmName: 'cow', NetworkType: 'tone', Email: 'arjitsingh@gmail.com', contact: 9810383824, Branch: 'metro world' },
  { id: 5, FirmName: 'doe', NetworkType: 'don', Email: 'shushantsingh@gmail.com', contact: 983283824, Branch: 'metro world' },
  { id: 6, FirmName: 'no', NetworkType: 'gone', Email: 'arminder@gmail.com', contact: 9810283324, Branch: 'metro world' }
];




export default function Datagrid() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <div className="container-fluid dis-container">
        <div className="container-main-pms">
          {/* heading */}
          <div className="row pad_pms">
            <div className="col-8">
              <div className="row dis-title">Distribution Network</div>
              <div className="row"><div className="DistributionHeadline"></div></div>
            </div>
            <div className="col-4 pr-0">
              <button type="button" className="SubmitTopButtonDis float-right">SUBMIT</button>
            </div>

          </div>
          {/* heading */}


          <div className='grid-row table-flex'>
            {/* info */}
            <div className='info-box1'>
              <div className='info-pad'>
                <div className='totalbranch'>Total Branches : 2</div>
              </div>
            </div>
            <div className='info-box2'>
              <div className='info-pad'>
                <div className='selected-items'>Selected : 2</div>
              </div>
            </div>
            {/* searchbox */}
            <div className='search-box-dis'>
                <input className="NoSubmitDis hidden-search-box" type="search" placeholder="Search" />
            </div>
            {/* filter */}
            <div className='filter-box'>
              <div>
              <table className='filter_table'>
                  <th className='hidden-search-icon'><button className='buttons border border-dark'><img className='logo' src='/icons/search.svg' /><span className='hidden-text'> SORT</span></button></th>
                  <th><button className='buttons'><span className='hidden-text'> <MenuPopupState iconName = "SORT" icon="/icons/sort.svg"/></span></button></th>
                  <th className='hide-filter'><button className='buttons'><span className='hidden-text'><MenuPopupState iconName = "FILTER" icon="icons/filter.svg"/></span></button></th>
                  <th><button className='buttons'><span onClick={handleOpen} className='buttons'><img className='logo' src='/icons/plus.svg' /><b className='hidden-text'> ADD NEW</b></span></button></th> 
                </table>
              </div>
            </div>
          </div>
          <div className='grid-container'>
            <DataGrid
              rowHeight={90}
              rows={originalRows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              // disableColumnFilter
              disableSelectionOnClick
              isCellEditable={(params) => params.row.age % 2 === 0}
              experimentalFeatures={{ newEditingApi: true }}
            />
          </div>
        </div>
      </div>
      {open ? <AddNetworkModal handleClose={handleClose} handleOpen={handleOpen} open={open} /> : null}
       {/* <RemoveCsv /> */}
    </>
  );
}




