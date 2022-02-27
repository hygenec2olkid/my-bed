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
            <TableCell align="center"> อายุ:</TableCell>
            <TableCell align="left">
              {" "}
              {selectedPatient && selectedPatient.age}{" "}
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

  const bedStatus = [
    {
      id: "B01",
      avaliable: false,
      name: "wirapat Prighphet",
      tel: "0661128527",
      CMnumber: "CM30386",
      age: 22,
      gender: "male",
      admissiondate: "27/2/2022",
    },
    {
      id: "B02",
      avaliable: true,
      name: "Pakin",
      tel: "0637187419",
      CMnumber: "ATK30386",
      age: 21,
      gender: "male",
      admissiondate: "27/2/2022",
    },
    {
      id: "B03",
      avaliable: false,
      name: "Tanawat Minesom",
      tel: "0832685110",
      CMnumber: "CM19403",
      age: 20,
      gender: "male",
      admissiondate: "27/2/2022",
    },
    {
      id: "B04",
      avaliable: true,
      name: "Joshua Johnson",
      tel: "(272)-640-8604",
      CMnumber: "CM30386",
      age: 63,
      gender: "male",
      admissiondate: "27/2/2022",
    },
    {
      id: "B05",
      avaliable: true,
      name: "Madame Leonora",
      tel: "075 157 61 81",
      CMnumber: "CM30386",
      age: 49,
      gender: "female",
      admissiondate: "27/2/2022",
    },
    {
      id: "B06",
      avaliable: false,
      name: "Constance Barrett",
      tel: "0451-718-539",
      CMnumber: "CM30386",
      age: 73,
      gender: "female",
      admissiondate: "27/2/2022",
    },
    {
      id: "B07",
      avaliable: true,
      name: "Ron Weaver",
      tel: "(926)-864-8063",
      CMnumber: "CM30386",
      age: 52,
      gender: "male",
      admissiondate: "27/2/2022",
    },
    {
      id: "B08",
      avaliable: true,
      name: "Adelina Øvergård",
      tel: "96265155",
      CMnumber: "CM30386",
      age: 26,
      gender: "female",
      admissiondate: "27/2/2022",
    },
    {
      id: "B09",
      avaliable: false,
      name: "Abdul Stokke",
      tel: "48827839",
      CMnumber: "CM30386",
      age: 54,
      gender: "male",
      admissiondate: "27/2/2022",
    },
    {
      id: "B10",
      avaliable: true,
      name: "Wade Lane",
      tel: "0740-139-354",
      CMnumber: "CM30386",
      age: 44,
      gender: "male",
      admissiondate: "27/2/2022",
    },
    {
      id: "B11",
      avaliable: true,
      name: "David Newman",
      tel: "081-946-1820",
      CMnumber: "CM30386",
      age: 77,
      gender: "male",
      admissiondate: "27/2/2022",
    },
    {
      id: "B12",
      avaliable: false,
      name: "Koray Küçükler",
      tel: "(956)-652-0115",
      CMnumber: "CM30386",
      age: 77,
      gender: "male",
      admissiondate: "27/2/2022",
    },
    {
      id: "B13",
      avaliable: true,
      name: "Beatrice Pierre",
      tel: "075 202 81 69",
      CMnumber: "CM30386",
      age: 26,
      gender: "female",
      admissiondate: "27/2/2022",
    },
    {
      id: "B14",
      avaliable: false,
      name: "Mae Young",
      tel: "(608)-571-1255",
      CMnumber: "CM30386",
      age: 61,
      gender: "female",
      admissiondate: "27/2/2022",
    },
    {
      id: "B15",
      avaliable: true,
      name: "Kelly Ramirez",
      tel: "0752-498-834",
      CMnumber: "CM30386",
      age: 70,
      gender: "female",
      admissiondate: "27/2/2022",
    },
    {
      id: "B16",
      avaliable: false,
      name: "Alma Mortensen",
      tel: "63615413",
      CMnumber: "CM30386",
      age: 77,
      gender: "female",
      admissiondate: "27/2/2022",
    },
    {
      id: "B17",
      avaliable: true,
      name: "Vincent Rivera",
      tel: "(682)-473-7996",
      CMnumber: "CM30386",
      age: 46,
      gender: "male",
      admissiondate: "27/2/2022",
    },
    {
      id: "B18",
      avaliable: false,
      name: "Samuel Schaper",
      tel: "0173-9320648",
      CMnumber: "CM30386",
      age: 55,
      gender: "male",
      admissiondate: "27/2/2022",
    },
    {
      id: "B19",
      avaliable: true,
      name: "Nieves Ferrer",
      tel: "625-515-774",
      CMnumber: "CM30386",
      age: 65,
      gender: "female",
      admissiondate: "27/2/2022",
    },
    {
      id: "B20",
      avaliable: false,
      name: "Lydia Carpenter",
      tel: "(357)-954-4423",
      CMnumber: "CM30386",
      age: 65,
      gender: "female",
      admissiondate: "27/2/2022",
    },
    {
      id: "B21",
      avaliable: true,
      name: "Veronika Engevik",
      tel: "48211794",
      CMnumber: "CM30386",
      age: 50,
      gender: "female",
      admissiondate: "27/2/2022",
    },
    {
      id: "B22",
      avaliable: true,
      name: "Julian Gutierrez",
      tel: "662-010-931",
      CMnumber: "CM30386",
      age: 24,
      gender: "male",
      admissiondate: "27/2/2022",
    },
    {
      id: "B23",
      avaliable: false,
      name: "Hailey Novak",
      tel: "992-542-2708",
      CMnumber: "CM30386",
      age: 70,
      gender: "female",
      admissiondate: "27/2/2022",
    },
    {
      id: "B24",
      avaliable: true,
      name: "Amy Souza",
      tel: "(18) 1552-5338",
      CMnumber: "CM30386",
      age: 27,
      gender: "female",
      admissiondate: "27/2/2022",
    },
  ];
  const avaliableBed = bedStatus.filter(
    (bed) => !bed.avaliable === true
  ).length;

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
        {bedStatus.map((bed) => (
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
                    {bed.id}
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
                  {bed.id}
                </Typography>
              </>
            )}
          </Grid>
        ))}
      </Grid>
      <Typography>
        Avaliable: {avaliableBed}/{bedStatus.length}
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
