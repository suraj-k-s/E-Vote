import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'
import Header from "../../../Admin/components/Header";


export default function Electionagentregistration() {
  return (
    <div>
      <Box padding="20px">
        <div style={{ margin: "0 auto", width: "fit-content" }}>
          <Header title="Election Agent Registration" />
        </div>
        <div style={{ margin: "0 auto", width: "fit-content" }}>
          <form method="post" id="districtForm" name="districtForm">
            <div>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Name"
                name="Name"
                sx={{ gridColumn: "span 2" }}
              />
            </div>
            <div>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address"
                name="Address"
                sx={{ gridColumn: "span 2" }}
              />
            </div>
            <div style={{background: "rgb(41,48,64)", borderBottom: "1px solid black"}}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
            </div>
            <div style={{borderBottom: "1px solid black"}}>
              <select name='place' id='place' style={{ width: "500px", minWidth: "300px", backgroundColor: "hsla(0,0%,82%,.3)", padding: "10px",color :"grey", border: "none" }}>
                <option defaultValue="" style={{ color: "black" }}>Place</option>
                <option defaultValue="" style={{ color: "black" }}></option>
              </select>
            </div>
            <div>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                name="Email"
                sx={{ gridColumn: "span 2" }}
              />
            </div>
            <div>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Password"
                name="Password"
                sx={{ gridColumn: "span 2" }}
              />
            </div>
            <div>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Voter Id No"
                name="Voteridno"
                sx={{ gridColumn: "span 2" }}
              />
            </div>
            <div>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Employement Id No"
                name="Employementidno"
                sx={{ gridColumn: "span 2" }}
              />
            </div>
            <div>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Aadhar Card No"
                name="Aadharcardno"
                sx={{ gridColumn: "span 2" }}
              />
            </div>
            <div style={{backgroundColor: "hsla(0,0%,82%,.3)", color: "grey", paddingTop: "20px",paddingBottom: "10px", borderBottom: "1px solid black"}}>
              <Box display="flex" >
                <div margin="10px">
                  Upload Photo:
                </div>
                <div style={{marginLeft: "10px"}}>
                  <input type="file"></input>
                </div>
              </Box>
            </div>
            <div>
              <Box display="flex" justifyContent="center" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                  Submit
                </Button>
              </Box>
            </div>
          </form>
        </div>
      </Box>
    </div>
  )
}
