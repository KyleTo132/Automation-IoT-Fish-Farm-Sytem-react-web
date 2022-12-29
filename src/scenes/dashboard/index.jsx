import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
// import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import ThermostatIcon from '@mui/icons-material/Thermostat';
//import OpacityIcon from '@mui/icons-material/Opacity';
import WindPowerIcon from '@mui/icons-material/WindPower';
import SetMealIcon from '@mui/icons-material/SetMeal';
import ThermostatAutoIcon from '@mui/icons-material/ThermostatAuto';
import HardwareIcon from '@mui/icons-material/Hardware';
import LightModeIcon from '@mui/icons-material/LightMode';
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
// import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import StatBoxNoCircle from "../../components/StatBoxNoCircle";
//import StatBoxToggle from "../../components/StatBoxToggle";
import PieChart from "../../components/PieChart";
import ProgressCircle from "../../components/ProgressCircle";
//import * as fs from 'fs';
import React, { useState, useEffect } from 'react';
import txtTemp from "./temp.txt";
import txtPh from "./ph.txt";
import txtTdc from "./tdc.txt";
import Axios from "axios";
import Switch from "../../Switch";
import Switch2 from "../../Switch2";



const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [tempData, setTempData] = useState(0);
  const [phData, setPhData] = useState(0);
  const [tdcData, setTdcData] = useState(0);
  const [value, setValue] = useState(false);
  const [relay2, setRelay2] = useState(false);

 useEffect(()=>{
   Axios(txtTemp).then(res => setTempData(res.data)); // This will have your text inside data attribute
   console.log(tempData);
},[tempData])
 useEffect(()=>{
   Axios(txtPh).then(res => setPhData(res.data)); // This will have your text inside data attribute
   console.log(phData);
},[phData])
 useEffect(()=>{
   Axios(txtTdc).then(res => setTdcData(res.data)); // This will have your text inside data attribute
   console.log(tdcData);
},[tdcData])
 
  return (
    
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Automation Iot Fish Farm System" subtitle="Welcome to your AIoTFFS Control Board" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        {/* Temperature */}
        <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={tempData} 
            unit="°C"
            subtitle="Temperature"
            progress={tempData/32}
            increase={tempData/32*100}
            uniti="%"
            icon={
              <ThermostatIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        {/* TDC */}
        <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={tdcData} 
            unit=" ppm"
            subtitle="TDC"
            progress="0.75"
            increase="+2°C"
            uniti="%"
            icon={
              <HardwareIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        {/* Ph */}
        <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={phData} 
            unit=" unit"
            subtitle="pH"
            progress="0.75"
            increase="+2°C"
            uniti="%"
            icon={
              <ThermostatAutoIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        {/* Lighting */}
        <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBoxNoCircle
            title="ON"
            subtitle="Lighting"
            increase="Normal"
            toggleButton={
              <Switch
                isOn={value}
                onColor="#06D6A0"
                handleToggle={() => setValue(!value)}
              />
            }
            icon={
              <LightModeIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
         {/* fan */} 
        <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBoxNoCircle
            title="ON"
            subtitle="Fan"
            toggleButton={
              <Switch2
                is2On={relay2}
                on2Color="#06D6A0"
                handle2Toggle={() => setRelay2(!relay2)}
              />
            }
            icon={
              <WindPowerIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="4/5"
            subtitle="Fish"
            progress="0.8"
            increase="-1"
            icon={
              <SetMealIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        
        

        {/* ROW 2 */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Temperature & Humidity
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                Average: 26°C
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>


        {/* ROW 3 */}

        {/* PIE CHART here */}

        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Fish Species
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                2/5
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <PieChart isDashboard={true} />
          </Box>
        </Box>


        {/* PROGRESS CIRCLE here*/}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            N/A
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              N/A
            </Typography>
            <Typography>N/A</Typography>
          </Box>
        </Box>



        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>

      </Box>
    </Box>
  );
};


export default Dashboard;