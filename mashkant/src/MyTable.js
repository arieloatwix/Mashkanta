import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Fab from '@material-ui/core/Fab';

import AddIcon from '@material-ui/icons/Add';




const useStyles = makeStyles({
  table: {

  },
});



const Row = () => {
  return(
    <TableRow>
      <TableCell>
      <Select labelId="label" id="select" value="20">
  <MenuItem value="10">Ten</MenuItem>
  <MenuItem value="20">Twenty</MenuItem>
</Select>  
</TableCell>
      <TableCell><TextField id="standard-basic" label="orel" /> </TableCell> 
      <TableCell><TextField id="standard-basic" label="Standard" /> </TableCell>
      <TableCell><TextField id="standard-basic" label="Standard" /> </TableCell> 
      <TableCell><TextField id="standard-basic" label="Standard" /> </TableCell> 
     </TableRow>
)
}

export default function MyTable() {

 

   

  const [rows, setRows]=useState([1])

  const handleAdd=()=>{

    let tempRows=rows; 
    let newRow=1; 
    tempRows.push(newRow); 
    setRows(tempRows)
  return(rows)
    }

useEffect(()=>{console.log(rows)},[rows]);

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sum</TableCell>
          <TableCell >route</TableCell>
            <TableCell >period</TableCell>
            <TableCell >interest</TableCell>
            <TableCell >Madad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
     {rows.map( (row)=>(
     <Row key = {row}></Row>
     )
     )}
     
     
        
        </TableBody>
      </Table>
      <Fab color="primary" aria-label="add" onClick={handleAdd}>
        <AddIcon />
      </Fab>
    </TableContainer>
  );
}