import { Box } from '@mui/system'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import React, { Component } from 'react'
import Header from '../../components/Header'    
import ImageIcon from '@mui/icons-material/Image';
import axios from 'axios';
import { Modal, Typography } from '@mui/material';

export default class Userlist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userData: [],
            open: false,
            userImage: "",
            style: [{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
            }],
            columns: [
                { field: "id", headerName: "ID", flex: 0.1 },
                {
                    field: "user_name",
                    headerName: "Name",
                    flex: 1,
                    cellClassName: "name-column--cell",
                },
                {
                    field: "user_address",
                    headerName: "Address",
                    flex: 1.5,
                },
                {
                    field: "user_gender",
                    headerName: "Gender",
                    flex: 0.7,
                },
                {
                    field: "sectionpart_name",
                    headerName: "Sectionpart",
                    flex: 1.2,
                },
                {
                    field: "place_name",
                    headerName: "Place",
                    flex: 1.2,
                },
                {
                    field: "ward_name",
                    headerName: "Ward",
                    flex: 0.8,
                },
                {
                    field: "user_email",
                    headerName: "Email",
                    flex: 1.8,
                },
                {
                    field: "user_phonenumber",
                    headerName: "Phone Number",
                    flex: 1.3,
                },
                {
                    field: "user_aadharcardno",
                    headerName: "Aadharcard No",
                    flex: 1.4,
                },
                {
                    field: "user_voteridno",
                    headerName: "Voter Id No",
                    flex: 1.2,
                },
                {
                    field: "user_photo",
                    headerName: "Photo",
                    width: 100,
                    renderCell: (params) => {
                        return (

                            <ImageIcon onClick={() => this.handleOpen(params.row.user_photo)} />


                        );
                    },
                },
                
            ],
        }

    }

    handleOpen = (e) => {
        this.setState({ open: true });
        this.setState({ userImage: e });
    }


    handleClose = () => {
        this.setState({ open: false });
    }


    componentDidMount() {
        axios
            .get(
                "http://localhost/e-vote/api/userregistration.php?status=0"
            )
            .then((response) => response.data)
            .then((data) => {

                this.setState({ userData: data });
            });
    }



    render() {
        return (
            <>
                <Box m="20px">
                    <div style={{ margin: "0 auto", width: "fit-content" }}><Header
                        title="USER LIST"
                    /></div>

                    <Box
                        m="40px 0 0 0"
                        height="75vh"
                        sx={{
                            "& .MuiDataGrid-root": {
                                border: "none",
                            },
                            "& .MuiDataGrid-cell": {
                                borderBottom: "none",
                            },
                            "& .name-column--cell": {
                                color: "#70aaa2",
                            },
                            "& .MuiDataGrid-columnHeaders": {
                                backgroundColor: "#3e4396",
                                borderBottom: "none",
                            },
                            "& .MuiDataGrid-virtualScroller": {
                                backgroundColor: "",
                            },
                            "& .MuiDataGrid-footerContainer": {
                                borderTop: "none",
                                backgroundColor: "#3e4396",
                            },
                            "& .MuiCheckbox-root": {
                                color: "#3e4396",
                            },
                            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                                color: "#3e4396",
                            },
                        }}
                    >
                        <DataGrid
                            rows={this.state.userData}
                            columns={this.state.columns}
                            components={{ Toolbar: GridToolbar }}
                        />
                    </Box>
                </Box>
                <Modal
                    keepMounted
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <Box sx={this.state.style}>
                        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                            photo
                        </Typography>
                        <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                            <img src={this.state.userImage} alt="" width= "200px" height="200px"/>
                        </Typography>
                    </Box>
                </Modal>
            </>
        )
    }
}
