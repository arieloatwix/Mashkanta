import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


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



export default function Row ({rowKey,handleRowChange,info}){
  
  const classes=useStyles();
  return(
    <TableRow key={rowKey}>
      
      <TableCell><TextField onChange={e=>{handleRowChange(rowKey,"sum",e.target.value)}} key={rowKey+"sum"}  id={Math.random()+ "standard-basic1"} label="sum" value={info[rowKey].sum}></TextField> </TableCell> 
      <TableCell className={classes.select}>
        <Select labelId="label" id="select" onChange={e=>{handleRowChange(rowKey,"route",e.target.value)}} label="choose" value={info[rowKey].route}>
          <MenuItem   value={1}>prime</MenuItem>
          <MenuItem   value={2}>mishtana tzmuda</MenuItem>
          <MenuItem   value={3}>mishtana lo tzmuda</MenuItem>
          <MenuItem   value={4}>const</MenuItem>
          <MenuItem   value={5}>const lo tzamud</MenuItem>
        </Select>  
      </TableCell>
      <TableCell><TextField onChange={e=>{handleRowChange(rowKey,"period",e.target.value)}}  key={rowKey+"period"} id={Math.random()+ "standard-basic1"} label="Standard" value={info[rowKey].period}/> </TableCell>
      <TableCell><TextField onChange={e=>{handleRowChange(rowKey,"interest",e.target.value)}}  key={rowKey+"interest"} id={Math.random()+ "standard-basic1"} label="Standard" value={info[rowKey].interest}/> </TableCell> 
      <TableCell><TextField onChange={e=>{handleRowChange(rowKey,"madad",e.target.value)}}  key={rowKey+"madad"} id={Math.random()+ "standard-basic1"} label="Standard" value={info[rowKey].madad }/> </TableCell> 
     </TableRow>
)
}




