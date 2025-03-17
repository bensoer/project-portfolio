import {  Chip } from "@mui/material";

export interface ChipLinkComponentProps{
    url: string
    text: string
} 


export default function(props: ChipLinkComponentProps){


    const onChipClick = () => {
        window.open(props.url, '_blank').focus();
    }

    return (
        <Chip 
            label={props.text}
            onClick={onChipClick}
            clickable
        />
    )
}