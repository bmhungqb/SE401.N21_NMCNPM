import React, { Component } from 'react';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import "./sideBar.scss"
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { NavLink } from 'react-router-dom';
import { faEllipsisVertical, faEllipsisV, faElevator } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class SideBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isActive: false
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="border-end bg-white" id="sidebar-wrapper">
                    <div className="sidebar-heading bg-light">
                        <div className='logo'></div>
                        <p className='title'>BookHolic Management</p>
                    </div>
                    <div className='sidebar-infor'>
                        <div className='avatar'></div>
                        <div className='infor-user'>
                            <p className='name'>Rubikk</p>
                            <p className='role'>Admin</p>
                        </div>
                        <div class="dropdown dropleft">
                            <button
                                class="btn"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            // style={ }
                            >
                                <FontAwesomeIcon icon={faEllipsisVertical} fontSize={'20px'} />
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <NavLink
                                    className="dropdown-item"
                                    to="/profile">
                                    My Profile
                                </NavLink>
                                <NavLink
                                    className="dropdown-item"
                                    to="/logout">
                                    Logout
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="list-group list-group-flush">
                        <NavLink className="list-group-item list-group-item-action list-group-item-light p-3" to='/home'>Home</NavLink>
                        <NavLink className="list-group-item list-group-item-action list-group-item-light p-3" to='/book-management'>Book Management</NavLink>
                        <NavLink className="list-group-item list-group-item-action list-group-item-light p-3" to="/book-purchase">Book Purchase</NavLink>
                        <NavLink className="list-group-item list-group-item-action list-group-item-light p-3" to="/book-rental">Book Rental</NavLink>
                        <NavLink className="list-group-item list-group-item-action list-group-item-light p-3" to="/customer-management">Customer Management</NavLink>
                        <NavLink className="list-group-item list-group-item-action list-group-item-light p-3" to="/supplier-management">Supplier Management</NavLink>
                        <NavLink className="list-group-item list-group-item-action list-group-item-light p-3" to="/user-management">Users</NavLink>
                        <NavLink className="list-group-item list-group-item-action list-group-item-light p-3" to="/customer-">Discount code</NavLink>
                        <NavLink className="list-group-item list-group-item-action list-group-item-light p-3" to="/conversation">Conversation</NavLink>
                        <NavLink className="list-group-item list-group-item-action list-group-item-light p-3" to="/notifications">Notifications</NavLink>
                        <NavLink className="list-group-item list-group-item-action list-group-item-light p-3" to="/technical-help">Get Technical Help</NavLink>
                        <NavLink className="list-group-item list-group-item-action list-group-item-light p-3" to="/s">Settings</NavLink>
                    </div>
                </div>
            </React.Fragment >
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
