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
    MDBPagination,
    MDBPageItem,
    MDBPageNav
} from "mdbreact";
import Form  from 'react-bootstrap/Form';


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
    searchString:string
}

class Profile extends PureComponent<IProps, IState> {
    constructor(props: IProps){
        super(props);
        this.state = {
            pageCount: 1,
            page: 1,
            sales: [],
            isLoading: false,
            searchString: '',

            fromDate: new Date(),
            toDate: new Date(),
        }
    }

    componentDidMount(): void {
        this.fetchSales(1)

    }
    handleChange = (key: string, value: string) => {
        // @ts-ignore
        this.setState({[key]: value})

    }
    searchProducts = (q: string) => {
        if (q && q.length > 0) {
            const filter = `or=product.productName||cont||${q}&or=user.email||cont||${q}&or=salesSource||cont||${q}`
            this.fetchSales(this.state.page, filter);
        }

    }
    toDateSelected = (date:any) => {
        this.setState({
            toDate: date
        })

        const toDate: string = moment(date).format('YYYY-MM-DD');
        const fromDate: string = moment(this.state.fromDate).format('YYYY-MM-DD');

        const filter = `filter=createdAt||gte||${fromDate}&filter=createdAt||lte||${toDate}`

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
                    label: '名',
                    field: 'name',
                    sort: 'asc'
                },
                {
                    label: '価格',
                    field: 'price',
                    sort: 'asc'
                },
                {
                    label: '褒賞',
                    field: 'commission',
                    sort: 'asc'
                },
                {
                    label: '日付',
                    field: 'date',
                    sort: 'desc'
                },
            ],
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
                            <span> から: <DatePicker
                                selected={this.state.fromDate}
                                onChange={(date: Date) => this.setState({fromDate: date})}
                            /></span>
                        </MDBCol>
                        <MDBCol xs={'12'} sm={'6'} className={'mt-3'}>
                            <span> に: <DatePicker
                                selected={this.state.toDate}
                                onChange={this.toDateSelected}
                            /></span>
                        </MDBCol>
                        <MDBCol xs={'12'} sm={'6'} className={'mt-2'}>
                            <Form.Group >
                                <Form.Control onChange={(event: any) => this.handleChange('searchString', event.target.value)} type="text" placeholder="サーチ" />
                            </Form.Group>
                        </MDBCol>
                        <MDBCol xs={'12'} sm={'6'} className={'mt-2'}>
                            <AppButton onClick={()=>{this.searchProducts(this.state.searchString)}} buttonText={'サーチ'}/>
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
                    'commission': (datum.price * 0.03),
                    'date': datum.createdAt,
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
