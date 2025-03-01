import React from "react";
import ProjectComponent from "./ProjectComponent";
import { Chip, IconButton, Tooltip, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


export default function(){

    const openUrl = (url) => {
        window.open(url, '_blank').focus();
    }


    return (
        <ProjectComponent
              title='Prison Simulator'
              subheader="Simulator for executing the prison lightswitch problem"
              imageTopAndBottomBorder='4px solid black'
              imagePath="anonymous-prisoner-cropped.jpg"
              imageAlt="Anonymous prisoner sitting in a cell"
              chips={
                <React.Fragment>
                  <Chip label="Python" />
                  <Chip label="SQLite" />
                </React.Fragment>
              }
              description={
                <React.Fragment>
                  <Typography>
                    The lightswitch prison problem is a fun code / strategy puzzle an old colleague innocently brought up once in a 
                    lunch conversation. The topic quickly turns into a mutli hour debate of what was the best way to solve it. I couldn't
                    put the problem down, and even though I wrote this years ago, I have had multiple people over the years comment on 
                    my implementation and the problem when they first hear about it. This project simply solves the prison lightswitch 
                    problem by simulating out the problem until an answer is reached - allowing the simulation of days passing in seconds. 
                    Part of the fun of it was also to log out a whole bunch of metrics to get a sense of how long things took and how it 
                    may vary over mutliple executions. I stored all of this in a denormalised SQLite database and then wrote a second script 
                    that would parse through it and output the metrics 
                  </Typography>
                  <Typography>
                    You can checkout my implementation on Github, and learn more about the problem in the README and the links below
                  </Typography>
                </React.Fragment>
              }
              links={
                <React.Fragment>
                  <Tooltip title="View the source code">
                    <IconButton aria-label="View the source code" onClick={() => openUrl("https://github.com/bensoer/prisonsimulator")}>
                        <GitHubIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Read more about the lightswitch prison problem">
                    <IconButton aria-label="Read more about the lightswitch prison problem" onClick={() => openUrl("https://medium.com/i-math/100-prisoners-and-a-light-bulb-573426272f4c")}>
                        <OpenInNewIcon />
                    </IconButton>
                </Tooltip>
                </React.Fragment>
              }
            
            />
    )
}