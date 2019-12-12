import React, {PureComponent} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Avatar from 'react-avatar';

import moment from 'moment';
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
import SalesService from "../../services/sales.service";
import AppButton from "../../components/commons/AppButton";
import {StorageService} from "../../services/storage.service";
import { StorageKeys } from "../../services/StorageKeys";

interface IProps {
    location: any
}

interface IState {
    page: number
    pageCount: number,
    sales: any[]
    isLoading: boolean,

    fromDate: Date,
    toDate: Date,
}

class Profile extends PureComponent<IProps, IState> {
    constructor(props: IProps){
        super(props);
        this.state = {
            pageCount: 1,
            page: 1,
            sales: [],
            isLoading: false,

            fromDate: new Date(),
            toDate: new Date(),
        }
    }

    componentDidMount(): void {
        this.fetchSales(1)

    }
    toDateSelected = (date:any) => {


        const toDate: string = moment(this.state.toDate).format('YYYY-MM-DD HH:mm:ss.SSSSSS');
        const fromDate: string = moment(this.state.fromDate).format('YYYY-MM-DD HH:mm:ss.SSSSSS');

        const filter = `filter=createdAt||gt||${fromDate}&filter=createdAt||lt||${toDate}`

        this.fetchSales(this.state.page, filter);
    }
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
                    label: 'Price',
                    field: 'price',
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
                    'price': 'Y1,200',
                    'commission': 'Y200',
                    'date': 'December 1, 2019',
                }
            ]
        };
        return (
            <AppDrawer activeRoute={pathname}>
                <MDBContainer style={{backgroundColor: '#fff'}}>
                    <MDBRow>
                        <MDBCol className={'offset-md-5  offset-lg-5 offset-sm-1 mb-lg-0 mb-5 text-center'}  xs={'12'} lg="2" md="2" >

                            <Avatar style={{marginTop: '12%',}} round name={StorageService.getData(StorageKeys.fullName) ? StorageService.getData(StorageKeys.fullName): ''} />
                            <h5 className="font-weight-bold mt-4 mb-3 text-center">{StorageService.getData(StorageKeys.fullName)}</h5>
                            <p className="text-uppercase blue-text text-center">{StorageService.getData(StorageKeys.rank)}</p>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow className={'ml-3'}>
                        <MDBCol xs={'12'} sm={'6'} className={'mt-3'} >
                            <span> From: <DatePicker
                                selected={this.state.fromDate}
                                onChange={(date: Date) => this.setState({fromDate: date})}
                            /></span>
                        </MDBCol>
                        <MDBCol xs={'12'} sm={'6'} className={'mt-3'}>
                            <span> To: <DatePicker
                                selected={this.state.toDate}
                                onChange={this.toDateSelected}
                            /></span>
                        </MDBCol>
                        <MDBCol xs={'12'} sm={'6'} className={'mt-2'}>
                            <div className="input-group sm-form form-sm form-1 pl-0">
                                <MDBInput hint="Search" type="text" containerClass="active-pink active-pink-2 mt-0 mb-3" />
                            </div>
                        </MDBCol>
                        <MDBCol xs={'12'} sm={'6'} className={'mt-2'}>
                            <AppButton onClick={()=>{}} buttonText={'Search'}/>
                        </MDBCol>


                    </MDBRow>

                    <MDBTable striped autoWidth responsive>
                        <MDBTableHead columns={data_people.columns}/>
                        <MDBTableBody rows={this.state.sales} />
                    </MDBTable>
                    <MDBRow className={'mt-7 ml-1 mr-1'} style={{marginTop: '5%'}}>
                        <MDBPagination size={'sm'}>
                                {this.renderPagination()}
                            </MDBPagination>
                        </MDBRow>
                </MDBContainer>

            </AppDrawer>
        );
    }
    fetchSales = async (page: number, filter: string|null = null) => {
        this.setState({isLoading: true})

        const response = await SalesService.getSales(page, filter);

        this.setState({isLoading: false})
        if (response) {
            const { data, pageCount, page } = response;
            const sales = data.map((datum: any) => {
                return {
                    id: datum.id,
                    'name': datum.product.productName,
                    'price': datum.price,
                    'commission': (datum.price * 0.3),
                    'date': datum.updatedAt,
                };
            });
            this.setState({sales, pageCount, page})
        }

    }
    renderPagination = () => {
        const paginationItems = []
        for (let i = 1; i <= this.state.pageCount; i ++) {

            paginationItems.push(
                <MDBPageItem onClick={() => this.fetchSales(i)} key={i} active={i === this.state.page}>
                    <MDBPageNav className="page-link">
                        {i} <span className="sr-only">(current)</span>
                    </MDBPageNav>
                </MDBPageItem>
            );
        }
        return paginationItems;
    }
}

export default Profile;
