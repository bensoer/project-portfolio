import React from "react";
import ProjectComponent from "./ProjectComponent";
import { Chip, IconButton, Tooltip, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import AWSCDKChipLink from "../chiplinks/AWSCDKChipLink";
import TypeScriptChipLink from "../chiplinks/TypeScriptChipLink";
import PythonChipLink from "../chiplinks/PythonChipLink";
import AWSChipLink from "../chiplinks/AWSChipLink";
//import { SiSwagger } from "react-icons/si";
import { SiReadthedocs } from "react-icons/si";


export default function(){

    const openUrl = (url) => {
        window.open(url, '_blank').focus();
    }


    return (
        <ProjectComponent
              title='PyChat'
              subheader="UDP Crypto Testing Console Chat"
              imageTopAndBottomBorder='4px solid green'
              imagePath="pychat-docs-screenshot.png"
              imageAlt="PyChat Github Page"
              chips={
                <React.Fragment>
                  <PythonChipLink/>
                </React.Fragment>
              }
              description={
                <React.Fragment>
                  <Typography component="p" sx={{ mb: 3 }}>
                    PyChat is a fun side project myself and a friend did while in school as a way to both explore and demonstrate cryptography and hashing
                    functions. Its still one of my favourite projects as it also incorporated a bunch of networking techniques, such as epoll, in the
                    implementation and has a small framework built out to make development of encryption and hashing algorithms easier. 
                  </Typography>
                  <Typography component="p" sx={{ mb: 3 }}>
                    One of the challenges in the project was that my friend was not as technically skilled with networking and encryption algorithms as I was.
                    I had been literally studying them that semester when we decided to explore out the tool. So the creation of the framework added an interesting
                    layer for me in creating a tool that aided my friends exploration in cryptography.
                  </Typography>
                  <Typography>
                    The framework, CLI UX, networking, and <i>some</i> of the cryptography and hashing algorithms are written all in vanilla python. The application was
                    documented with Sphynx and uploaded to Python's popular readthedocs.io!
                  </Typography>
                </React.Fragment>
              }
              links={
                <React.Fragment>
                    <Tooltip title="View the source code">
                        <IconButton aria-label="View the source code" onClick={() => openUrl("https://github.com/bensoer/pychat")}>
                            <GitHubIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="View ReadTheDocs Documentation">
                        <IconButton aria-label="View ReadTheDocs Documentation" onClick={() => openUrl("https://pychat.readthedocs.io/en/stable/")}>
                            <SiReadthedocs/>
                        </IconButton>
                    </Tooltip>
                </React.Fragment>
              }
            
            />
    )
}