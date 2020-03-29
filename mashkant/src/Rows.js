import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  extendedIcon: {
    margin: theme.spacing(1)
  },

  fab: {
    margin: "10px"
  },

  select: {
    minWidth: 150,

    paddingLeft: "10px",
    textAlign: "left"
  },
  label: {
    display: "inline-block",
    marginRight: "-55px"
  },
  helper: {
    position: "absolute",
    top: "43px",
    color: "red"
  }
}));

export default function Row({ rowKey, handleRowChange, info }) {
  const classes = useStyles();
  return (
    <TableRow key={rowKey}>
      <TableCell>
        <TextField
          onChange={e => {
            handleRowChange(rowKey, "sum", e.target.value);
          }}
          key={rowKey + "sum"}
          id={Math.random() + "standard-basic1"}
          label="sum"
          value={info[rowKey].sum}
        ></TextField>{" "}
      </TableCell>
      <TableCell className={classes.select}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple" className={classes.label}>
            Choose
          </InputLabel>
          <Select
            className={classes.select}
            labelId="label"
            id="select"
            inputProps={{
              name: "age",
              id: "age-native-simple"
            }}
            onChange={e => {
              handleRowChange(rowKey, "route", e.target.value);
            }}
            value={info[rowKey].route}
          >
            <MenuItem value={1}>prime</MenuItem>
            <MenuItem value={2}>mishtana tzmuda</MenuItem>
            <MenuItem value={3}>mishtana lo tzmuda</MenuItem>
            <MenuItem value={4}>const</MenuItem>
            <MenuItem value={5}>const lo tzamud</MenuItem>
          </Select>
        </FormControl>
      </TableCell>

      <TableCell>
        <TextField
          onChange={e => {
            handleRowChange(rowKey, "period", e.target.value);
          }}
          key={rowKey + "period"}
          id={Math.random() + "standard-basic1"}
          label="Standard"
          value={info[rowKey].period}
        />{" "}
      </TableCell>
      <TableCell>
        <TextField
          onChange={e => {
            handleRowChange(rowKey, "interest", e.target.value);
          }}
          key={rowKey + "interest"}
          id={Math.random() + "standard-basic1"}
          label="Standard"
          value={info[rowKey].interest}
        />{" "}
      </TableCell>
      <TableCell>
        <FormControl className={classes.formControl}>
          <TextField
            onChange={e => {
              handleRowChange(rowKey, "madad", e.target.value);
            }}
            key={rowKey + "madad"}
            id={Math.random() + "standard-basic1"}
            label="Standard"
            value={info[rowKey].madad}
          />
          {info[rowKey].madad === 0 && (
            <FormHelperText className={classes.helper}>
              No madad for you kapara
            </FormHelperText>
          )}
        </FormControl>
      </TableCell>
    </TableRow>
  );
}
