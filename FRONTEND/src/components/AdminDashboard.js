import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AdminServiceMethods from '../service/AdminServiceMethods';

class AdminDashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            adminId: '',
            firstName: '',
        };

        this.loadAdmin = this.loadAdmin.bind(this);
    }

    componentDidMount() {
        this.loadAdmin();
    }

    loadAdmin = () => {
        let admin = JSON.parse(sessionStorage.getItem('admin'));
        this.setState({
            adminId: admin.userId,
            firstName: admin.userFirstName,
        });
    };

    logout() {
        AdminServiceMethods.logoutAdmin();
    }

    render() {
        let { adminId, firstName } = this.state;
        return (
            <div className="container">
                <div className="row my-3">
                    <div className="col-sm-6">
                        <h2 className="text-capitalize">Hello, {firstName}</h2>
                    </div>
                    <div className="col-sm-6">
                        <NavLink
                            onClick={this.logout}
                            className="btn btn-link btn-danger text-light offset-10 text-uppercase text-decoration-none "
                            to="/"
                        >
                            Logout
                        </NavLink>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
                                className="card-img-top"
                                alt="Add Doctor"
                                style={{ width: '90%', height: '300px' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">Add New Doctor</h5>
                                <p className="card-text">Register a new doctor to the database.</p>
                                <button
                                    onClick={() => { this.props.history.push('/add-new-doctor') }}
                                    className="btn btn-primary"
                                >
                                    ADD
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/6401/6401525.png"
                                className="card-img-top"
                                alt="View Doctor List"
                                style={{ width: '80%', height: '300px' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">View Doctor List</h5>
                                <p className="card-text">View details of all registered doctors.</p>
                                <button
                                    onClick={() => { this.props.history.push('/doctor-list-admin') }}
                                    className="btn btn-warning"
                                >
                                    VIEW
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img
                                
                                src="https://cdn-icons-png.flaticon.com/512/10415/10415623.png"
                                className="card-img-top"
                                alt="Add Donor"
                                style={{ width: '80%', height: '300px' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">Add New Donor</h5>
                                <p className="card-text">Add a new blood donor to the database.</p>
                                <button
                                    onClick={() => { this.props.history.push('/add-new-donor') }}
                                    className="btn btn-info"
                                >
                                    ADD
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/10415/10415630.png"
                                className="card-img-top"
                                alt="View Donor List"
                                style={{ width: '80%', height: '300px' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">View Donor List</h5>
                                <p className="card-text">View details of all registered donors.</p>
                                <button
                                    className="btn btn-success"
                                    onClick={() => { this.props.history.push('/donorList') }}
                                >
                                    VIEW
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/6127/6127026.png"
                                className="card-img-top"
                                alt="View Donor List"
                                style={{ width: '80%', height: '300px' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">Add Patient</h5>
                                <p className="card-text">Add a new Patient to the database..</p>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => { this.props.history.push('/patient-sign-up') }}
                                >
                                    ADD
                                </button>
                            </div>
                        </div>
                    </div>
               

              
                    <div className="col-md-4">
                        <div className="card">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/5259/5259073.png"
                                className="card-img-top"
                                alt="View Patient List"
                                style={{ width: '90%', height: '300px' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">View Patient List</h5>
                                <p className="card-text">View details of all patients.</p>
                                <button
                                    onClick={() => { this.props.history.push('/patientList') }}
                                    className="btn btn-danger"
                                >
                                    VIEW
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        );
    }
}

export default AdminDashboard;
