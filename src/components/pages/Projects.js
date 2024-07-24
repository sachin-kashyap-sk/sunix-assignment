import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { projects } from "../../Data/HomeData";
import { project } from "../../Data/ProjectData";
import classes from "../styleContainer/Project.module.css";
const Projects = () => {
  const navigation = useNavigate();
  const { id } = useParams();
  const selectedProject = projects.find((item) => String(item.id) === id);

  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.btnContainer}>
        <Button
          className={classes.btn}
          onClick={() => navigation("/")}
          variant="outlined"
          startIcon={<ArrowBackIcon />}
        >
          Back
        </Button>
      </Box>

      <Box className={classes.tableContainer}>
        <Box className={classes.text}>
          <p>Selected File Detail </p>
        </Box>
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
              <TableRow>
                <TableCell className={classes.nameText}>
                  {selectedProject.name}
                </TableCell>
                <TableCell className={classes.commonText}>
                  {selectedProject.role}
                </TableCell>
                <TableCell className={classes.commonText}>
                  {selectedProject.createDate}
                </TableCell>
                <TableCell className={classes.commonText}>
                  {selectedProject.status}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>NAME</TableCell>
              <TableCell>STATUS</TableCell>
              <TableCell>PRIORITY</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {project.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  className={classes.nameText}
                >
                  {item.name}
                </TableCell>
                <TableCell className={classes.commonText}>
                  {item.status}
                </TableCell>
                <TableCell className={classes.commonText}>
                  {item.priority}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Projects;
