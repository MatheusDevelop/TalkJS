import React from 'react';
import {AppBar,Toolbar,Grow,IconButton,TextField} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import SendRoundedIcon from '@material-ui/icons/SendRounded';



const useStyles = makeStyles({
    root:{
        color:'white'
    },
    input:{
        color:'#FFFFFF'
    },
    margin:{
        
        marginBottom:'10px',
        marginRight:'20px'
    },
    bottomBar:{
        bottom:0,
        top:'auto',
        
        backgroundColor:"#1b1b1b",
        border:'1px solid rgba(46, 46, 46, 0.11) ',
        boxShadow:'3px 2px 5px rgba(6, 6, 6, 0.31) ,-3px -2px 5px #2f2e2e1a '
        
    },
    sendNeumophirsm:{
        border:'1px solid rgba(46, 46, 46, 0.11) ',
        boxShadow:'3px 2px 5px rgba(6, 6, 6, 0.31) ,-3px -2px 5px #2f2e2e1a '
    },
    center:{
        justifyContent:'center'
    }
})



function Messenger(props) {

    const classes=useStyles();
    
    return(
        <Grow in={true} timeout={1000}>
            <AppBar position='fixed' className={classes.bottomBar}>
                <Toolbar className={classes.center}>
                    <TextField id="msg" inputProps={{className:classes.input}} className={classes.margin}label="Digite uma mensagem aqui" color="secondary" />

                    <IconButton color="secondary" onClick={props.handleClick} className={classes.sendNeumophirsm}>
                        <SendRoundedIcon />
                    </IconButton>
                           
                </Toolbar>
            </AppBar>
        </Grow>
    )
}


export default Messenger;