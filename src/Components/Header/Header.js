import React from 'react';
import {Typography,AppBar,Toolbar,IconButton,Grow} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {Menu} from '@material-ui/icons'




const useStyles = makeStyles({
  
  menu:{
    justifyContent:'space-between'
  },
  neumophirsm:{
      
      borderRadius:'25px',
      backgroundColor:"#1b1b1b",
      border:'1px solid rgba(46, 46, 46, 0.11) ',
      boxShadow:'3px 2px 19px rgba(6, 6, 6, 0.31),-3px -2px 10px #2f2e2e1a'
  },
  tittle:{
      fontWeight:'lighter'
  },
  small:{
    fontSize:'10px',
    color:'#FFFFFF',
    fontWeight:'200'
  }
  
})

function Header() {
  

  const classes = useStyles();
  
  return (
    <>
    <Grow in={true} timeout={1000}>
      <AppBar position='sticky' className={classes.neumophirsm}>
        <Toolbar className={classes.menu}>
            <Typography variant="h6" className={classes.tittle}>
                Talk <span className="MuiIconButton-colorSecondary "> JS</span>
            </Typography>
            
            <IconButton edge="end">
                <Menu />
            </IconButton>        
        </Toolbar>
      </AppBar>
    </Grow>
    
    </>
    
   
  );
}


export default Header;
