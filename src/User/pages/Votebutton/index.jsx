import { Button, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./votebutton.scss"
import axios from 'axios';
import { Link } from 'react-router-dom';

export const VoteButton = () => {
    const [rows, setRows] = useState([]);
    const [row, setRow] = useState([]);
    const [r, setR] = useState([]);
    const tzoffset = (new Date()).getTimezoneOffset() * 60000; // offset in milliseconds 
  const currentDate = (new Date(Date.now() - tzoffset)).toISOString().slice(0, 10);
    const currentTime = new Date().getHours();


    const fetchData = () => {
        axios.get("http://localhost/e-vote/api/Userprofile.php?aid=" + sessionStorage.getItem("userid")).then((response) => {
            var data = response.data.UserProfile;
            setRows(data[0]);


        });

        axios.get("http://localhost/e-vote/api/Checkvote.php?aid=" + sessionStorage.getItem("userid")).then((response) => {
            var data = response.data.CheckVote;

            setRow(data);



        });
        axios.get("http://localhost/e-vote/api/Checkelection.php").then((response) => {
            var data = response.data.CheckElection;

            setR(data[0]);
            console.log(currentTime);


        });
    };
    useEffect(() => {
        fetchData();

    }, []);
    console.log(row);
    return (
        <div className='Container'>
            <Paper className='votebutton'>
                {
                    rows.user_vstatus == 2 &&
                        row === false &&
                         r.election_for_date==currentDate &&
                        (currentTime > 8 &&
                            currentTime < 16)
                        ? <Link to="../Vote" style={{ textDecoration: 'none' }}> <Button variant="contained" size="large">
                            Vote
                        </Button></Link> : <h1>Not Eligible For Voting</h1>}

            </Paper>
        </div>
    )
}
