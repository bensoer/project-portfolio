import React from "react";
import ProjectComponent from "./ProjectComponent";
import { Chip, IconButton, Tooltip, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import MkDocsChipLink from "../chiplinks/MkDocsChipLink";
import YAMLChipLink from "../chiplinks/YAMLChipLink";
import PythonChipLink from "../chiplinks/PythonChipLink";


export default function(){

    const openUrl = (url) => {
        window.open(url, '_blank').focus();
    }


    return (
        <ProjectComponent
              title='Clubfoot Resources For Adults'
              subheader="Clubfoot resources for adults, by adults"
              imageTopAndBottomBorder='4px solid navy'
              imagePath="clubfoot-resources-screenshot.png"
              imageAlt="Clubfoot Resources Website Screenshot"
              chips={
                <React.Fragment>
                  <MkDocsChipLink/>
                  <YAMLChipLink/>
                  <PythonChipLink/>
                </React.Fragment>
              }
              description={
                <React.Fragment>
                  <Typography>
                    Clubfoot Resources For Adults is a simple informational website built with MkDocs. MkDocs is a framework that allows you to quickly build out documentation
                    websites using simple markdown files and YAML configuration. The content is then rendered into a static website using Python. By leveraging this framework, 
                    I have been working on filling out and documenting various
                    process and resources for people.
                  </Typography>
                  <Typography>
                    At this time, Clubfoot Resources for Adults is largely filled with information I have gathered
                    from my own personal experiences living with clubfoot and having to navigate the medical system with this disability.
                    The purpose of the website is to contribute to the very limited existing resources and information that exists on the internet for people 
                    with clubfoot on how they can get support, funding, and find people to help them as they face the challenges of living with this disability.
                  </Typography>
                </React.Fragment>
              }
              links={
                <React.Fragment>
                  <Tooltip title="View the source code">
                    <IconButton aria-label="View the source code" onClick={() => openUrl("https://github.com/bensoer/clubfoot-resources")}>
                        <GitHubIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Visit the website" onClick={() => openUrl("https://bensoer.github.io/clubfoot-resources/")}>
                    <IconButton aria-label="Visit the website">
                        <OpenInNewIcon />
                    </IconButton>
                </Tooltip>
                </React.Fragment>
              }
            
            />
    )
}