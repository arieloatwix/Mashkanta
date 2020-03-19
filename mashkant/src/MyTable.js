import React, {useState, useEffect} from 'react';
//import { makeStyles } from '@material-ui/core/styles';
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
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';


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

  const classes = useStyles();

  const [rows, setRows]=useState([0]);
 
  
  const Row = (rowKey) => {
    const[info,setInfo]=useState("מפצ ");
    function handleRowChange(e,v){
      
      setInfo(v);
      console.log(info);
      }
   
    return(
      <TableRow>
        <TableCell className={classes.select}>
        <Select labelId="label" id="select" value="20">
    <MenuItem id="standard-basic1" value="10">Ten</MenuItem>
    <MenuItem value="20">Twenty</MenuItem>
  </Select>  
  </TableCell>
        <TableCell><TextField onChange={e=>{e.preventDefault(); handleRowChange(e,e.target.value)}} key="1" id={Math.random()+ "standard-basic1"} label="orel" value={info}></TextField> </TableCell> 
        <TableCell><TextField  key="2" id={Math.random()+ "standard-basic1"} label="Standard"/> </TableCell>
        <TableCell><TextField  key="3" id={Math.random()+ "standard-basic1"} label="Standard"/> </TableCell> 
        <TableCell><TextField  key="4" id={Math.random()+ "standard-basic1"} label="Standard"/> </TableCell> 
       </TableRow>
  )
  }
  


 
   function handleAdd(){
    let newRow=rows.length; 
    setRows([...rows, newRow])
      return(rows)
    }

    




 /*  const classes = useStyles(); */
  
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
     <Row rowKey={row} key={1}></Row>
     )
     )}
     
        </TableBody>
      </Table>
      <div style={{float:'right'}}>
      <Fab variant="extended" className={classes.fab} onClick={handleAdd} color="primary" aria-label="add" >
        Add a Row
        <AddIcon/>
      </Fab>
      
      <Fab variant="extended" className={classes.fab} onClick={handleAdd} color="primary" aria-label="add" >
      Submit
        <ChevronRightIcon/>
      </Fab>
      </div>
    </TableContainer>
    </div>
  );
}