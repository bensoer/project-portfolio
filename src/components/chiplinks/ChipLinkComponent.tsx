import {  Chip } from "@mui/material";

export interface ChipLinkComponentProps{
    url: string
    text: string
} 


export default function(props: ChipLinkComponentProps){


    const onChipClick = () => {
        window.open(props.url, '_blank').focus();
    }

    const techColors = {
        React: "#A7D8F0",       // soft blue
        Node: "#7CC27C",      // soft teal, distinct from MongoDB
        Nestjs: "#F4A6A6",      // soft pink/red
        TypeScript: "#A3C4F3",  // muted blue
        Python: "#FFB566",      // warm pastel orange
        CSS: "#92BFFF",         // soft blue
        MongoDB: "#C4A484",     // muted green, distinct from NodeJS
        SQLite: "#7FB3D5",      // medium pastel blue
        MkDocs: "#C0A3E0",      // soft purple
        AWS: "#F5C77B",         // pastel gold/orange
        "AWS CDK": "#E7A96B",   // soft orange/burnt pastel
        YAML: "#B0B0B0",        // pastel lavender
    };

    return (
        <Chip 
            label={props.text}
            onClick={onChipClick}
            clickable
            size="small"
            sx={{
                backgroundColor: techColors[props.text] || "grey.300",
                color: techColors[props.text] ? "#fff" : "#000",
            }}
        />
    )
}