import { Box, Button, Card, CardActions, CardHeader, CardMedia, Divider, Modal, Typography } from "@mui/material";
import { ReactNode, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

export interface ProjectComponentProps{
    title: string,
    subheader: string,
    imageTopAndBottomBorder: string,
    imagePath: string,
    imageAlt: string,
    chips: ReactNode,
    description: ReactNode,
    links: ReactNode,
    modalContent?: ReactNode;
} 


export default function(props: ProjectComponentProps){

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>

            <Card 
                variant="outlined"
            >

                <CardHeader
                    //sx={{ minHeight: { lg:'5vw', md: '7vw'}, maxHeight: { lg:'5vw', md: '8vw'},  display: 'block' }}
                    title={props.title}
                    subheader={props.subheader}
                />
                <Box sx={{ pb: 2, pl: 1, display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {props.chips}
                </Box>
                <CardMedia
                    //sx={{ borderTop: props.imageTopAndBottomBorder, borderBottom: props.imageTopAndBottomBorder}}
                    sx={{
                        aspectRatio: "16/9",  // keeps consistent ratio (modern CSS)
                        objectFit: "cover",   // fills the box, crops if needed
                        borderRadius: 0,
                    }}
                    component="img"
                    image={props.imagePath}
                    alt={props.imageAlt}
                />
                <Divider variant="middle"  sx={{ my: 1, borderColor: "#E0E0E0" }} />



                <CardActions disableSpacing sx={{ marginTop: 'auto', paddingX: 2 }}>
                    {/* <Tooltip title="Learn More">
                        <IconButton aria-label="Learn More" onClick={handleOpen}>
                            <MenuIcon />
                        </IconButton>
                    </Tooltip> */}
                    <Button startIcon={<MenuIcon />} onClick={handleOpen}>
                        Learn More
                    </Button>
                    <Box sx={{ flexGrow: 1 }} />
                    {props.links}
                </CardActions>
                
            </Card>


            <Modal 
                open={open} 
                onClose={handleClose} 
            >
                <Box
                    sx={{
                        position: "absolute" as const,
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: { xs: "90%", md: 600 },
                        bgcolor: "background.paper",
                        borderRadius: 2,
                        boxShadow: 24,
                        p: 4,
                        maxHeight: "90vh",
                        overflowY: "auto",
                    }}
                >
                    <Typography variant="h5" gutterBottom>
                        {props.title}
                    </Typography>
                    <Box sx={{ pb: 2, display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {props.chips}
                    </Box>
                    {props.modalContent || props.description}
                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
                        {/* Links on the left */}
                        <Box>{props.links}</Box>

                        {/* Close button on the right */}
                        <Button onClick={handleClose}>
                            Close
                        </Button>
                    </Box>
                </Box>
                
            </Modal>
        </div>
    )
}