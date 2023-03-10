import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useMemo, useState } from 'react'
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {  Button, Card, CssBaseline, Popover, TextField, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import { Stack } from '@mui/system'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import React from 'react'
import AcadCard from './AcadQualCard'
// import Button from '@mui/material-next/Button';
import axios from 'axios'
import fileDownload from 'js-file-download'
import ScholasticCard from './SchalasticAchievCard'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickSample=(event)=>{

  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


 
  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline />
      
      <Head>
        <title>Resume Maker</title>
        <meta name="description" content="Created by Pratham Sahu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        <div className={styles.description}>
          <p>
          Resume Maker
          </p>
          <div>
          <Button aria-describedby={id} variant="outlined" color="inherit" onClick={handleClick}>
                Credits
          </Button>
          <Popover 
            anchorOrigin={{
              vertical: 'center',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'center',
              horizontal: 'center',
            }}
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
          >
            <Card 
            sx= {{
              padding:5,
              
            }}>
              <h1>Credits</h1>
              <p>Dev: Pratham Sahu</p>
              <p>Idea: Aditya Bangar, Pratham Sahu</p>

            </Card>
          </Popover>
          <Button aria-describedby={id} variant="outlined" color="inherit" sx={{margin:2}} onClick={handleClickSample}>
                Download the Sample Resume
          </Button>
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
          </div>


        </div>

        <div>
        <Stack spacing={5}>
          <p className={styles.description}>
            Personal Info
          </p>
          
          
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
                    <TextField label="First Name" variant="outlined">
                    </TextField>

                    <TextField label="Middle Name" variant="outlined">
                    </TextField>

                    <TextField label="Last Name" variant="outlined">
                    </TextField>
                </Stack>
                <Stack direction="row" spacing={2}>
                <TextField label="Phone Number" variant="outlined">
                    </TextField>

                    <TextField label="Email Id" variant="outlined">
                    </TextField>

                    <TextField label="LinkedIn Link" variant="outlined">
                    </TextField>

                </Stack>

                <Stack direction="row" spacing={2}>
                <TextField label="Department" variant="outlined">
                    </TextField>

                    <TextField label="University/College" variant="outlined">
                    </TextField>

                    <TextField label="Github Link" variant="outlined">
                    </TextField>

                </Stack>

            </Stack>
          
          </Card>

          <p className={styles.description}>
            Academic Qualifications
          </p>

          <AcadCard>

            </AcadCard>

          <Button aria-describedby={id} variant="outlined" color="inherit" sx={{margin:2}} >
                <Typography> 
                    Add Card
                </Typography>
          </Button>

          
          <p className={styles.description}>
            Scholastic Achievments
          </p>

          <ScholasticCard></ScholasticCard>
         
          <Button aria-describedby={id} variant="outlined" color="inherit" sx={{margin:2}} >
                <Typography> 
                    Add Card
                </Typography>
          </Button>
   

        </Stack>

        </div>
          
      </main>

      </ThemeProvider>
    </>
  )
}
