import React from "react";
import ProjectComponent from "./ProjectComponent";
import { IconButton, Tooltip, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import { BsMedium } from 'react-icons/bs';
import NodejsChipLink from "../chiplinks/NodejsChipLink";
import NestjsChipLink from "../chiplinks/NestjsChipLink";
import SQLiteChipLink from "../chiplinks/SQLiteChipLink";
import TypeScriptChipLink from "../chiplinks/TypeScriptChipLink";


export default function(){

    const openUrl = (url:string) => {
        window.open(url, '_blank')!.focus();
    }


    return (
        <ProjectComponent
              title='CoreDNS API'
              subheader="REST API Endpoint For Managing CoreDNS"
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
                  <Typography component="p" sx={{ mb: 3 }}>
                    The CoreDNS API is a RESTful API built with NestJS that allows you to manage your CoreDNS server configurations programmatically. 
                  </Typography>
                  <Typography>
                    CoreDNS is a flexible and extensible DNS server that can be used in a range of applications, from Kubernetes to HomeLabs. Its only problem 
                    though, is it does not come built-in with any API services for managing it. There is third-party support, but these are
                    community managed, don't always work, and require recompiling of the CoreDNS binary. I wanted a REST API service that could run on the default
                    CoreDNS container and extend its capabilities without needing to change anything. Thus the CoreDNS API was born. 
                    This API provides endpoints to create, read, update, and delete DNS records, making it easier to automate DNS management tasks.
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