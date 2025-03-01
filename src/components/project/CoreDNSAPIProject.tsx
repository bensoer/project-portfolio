import React from "react";
import ProjectComponent from "./ProjectComponent";
import { Chip, IconButton, Tooltip, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import { BsMedium } from 'react-icons/bs';


export default function(){

    const openUrl = (url) => {
        window.open(url, '_blank').focus();
    }


    return (
        <ProjectComponent
              title='CoreDNS API'
              subheader="API Endpoint For Managing CoreDNS For Your Homelab"
              imageTopAndBottomBorder='4px solid grey'
              imagePath="coredns-api-logo.png"
              imageAlt="CoreDNS API Logo"
              chips={
                <React.Fragment>
                  <Chip label="Nodejs" />
                  <Chip label="Nestjs" />
                  <Chip label="SQLite" />
                  <Chip label="TypeScript" />
                </React.Fragment>
              }
              description={
                <React.Fragment>
                  <Typography>
                    The NoCap API is the API portion of a  CLI tool for storing "truths". I created this app out of a need to track my day to day work. I kept coming home at the end of the day or week with no recollection of what I had accomplished. So I created this app as a way to track
                    my progress on my work. I included also tagging functionality so that each of my notes of tasks could be quickly and easily categorised
                    allowing me to then produce summaries and group my work whenever I wanted to review it. The NoCap API stores all this information
                    in a single MongoDB collection, allowing for quick retrieval and simple parsing                                   
                  </Typography>
                  <Typography>
                      The CLI for NoCap is still under development but you can visit the OpenAPI spec in the links below   
                  </Typography>
                </React.Fragment>
              }
              links={
                <React.Fragment>
                  <Tooltip title="View the source code" >
                    <IconButton aria-label="View the source code" onClick={() => openUrl("https://github.com/bensoer/coredns-api")}>
                        <GitHubIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Read my Medium blog on CoreDNS">
                    <IconButton aria-label="Read my Medium blog on CoreDNS" onClick={() => openUrl("https://medium.com/@bensoer/setup-a-private-homelab-dns-server-using-coredns-and-docker-edcfdded841a")}>
                        <BsMedium />
                    </IconButton>
                </Tooltip>
                </React.Fragment>
              }
            
            />
    )
}