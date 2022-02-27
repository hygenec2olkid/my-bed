import { useState } from "react";
import HotelRoundedIcon from "@mui/icons-material/HotelRounded";
import {
  Container,
  Grid,
  Typography,
  Dialog,
  Tooltip,
  Paper,
  TableContainer,
  TableBody,
  TableCell,
  TableRow,
  DialogTitle,
} from "@mui/material";



function SimpleDialog(props) {
  const { onClose, selectedPatient, open } = props;
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>ข้อมูลผู้ป่วย</DialogTitle>

      <TableContainer component={Paper}>
        <TableBody>
          <TableRow>
            <TableCell align="center"> รหัสผู้ป่วย: </TableCell>
            <TableCell align="left">
              {" "}
              {selectedPatient && selectedPatient.CMnumber}{" "}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center"> ชื่อ:</TableCell>
            <TableCell align="left">
              {" "}
              {selectedPatient && selectedPatient.name}{" "}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center"> เพศ:</TableCell>
            <TableCell align="left">
              {" "}
              {selectedPatient && selectedPatient.gender}{" "}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center"> เบอร์โทรศัพท์:</TableCell>
            <TableCell align="left">
              {" "}
              {selectedPatient && selectedPatient.tel}{" "}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center"> วันที่เข้ารับการรักษา:</TableCell>
            <TableCell align="left">
              {" "}
              {selectedPatient && selectedPatient.admissiondate}{" "}
            </TableCell>
          </TableRow>
        </TableBody>
      </TableContainer>
    </Dialog>
  );
}

function App() {
  const [open, setOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState();
  const showPatient = (bed) => {
    setSelectedPatient(bed);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const numsOfBed = 24
  let patients = [
    {
      id: "B01",
      avaliable: true,
      name: "phawat phutharaporn",
      tel: "0842318463",
      CMnumber: "1645912695322",
      gender: "ชาย",
      admissiondate: "27/2/2022",
    },
    {
      id: "B02",
      avaliable: true,
      name: "เมธา ชัยวุฒิ",
      tel: "0969219359",
      CMnumber: "1645953205533",
      gender: "ชาย",
      admissiondate: "9/2/2022",
    }

  ];
  const numsOfAvaliableBed = numsOfBed - patients.length
  for(let i=0; i<numsOfAvaliableBed; i++) {
    patients.push({
      id: patients.length + i + 1,
      avaliable: false
    })
  }
  const avaliableBed = patients.filter(
    (bed) => !bed.avaliable === true
  ).length;
  console.log(patients)
  return (
    <Container
      maxWidth="xl"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#F5F5F5",
        minHeight: "100vh",
      }}
    >

        <Typography variant="h4">
          อัพเดทจํานวนเตียงและรายงานจํานวนเตียงทีว่าง
        </Typography>


      <Grid
        container
        maxWidth="sm"
        style={{
          paddingLeft: 55,
          paddingRight: 55,
        }}
      >
        {patients.map((bed, index) => (
          <Grid
            key={bed.id}
            item
            xs={3}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {bed.avaliable ? (
              <>
                <HotelRoundedIcon color="disabled" sx={{ fontSize: 72 }} />

                <Tooltip
                  title={bed.name}
                  onClick={() => {
                    showPatient(bed);
                  }}
                >
                  <Typography
                    style={{
                      top: -50,
                      right: -14,
                      color: "white",
                      position: "relative",
                    }}
                  >
                    B{index+1}
                  </Typography>
                </Tooltip>
              </>
            ) : (
              <>
                <HotelRoundedIcon color="success" sx={{ fontSize: 72 }} />
                <Typography
                  style={{
                    top: -50,
                    right: -14,
                    color: "white",
                    position: "relative",
                  }}
                >
                  B{index+1}
                </Typography>
              </>
            )}
          </Grid>
        ))}
      </Grid>
      <Typography>
        Avaliable: {avaliableBed}/{numsOfBed}
      </Typography>
      <SimpleDialog
        selectedPatient={selectedPatient}
        open={open}
        onClose={handleClose}
      />
    </Container>
  );
}

export default App;
