import React from "react";
import ProjectComponent from "./ProjectComponent";
import { IconButton, Tooltip, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import AWSCDKChipLink from "../chiplinks/AWSCDKChipLink";
import TypeScriptChipLink from "../chiplinks/TypeScriptChipLink";
import PythonChipLink from "../chiplinks/PythonChipLink";
import AWSChipLink from "../chiplinks/AWSChipLink";
//import { SiSwagger } from "react-icons/si";


export default function(){

    const openUrl = (url: string) => {
        window.open(url, '_blank')!.focus();
    }


    return (
        <ProjectComponent
              title='CDK Photo Archive'
              subheader="Photo Archive Storage Services"
              imageTopAndBottomBorder='4px solid maroon'
              imagePath="cdk-photo-archive-logo.png"
              imageAlt="CDK Photo Archive Logo"
              chips={
                <React.Fragment>
                  <AWSCDKChipLink/>
                  <TypeScriptChipLink/>
                  <PythonChipLink/>
                  <AWSChipLink/>
                </React.Fragment>
              }
              description={
                <React.Fragment>
                  <Typography component="p" sx={{ mb: 3 }}>
                    The CDK Photo Archive project was born from my need of a cheep, automated, cloud storage option for my photography collection. I wanted to 
                    take advantage of AWS Glacier services, but I also wanted to include a bunch of meta information in the files using AWS Tags. The photo
                    archive thus links to your Glacier archive S3 buckets, and on new files added, triggers a Step Function that executes a handful of lambdas
                    that scan the photos metadata and contents, and then tags that information on to the file. This allows you to gain extra insight into the
                    contents of your photo before having to download it                               
                  </Typography>
                  <Typography>
                    This project is in need of a little love as of late. The project works primarily as a POC and is not completely feature complete. Cost of 
                    development with AWS also started racking up a bill I at the time did not have the budget to work with.                          
                  </Typography>
                </React.Fragment>
              }
              links={
                <React.Fragment>
                <Tooltip title="View the source code">
                    <IconButton aria-label="View the source code" onClick={() => openUrl("https://github.com/bensoer/cdk-photo-archive")}>
                        <GitHubIcon />
                    </IconButton>
                </Tooltip>
                {/*<Tooltip title="View the OpenAPI Spec">
                    <IconButton aria-label="View the OpenAPI Spec" onClick={() => openUrl("https://api.nocap.projectterris.com/docs")}>
                        <SiSwagger />
                    </IconButton>
                </Tooltip>*/}
                </React.Fragment>
              }
            
            />
    )
}