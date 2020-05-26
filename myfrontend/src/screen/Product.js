import React from "react";
import data from "../data";
import { Link } from "react-router-dom";


import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';

import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper2: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  root2: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  root3: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  /* line: {
    text-decoration: none,
  }, */

}));




function Product(props) {
    
    
    const selectedProduct=data.products.find(x=>x.id===props.match.params.id);
    console.log(selectedProduct);

    console.log("***%%*****************************************************************");
   
    const classes = useStyles();

    return (
<div>



<div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={4}>
          <Paper className={classes.paper}>


          <img src={selectedProduct.image} width="400" height="400"></img>

 
          </Paper>
        </Grid>


        <Grid item xs={8}>
          <Paper className={classes.paper2}>

              


        <div className={classes.root2}>
            
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={selectedProduct.name} />
        </ListItem>
        
      </List>
      

      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={selectedProduct.id} />
        </ListItem>
        
      </List>

      
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={selectedProduct.brand}/>
        </ListItem>
        
      </List>
      

      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={selectedProduct.price} />
        </ListItem>
        </List>

        <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={selectedProduct.des} />
        </ListItem>

        
      </List>




      <Divider />


      <div className={classes.root3}>
      
      <IconButton  color="primary" aria-label="add to shopping cart" width="400px">
        
        <AddShoppingCartIcon />
        <Link to="/" className={classes.line} text-decoration="none">Back to home page</Link>
      </IconButton>

      <IconButton color="primary" aria-label="add to shopping cart" width="400px">
        
        <AddShoppingCartIcon />
        Cart
      </IconButton>

    </div>


      
    </div>


          </Paper>
        </Grid>
        
      </Grid>
    </div>

    




</div>

    )

}

export default Product;