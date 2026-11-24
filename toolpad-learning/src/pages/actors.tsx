import {useState} from "react"
import {Dialog, DialogTitle,DialogContent,DialogContentText,DialogActions,Button} from "@mui/material"



export default function Actors(){
    const[open,setOpen]=useState(false);

    return(
        <div>
            <Button onClick={()=>setOpen(true)}>
                Open Dialog
            </Button>
            <Dialog open={open}
            onClose={()=>setOpen(false)}
            >
                <DialogTitle>Welcome</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Simple MUI dialog example
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>setOpen(false)}>
                        Close

                    </Button>
                </DialogActions>

            </Dialog>
        </div>
    )
}