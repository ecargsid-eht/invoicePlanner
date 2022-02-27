import React from 'react'
import Navbar from './Navbar'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { Button, CardHeader, Divider, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { useState } from 'react';
import { collection, getDocs, getDoc } from 'firebase/firestore';
import db from '../firebase-config';



function Dashboard() {
  const [invoices, setInvoices] = useState([])
  const colTxn = collection(db, "sales_invoice")
  const colParty = collection(db,"party")
  useEffect(() => {
    async function getTxn() {

      const invoice = await getDocs(colTxn)
      invoice.docs.map((inv) => (
        console.log(inv))
        )
      setInvoices(invoice.docs.map((inv) => ({ ...inv.data(), id: inv.id })))
    }

    getTxn();
  }, [])

  return (
    <>
      <Navbar />

      {/* dashboard content */}
      <Grid container spacing={2} px={2}>
        <Grid item xs={6}>
          <Card >
            <CardContent sx={{ display: "flex", justifyContent: "space-between", pb: 0 }}>
              <Typography color="green" fontWeight="light" variant="p" fontSize={20} component="div">
                To Collect <ArrowCircleUpIcon />
              </Typography>
              <Typography variant="p" fontSize={20} color="text.secondary">
                Rs. 4000
              </Typography>
            </CardContent>
            <CardActions sx={{ float: "right" }}>
              <Button size="small" variant="contained" sx={{ backgroundColor: "black" }}>View More</Button>
            </CardActions>
          </Card>

        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent sx={{ display: "flex", justifyContent: "space-between", pb: 0 }}>
              <Typography color="red" fontWeight="light" variant="p" fontSize={20} component="div">
                To Pay <ArrowCircleDownIcon />
              </Typography>
              <Divider />
              <Typography variant="p" fontSize={20} color="text.secondary">
                Rs. 700
              </Typography>
            </CardContent>
            <CardActions sx={{ float: "right" }}>
              <Button size="small" variant="contained" sx={{ backgroundColor: "black" }}>View More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Card>
            <CardHeader title="Transactions" />
            <Divider />
            <CardContent>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell align="right">Party</TableCell>
                      <TableCell align="right">Txn No</TableCell>
                      <TableCell align="right">Amount</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {invoices.map((inv) => (
                      <TableRow
                        key={inv.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                        {new Date(inv.invoice_date.seconds * 1000).toLocaleDateString("en-US")}
                        </TableCell>
                        <TableCell align="right">
                          {console.log(getDoc(inv.party))}
                        </TableCell>
                        <TableCell align="right">{inv.id}</TableCell>
                        <TableCell align="right">Rs. {inv.total}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default Dashboard