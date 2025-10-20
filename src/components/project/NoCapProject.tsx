import React from "react";
import ProjectComponent from "./ProjectComponent";
import { IconButton, Tooltip, Typography } from "@mui/material";
//import GitHubIcon from '@mui/icons-material/GitHub';
import { SiSwagger } from "react-icons/si";
import NodejsChipLink from "../chiplinks/NodejsChipLink";
import NestjsChipLink from "../chiplinks/NestjsChipLink";
import MongoDBChipLink from "../chiplinks/MongoDBChipLink";
import TypeScriptChipLink from "../chiplinks/TypeScriptChipLink";


export default function(){

    const openUrl = (url:string) => {
        window.open(url, '_blank')!.focus();
    }


    return (
        <ProjectComponent
              title='NoCap API'
              subheader="An API for storing notes, truths, secrets and everything else in between"
              imageTopAndBottomBorder='4px solid green'
              imagePath="no-cap-docs-screenshot.png"
              imageAlt="NoCap API OpenAPI Doc Screenshot"
              chips={
                <React.Fragment>
                  <NodejsChipLink/>
                  <NestjsChipLink/>
                  <MongoDBChipLink/>
                  <TypeScriptChipLink/>
                </React.Fragment>
              }
              description={
                <React.Fragment>
                  <Typography component="p" sx={{ mb: 3 }}>
                    The NoCap API is the API portion of a  CLI tool for storing "truths". I created this app out of a need to track my day to day work. I kept coming home at the end of the day or week with no recollection of what I had accomplished. So I created this app as a way to track
                    my progress on my work. I included also tagging functionality so that each of my notes of tasks could be quickly and easily categorised
                    allowing me to then produce summaries and group my work whenever I wanted to review it. The NoCap API stores all this information
                    in a single MongoDB collection, allowing for quick retrieval and simple parsing                                   
                  </Typography>
                  <Typography component="p">
                      The CLI for NoCap is still under development but you can visit the OpenAPI spec in the links below   
                  </Typography>
                </React.Fragment>
              }
              links={
                <React.Fragment>
                {/*<Tooltip title="View the source code">
                    <IconButton aria-label="View the source code" >
                        <GitHubIcon />
                    </IconButton>
                </Tooltip>*/}
                <Tooltip title="View the OpenAPI Spec">
                    <IconButton aria-label="View the OpenAPI Spec" onClick={() => openUrl("https://api.nocap.projectterris.com/docs")}>
                        <SiSwagger />
                    </IconButton>
                </Tooltip>
                </React.Fragment>
              }
            
            />
    )
}