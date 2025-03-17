import React from "react";
import ProjectComponent from "./ProjectComponent";
import { Chip, IconButton, Tooltip, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import { BsMedium } from 'react-icons/bs';
import NodejsChipLink from "../chiplinks/NodejsChipLink";
import NestjsChipLink from "../chiplinks/NestjsChipLink";
import SQLiteChipLink from "../chiplinks/SQLiteChipLink";
import TypeScriptChipLink from "../chiplinks/TypeScriptChipLink";


export default function(){

    const openUrl = (url:string) => {
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
                  <NodejsChipLink/>
                  <NestjsChipLink/>
                  <SQLiteChipLink/>
                  <TypeScriptChipLink/>
                </React.Fragment>
              }
              description={
                <React.Fragment>
                  <Typography>
                                                     
                  </Typography>
                  <Typography>
                        
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