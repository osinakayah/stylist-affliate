import React, {PureComponent} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Avatar from 'react-avatar';
import {
    MDBRow,
    MDBCol,
    MDBTableBody,
    MDBTableHead,
    MDBTable,
    MDBContainer,
    MDBInput,
    MDBPagination,
    MDBPageItem,
    MDBPageNav
} from "mdbreact";


import AppDrawer from '../../components/commons/AppDrawer';



interface IProps {
    location: any
}

interface IState {

}

class Profile extends PureComponent<IProps, IState> {
    render(): React.ReactNode {
        const {pathname} = this.props.location;
        const data_people = {
            columns: [
                {
                    label: '#',
                    field: 'id',
                    sort: 'asc',
                },
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc'
                },
                {
                    label: 'Commission',
                    field: 'commission',
                    sort: 'asc'
                },
                {
                    label: 'Date',
                    field: 'date',
                    sort: 'desc'
                },
            ],
            rows: [
                {
                    'id': '1',
                    'name': 'Braid',
                    'commission': 'Y 200',
                    'date': 'December 1, 2019',
                },
                {
                    'id': '1',
                    'name': 'Braid',
                    'commission': 'Y 200',
                    'date': 'December 1, 2019',
                },
                {
                    'id': '1',
                    'name': 'Braid',
                    'commission': 'Y 200',
                    'date': 'December 1, 2019',
                },
                {
                    'id': '1',
                    'name': 'Braid',
                    'commission': 'Y 200',
                    'date': 'December 1, 2019',
                },
                {
                    'id': '1',
                    'name': 'Braid',
                    'commission': 'Y 200',
                    'date': 'December 1, 2019',
                },
                {
                    'id': '1',
                    'name': 'Braid',
                    'commission': 'Y 200',
                    'date': 'December 1, 2019',
                },
                {
                    'id': '1',
                    'name': 'Braid',
                    'commission': 'Y 200',
                    'date': 'December 1, 2019',
                },
                {
                    'id': '1',
                    'name': 'Braid',
                    'commission': 'Y 200',
                    'date': 'December 1, 2019',
                },
                {
                    'id': '1',
                    'name': 'Braid',
                    'commission': 'Y 200',
                    'date': 'December 1, 2019',
                },
            ]
        };
        return (
            <AppDrawer activeRoute={pathname}>
                <MDBContainer style={{backgroundColor: '#fff'}}>
                    <MDBRow>
                        <MDBCol className={'offset-md-5  offset-lg-5 offset-sm-1 mb-lg-0 mb-5 text-center'}  xs={'12'} lg="2" md="2" >
                            <Avatar style={{marginTop: '12%',}} round name="Chinomso Nwachukwu" />
                            <h5 className="font-weight-bold mt-4 mb-3 text-center">Chinomso Nwachukwu</h5>
                            <p className="text-uppercase blue-text text-center">Expert Sales Rep</p>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow className={'ml-3'}>
                        <MDBCol xs={'12'} sm={'6'} className={'mt-3'} >
                            <span> From: <DatePicker
                                selected={new Date()}
                                onChange={()=>{}}
                            /></span>
                        </MDBCol>
                        <MDBCol xs={'12'} sm={'6'} className={'mt-3'}>
                            <span> To: <DatePicker
                                selected={new Date()}
                                onChange={()=>{}}
                            /></span>
                        </MDBCol>
                        <MDBCol xs={'12'} sm={'6'} className={'mt-2'}>
                            <div className="input-group sm-form form-sm form-1 pl-0">
                                <MDBInput hint="Search" type="text" containerClass="active-pink active-pink-2 mt-0 mb-3" />
                            </div>
                        </MDBCol>

                    </MDBRow>

                    <MDBTable striped responsive>
                        <MDBTableHead columns={data_people.columns}/>
                        <MDBTableBody rows={data_people.rows} />
                    </MDBTable>
                    <MDBRow>
                        <MDBPagination circle>
                            <MDBPageItem disabled>
                                <MDBPageNav className="page-link">
                                    <span>First</span>
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem disabled>
                                <MDBPageNav className="page-link" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem active>
                                <MDBPageNav className="page-link">
                                    1 <span className="sr-only">(current)</span>
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav className="page-link">
                                    2
                                </MDBPageNav>
                            </MDBPageItem>

                            <MDBPageItem>
                                <MDBPageNav className="page-link">
                                    &raquo;
                                </MDBPageNav>
                            </MDBPageItem>
                        </MDBPagination>
                    </MDBRow>
                </MDBContainer>

            </AppDrawer>
        );
    }
}

export default Profile;
