import { cursosServices } from "../../Service/cursos-service"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from "@mui/material";

const tablaData = await cursosServices.listaCursos();
const Tabla = () => {
    const rows = tablaData.Horarios;
    return (
        <Box sx={{ padding: "2rem" }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, padding: "2rem" }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Codigo</TableCell>
                            <TableCell align="center">Inicio</TableCell>
                            <TableCell align="center">Fin</TableCell>
                            <TableCell align="center">Dia</TableCell>
                            <TableCell align="center">Horas</TableCell>
                            <TableCell align="center">Curso</TableCell>
                            <TableCell align="center">Estudiantes</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => {
                            return <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" align="center">
                                    {row.idCurso}
                                </TableCell>
                                <TableCell align="center">{row.fechaInicio}</TableCell>
                                <TableCell align="center">{row.fechaFin}</TableCell>
                                <TableCell align="center">{row.dia}</TableCell>
                                <TableCell align="center">{row.horas}</TableCell>
                                <TableCell align="center">{row.curso.nombre}</TableCell>
                                <TableCell align="center">{row.estudiantes}</TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}
export default Tabla