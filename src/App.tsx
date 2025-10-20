import { Box, ImageList, ImageListItem, Link, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import './App.css'
import NoCapProject from './components/project/NoCapProject';
import ClubfoodResourcesProject from './components/project/ClubfoodResourcesProject';
import CoreDNSAPIProject from './components/project/CoreDNSAPIProject';
import PrisonSimulatorProject from './components/project/PrisonSimulatorProject';
import CDKPhotoArchiveProject from './components/project/CDKPhotoArchiveProject';
import PyChatProject from './components/project/PyChatProject';

export default function App() {

    const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.only("xs")); // extra small
  const isSm = useMediaQuery(theme.breakpoints.only("sm")); // small
  const isMd = useMediaQuery(theme.breakpoints.only("md")); // medium

  // Default to 3 columns for lg and above
  let cols = 3;
  if (isMd) cols = 2;
  if (isSm || isXs) cols = 1;

  const projects = [
    { id: 'CoreDNSAPIProject', el: <CoreDNSAPIProject/> },
    { id: 'ClubfootResourcesProject', el: <ClubfoodResourcesProject/> },
    { id: 'NoCapProject', el: <NoCapProject/> },
    { id: 'PrisonSumilatorProject', el: <PrisonSimulatorProject/> },
    { id: 'CDKPhotoArchiveProject', el: <CDKPhotoArchiveProject/> },
    {id: 'PyChatProject', el: <PyChatProject/> },
  ]

  return (
    <Stack>
      <Box
        sx={{
          textAlign: "center",
          paddingTop: 6,
          paddingBottom: 2,
          background: "transparent",
        }}
      >
        <Typography variant="h1" gutterBottom>
          Ben's Project Catalogue
        </Typography>

        <Typography

          sx={{ maxWidth: 700, mx: "auto", px: 2}}
        >
          Hello! Welcome to my project collection.
          Here you can learn about some of my favourite projects I have been working on, the technologies running them,
          and links to their source code, documentation, and running versions in production. <br />
          For the latest projects, check out my&nbsp;
          <Link href="https://github.com/bensoer" target="_blank" underline="hover">
            GitHub
          </Link>.
        </Typography>
      </Box>

      <Stack spacing={4} marginX={10} marginY={5}>
        
        <ImageList variant="masonry" cols={ cols} gap={16}>
          {projects.map((project) => (
            <ImageListItem key={project.id}>
              {project.el}
            </ImageListItem>
          ))}
        </ImageList>

        {/* <Grid2 container spacing={2} >
          <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4}} >
            <CoreDNSAPIProject/>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4}} >
            <ClubfoodResourcesProject/>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4}} >
            <NoCapProject/>
          </Grid2>
          <Grid2 size={{ xs: 12,  sm: 6, md: 6, lg: 4, xl: 4}} >
            <PrisonSimulatorProject/>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4}} >
            <CDKPhotoArchiveProject/>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4}} >
            <PyChatProject/>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4}} >
            <PyChatProject/>
          </Grid2>
        </Grid2> */}

        {/* <Box
          sx={{
            columnCount: { xs: 1, sm: 1, md: 2, lg: 3 },
            columnGap: "16px",
          }}
        >
          {projects.map((project) => (
            <Box key={project.id} sx={{ breakInside: "avoid", mb: 2 }}>
              {project.el}
            </Box>
          ))}
        </Box> */}

      </Stack>


        

    </Stack>

    
  )
}
