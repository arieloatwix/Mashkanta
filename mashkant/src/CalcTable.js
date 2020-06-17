import React, { useState, useEffect } from "react";
//import { makeStyles } from '@material-ui/core/styles';
//Material
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import Row from "./CalcTableRow";
import { submit } from "./redux/actions/table";

//Redux

import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    margin: theme.spacing(1),
  },

  fab: {
    margin: "10px",
  },

  select: {
    paddingBottom: "0px",
  },
  head: {
    fontWeight: "600",
  },
}));

const MyTable = ({ submit }) => {
  const classes = useStyles();
  const [info, setInfo] = useState([
    { sum: "", route: "", period: "", interest: "", madad: "" },
  ]);
  const [rows, setRows] = useState([0]);

  useEffect(() => {});

  function handleRowChange(row, cell, value) {
    let temp = info.map((l) => Object.assign({}, l));
    temp[row][cell] = value;
    if (
      temp[row].route === 1 ||
      temp[row].route === 4 ||
      temp[row].route === 5
    ) {
      temp[row].madad = 0;
    }
    setInfo(temp);
  }

  function handleAdd() {
    let newRow = rows.length;
    setRows([...rows, newRow]);
    return rows;
  }

  function handleSubmit() {
    submit(info);
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.head}>Route Sum</TableCell>
              <TableCell className={classes.head}>route</TableCell>
              <TableCell className={classes.head}>period</TableCell>
              <TableCell className={classes.head}>interest</TableCell>
              <TableCell className={classes.head}>Madad</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row
                info={info}
                handleRowChange={handleRowChange}
                rowKey={row}
                key={row}
              ></Row>
            ))}
          </TableBody>
        </Table>

        <div style={{ float: "right" }}>
          <Fab
            variant="extended"
            className={classes.fab}
            onClick={handleAdd}
            color="primary"
            aria-label="add"
          >
            Add a Row
            <AddIcon />
          </Fab>

          <Fab
            onClick={handleSubmit}
            variant="extended"
            className={classes.fab}
            color="primary"
            aria-label="add"
          >
            Submit
            <ChevronRightIcon />
          </Fab>
        </div>
      </TableContainer>
    </div>
  );
};
export default connect(null, { submit })(MyTable);
