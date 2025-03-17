import { AppBar, Button, Chip, Container, Grid2, IconButton, Paper, Stack, Toolbar, Tooltip, Typography } from '@mui/material'
import './App.css'
import ProjectComponent from './components/project/ProjectComponent'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import NoCapProject from './components/project/NoCapProject';
import ClubfoodResourcesProject from './components/project/ClubfoodResourcesProject';
import CoreDNSAPIProject from './components/project/CoreDNSAPIProject';
import PrisonSimulatorProject from './components/project/PrisonSimulatorProject';
import CDKPhotoArchiveProject from './components/project/CDKPhotoArchiveProject';
import PyChatProject from './components/project/PyChatProject';

export default function App() {

  return (
    <Stack>
      <AppBar position="static" sx={{ alignItems: "center" }} >
        <Toolbar >
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Ben's Project Catalogue
          </Typography>
        </Toolbar>
      </AppBar>

      <Stack spacing={4} marginX={10} marginY={5}>

        <Paper elevation={1} sx={{ padding: '15px'}}>
        <Typography>
          Hey there, welcome to my project cataloge! This is a collection of my favourite projects! 
          Here you can learn about the things I have been working on,  the technologies running them, and links
          to their source code, further documentation or running versions in production! 
          For the latest things I'm working on, checkout my github: <a href="https://github.com/bensoer" target="_blank">https://github.com/bensoer</a>
        </Typography>
        </Paper>
        

        <Grid2 container spacing={2} >
          <Grid2 size={{ xs: 12, md: 6, xl: 4}} >
            <CoreDNSAPIProject/>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6, xl: 4}} >
            <ClubfoodResourcesProject/>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6, xl: 4}} >
            <NoCapProject/>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6, xl: 4}} >
            <PrisonSimulatorProject/>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6, xl: 4}} >
            <CDKPhotoArchiveProject/>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6, xl: 4}} >
            <PyChatProject/>
          </Grid2>
        </Grid2>

      </Stack>


        

    </Stack>

    
  )
}
