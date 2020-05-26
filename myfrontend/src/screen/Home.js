import React, { useState ,useEffect} from "react";
import {Link}  from 'react-router-dom';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
   /* color: theme.palette.text.secondary, */
  },

  margin: {
    margin: theme.spacing(0),
  },
  extendedIcon: {
    marginRight: theme.spacing(0),
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  table: {
    minWidth: 50,
  },



  paper2: {
    /* padding: theme.spacing(0), */
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  root2: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },


}));





function Home(props) {

  let x=0;

   
    const [product,setProduct]=useState([]);
    const [cart,setCart]=useState([]);
    const [cart2,setCart2]=useState([]);
    const [cart3,setCart3]=useState([]);
    const [cart4,setCart4]=useState([]);
    const [cart5,setCart5]=useState(Math.random());
    const [cart6,setCart6]=useState(Math.random());
    const [cart7,setCart7]=useState(Math.random());

    useEffect(()=>{
       const fetchData=async()=>{
            const {data}=await axios.get('/api/allproducts');
            setProduct(data);
 
       }
       fetchData();
        return ()=>{

        };
    },[] );

    useEffect(()=>{
        const fetchData=async()=>{
             const {data}=await axios.get('/allCart');
             setCart2(data);
  
        }
        fetchData();
         return ()=>{
 
         };
     },[] );



    useEffect(()=>{
        const fetchCart=async()=>{
            console.log(cart);
            // const {data}=await axios.get('/demoCart');
             const {data}=await axios.post('/demoCart/'+cart.id);

             
             setCart2(data);
            console.log(cart2); 
        }
        fetchCart();
         return ()=>{
 
         }
     },[cart6]); 



     useEffect(()=>{
        const fetchCart=async()=>{
            //console.log("cart3 Updated******");
            
             const {data}=await axios.post('/deleteItem/'+cart3.id);
             setCart2(data);
            
        }
        fetchCart();
        return () => console.log('unmounting...');
         
     },[cart5]);
     
     useEffect(()=>{
        const fetchCart=async()=>{
            //console.log("cart3 Updated******");
            
             const {data}=await axios.post('/deleteItemAll/'+cart4.id);
             setCart2(data);
            
        }
        fetchCart();
        return () => console.log('unmounting...');
         
     },[cart7]);




    
     function handleMyClickDelete(pt) {
        setCart3(pt);
        setCart5(Math.random());
      }

      function handleMyClickAdd(pt) {
        
        setCart(pt);
        setCart6(Math.random());
      }
      function handleMyClickDeleteAll(pt) {
        setCart4(pt);
        setCart7(Math.random());
      }
    
      

      const classes = useStyles();



    return (
        <div>


<div className={classes.root}>
      <Grid container spacing={1}>
      

        
        <Grid item xs={8}>

        

          <Paper className={classes.paper}>

          <main className="main">
        <div className="content">


        <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
         
          <Typography variant="h6" color="inherit">
            Shopping Items
          </Typography>
        </Toolbar>
      </AppBar>
    </div>



          <ul className="product-ul">


          { product.map(pt=>

            <li className="product-li" key={pt.id}>
              <div className="card" >
                <img className="product-image" src={pt.image} />


                <div className="description">




            {/* <Link to={'/product/'+pt.id}  className="dress-name">Dress Name: {pt.name}</Link> */}
            <p className="dress-code">{pt.name}</p>
            <p className="dress-code">Dress Code: {pt.id}</p>
            {/* <p className="dress-code">brand     : {pt.brand}</p> */}
            <p className="dress-price">Price    :${pt.price}</p>

            <Button onClick={()=>handleMyClickAdd(pt) } variant="contained" size="small" color="primary" className={classes.margin}>
          +
        </Button>
                
                 

                </div>
              </div>
            </li>
            
            )} 
 </ul >
 </div >
</main >
        
         
            </Paper>



        </Grid>



        <Grid item xs={4}>
          <Paper className={classes.paper}>



<div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
         
          <Typography variant="h6" color="inherit">
             Your Cart
          </Typography>
        </Toolbar>
      </AppBar>
    </div>




    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Details
            </TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="Left">ID</TableCell>
            <TableCell align="Left">Qty</TableCell>
            <TableCell align="Left">Unit</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>

        { cart2.map((row)=>(
            <TableRow key={row.id}>
            
              <TableCell align="Left">
              {(() => {
        switch (row.id) {
          case "ID":   return ;
          default:      return <h5>{row.id}</h5>  ;
        }})()}
              </TableCell>


              <TableCell align="Left">
                
                {(() => {
        switch (row.id) {
          case "ID":   return ;
          default:      return <h5>{row.itemAmount}</h5>  ;
        }})()}
                </TableCell>


              <TableCell align="Left">
                 {(() => {
        switch (row.id) {
          case "ID":   return ;
          default:      return <h5>{row.price}</h5>  ;
        }})()}
                </TableCell>
                
              
              
           
              <TableCell align="Left">

              {(() => {
        switch (row.id) {
          case "ID":   return ;
          default:      return (
            <Button onClick={()=>handleMyClickAdd(row) } variant="contained"  size="small" color="primary" className={classes.margin}>
          +
        </Button>
          );
        }
      })()}
              </TableCell>



              <TableCell align="Left">

              {(() => {
        switch (row.id) {
          case "ID":   return ;
          default:      return (
            <Button onClick={()=>handleMyClickDelete(row) } variant="contained" size="small" color="secondary" className={classes.margin}>
          -
        </Button>
          );

        }
      })()}
              </TableCell>




   <TableCell align="Left">
              {(() => {
        switch (row.id) {
          case "ID":   return ;
          default:      return (

            <IconButton  onClick={()=>handleMyClickDeleteAll(row) } aria-label="delete" className={classes.margin}>
            <DeleteIcon fontSize="small" />
          </IconButton>


          );
          
        }
      })()}

</TableCell>



              <p hidden>This paragraph should be hidden
              {(() => {
        switch (row.id) {
          case "ID":   return ;
          default:      return <p hidden>{x+=row.itemAmount * row.price}</p>  ;
        }})()}
        </p>




            </TableRow>
          ))}



        <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={1}>Sum</TableCell>
            <TableCell align="left">${x}</TableCell>
            <TableCell align="left"></TableCell> 
            <TableCell align="left">  

            {(() => {
        switch (x) {
          case 0:   return ;
          default:      return (

            <Button  variant="contained"  size="small" color="primary" className={classes.margin}>
          PAY
        </Button>


          );
          
        }
      })()}

    

        </TableCell>


          </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer> 

    



{/* 
          <table>
  { cart2.map(product=>
    
  <tr>
    
    
    <th>{product.id}</th>
    <th>{product.itemAmount}</th>
    <th>{product.price}</th>
    
    

<th>
      {(() => {
        switch (product.id) {
          case "ID":   return ;
          default:      return (
            <Button onClick={()=>handleMyClickAdd(product) } variant="contained" size="small" color="primary" className={classes.margin}>
          +
        </Button>
          );
          
        

        }
      })()}
    </th>

    <th>
      {(() => {
        switch (product.id) {
          case "ID":   return ;
          default:      return (
            <Button onClick={()=>handleMyClickDelete(product) } variant="contained" size="small" color="secondary" className={classes.margin}>
          -
        </Button>
          );


        }
      })()}
    </th>

  

    <th>
      {(() => {
        switch (product.id) {
          case "ID":   return <p> &nbsp;&nbsp; DelAll</p>;
          default:      return (

            <IconButton  onClick={()=>handleMyClickDeleteAll(product) } aria-label="delete" className={classes.margin}>
            <DeleteIcon fontSize="large" />
          </IconButton>


          );
          
          

        }
      })()}
    </th>


  </tr>

)}
</table> */}



          </Paper>
        </Grid>
        
      </Grid>
    </div>



    

          
            
{/* 
        <main className="main">
        <div className="content">
          <ul className="product-ul">

            { product.map(pt=>
              
              <li className="product-li" key={pt.id}>
              <div className="card" >
                <img className="product-image" src={pt.image} />

                <div className="description">
            <Link to={'/product/'+product.id} className="dress-name">Dress Name: {pt.name}}</Link>
            <p className="dress-code">Dress Code: {pt.id}</p>
                  <p className="dress-code">brand     : {pt.brand}</p>
            <p className="dress-price">Price    :${pt.price}</p>
            
               
                <button  onClick={()=>handleMyClickAdd(pt) }  >+</button>
                <button  onClick={()=>handleMyClickDelete(pt) }  >-</button>
                

                </div>
              </div>
            </li>
              
            )}            
          </ul>

          <div>
          

  <table>
  { cart2.map(product=>
    
  <tr>
    
    <th>{product.name}</th>
    <th>{product.id}</th>
    <th>{product.itemAmount}</th>
    <th>{product.price}</th>
   

<th>
      {(() => {
        switch (product.id) {
          case "demo":   return "DEL";
          default:      return <button onClick={()=>handleMyClickAdd(product) }>+</button>;

        }
      })()}
    </th>

    <th>
      {(() => {
        switch (product.id) {
          case "demo":   return "ADD";
          default:      return <button onClick={()=>handleMyClickDelete(product) }>-</button>;
        }
      })()}
    </th>

    

    <th>
      {(() => {
        switch (product.id) {
          case "demo":   return "DEL ALL";
          default:      return <button onClick={()=>handleMyClickDeleteAll(product) }>All Delete</button>;

        }
      })()}
    </th>

  </tr>

)}
</table>            

          </div>
        </div>
      </main> */}

        </div>
    )

    
}
export default Home;