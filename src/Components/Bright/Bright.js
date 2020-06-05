import React from 'react';
import { Typography,Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'

const useStyle=makeStyles({
    chatBallonRight:{
        background:'#EFEEEE',
        borderRadius:'25px',
        padding:'10px 10px',
        borderBottomRightRadius:'5px',       
        
        float:'right',
        
        
       
        
    },
})
function Bright(props) {
    const classes=useStyle();
    return(
        <>
            <Grid sm={12} item  className={classes.item}>
                
                <div className={classes.chatBallonRight}>
                    <div>
                        <Typography color="secondary" align="right">
                            {props.nome}
                        </Typography>
                    </div>
                    <div>
                        <Typography align="right" >
                            {props.mensagem}
                        </Typography> 
                    </div>
                    
                </div>
                
            </Grid>
        </>
    )
}

export default Bright;