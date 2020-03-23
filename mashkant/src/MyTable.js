import React, {useState, useEffect} from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import Row from "./Rows"


const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    margin: theme.spacing(1),
  },

  fab:{
    margin:"10px"
  },

  select:{
  paddingBottom:"0px"

  }


}));



export default function MyTable() {
  const classes=useStyles();
  const [info, setInfo]=useState([{route:"",period:"",interest:"",madad:""},{route:"",period:"",interest:"",madad:""},{route:"",period:"",interest:"",madad:""},{route:"",period:"",interest:"",madad:""},{route:"",period:"",interest:"",madad:""},{route:"",period:"",interest:"",madad:""}]);
  const [rows, setRows]=useState([0]);

  useEffect(()=>{console.log(info)})
 
  function handleRowChange(row,cell,value){    
    let temp = info.map(l => Object.assign({}, l));   
    temp[row][cell]=value
      setInfo(temp);
  }

   function handleAdd(){
    let newRow=rows.length; 
    setRows([...rows, newRow])
      return(rows)
    }

  
  return (
    <div style={{maxWidth:"1200px",margin: "0 auto"}}>
    
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
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

     {rows.map((row)=>(
     <Row info={info} handleRowChange={handleRowChange} rowKey={row} key={row}></Row>
     )
     )}
        </TableBody>
      </Table>

      <div style={{float:'right'}}>
      <Fab variant="extended" className={classes.fab} onClick={handleAdd} color="primary" aria-label="add" >
        Add a Row
        <AddIcon/>
      </Fab>
      
      <Fab variant="extended" className={classes.fab} color="primary" aria-label="add" >
      Submit
        <ChevronRightIcon/>
      </Fab>
      </div>
    </TableContainer>
    </div>
  );
}