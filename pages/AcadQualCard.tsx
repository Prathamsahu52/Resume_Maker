import React from 'react'
import {  Button, Card, CssBaseline, Grid, Popover, Stack, TextField } from '@mui/material'


export default function AcadCard(){

    return(
        <Card elevation={5}
            sx={{
              padding: 5,
              width: {
                md: "100%",
                xs: "100%",
              },
            }}>

                <Stack spacing={2}>
                    <Stack direction="row" spacing={2}>

                        
                            <TextField  label="Start Year" variant="outlined">
                            </TextField>
                        
                            
                        
                            <TextField  label="End Year" variant="outlined">
                            </TextField>
                        
                        <TextField label="CPI/Percentage" variant="outlined">
                        </TextField>


                        

                    </Stack>

                    <TextField size="medium" label="School/Institute" variant="outlined">
                    </TextField> 
                    
                </Stack>
            
          
          </Card>
    )
}