import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { projects } from "../../Data/HomeData";
import classes from "../styleContainer/Home.module.css";

const Home = () => {
  const navigation = useNavigate();

  return (
    <Box className={classes.mainContainer}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>NAME</TableCell>
              <TableCell>ROLE</TableCell>
              <TableCell>CREATION DATE</TableCell>
              <TableCell>STATUS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((item) => (
              <TableRow
                className={classes.table}
                onClick={() => navigation(`/projects/${item.id}`)}
                key={item.id}
              >
                <TableCell
                  component="th"
                  scope="row"
                  className={classes.nameText}
                >
                  {item.name}
                </TableCell>
                <TableCell className={classes.commonText}>
                  {item.role}
                </TableCell>
                <TableCell className={classes.commonText}>
                  {item.createDate}
                </TableCell>
                <TableCell className={classes.commonText}>
                  {item.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Home;
