import { Card, CardActions, CardContent, CardHeader, CardMedia, Chip, Divider, Grid2, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { ReactNode } from "react";

export interface ProjectComponentProps{
    title: string,
    subheader: string,
    imageTopAndBottomBorder: string,
    imagePath: string,
    imageAlt: string,
    chips: ReactNode,
    description: ReactNode,
    links: ReactNode
} 


export default function(props: ProjectComponentProps){

    return (
        <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}>

            <CardHeader
                sx={{ minHeight: { lg:'5vw', md: '7vw'}, maxHeight: { lg:'5vw', md: '8vw'},  display: 'block' }}
                title={props.title}
                subheader={props.subheader}
            />
            <CardMedia
                sx={{ borderTop: props.imageTopAndBottomBorder, borderBottom: props.imageTopAndBottomBorder}}
                component="img"
                image={props.imagePath}
                alt={props.imageAlt}
            />
            <CardContent>
                <Stack spacing={2}>
                    <Stack direction={'row'} spacing={1} justifyContent={'center'}>
                        {props.chips}
                    </Stack>
                    {props.description}
                </Stack>
                
            </CardContent>


            <CardActions disableSpacing sx={{ marginTop: 'auto'}}>
                {props.links}
            </CardActions>
            
        </Card>
    )
}