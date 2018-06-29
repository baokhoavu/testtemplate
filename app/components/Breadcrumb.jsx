import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'
import _ from 'lodash';

export default class Breadcrumb extends Component {
    constructor(props) {
        super(props);
    }

    renderSteps() {
        if (this.props.steps != null) {
            return _.map(this.props.steps, (c, i) => {
                return(
                        <li className="breadcrumb-item"><NavLink exact to={c.link}>{c.name}</NavLink></li>
                    )
                }
            );
        }
    }

    renderCurrentPage() {
        if (this.props.currentPage != null) {
            return (
                <li className="breadcrumb-item active" aria-current="page">{this.props.currentPage}</li>
            );
        }
    }

    render() {
        return(
            // <nav aria-label="breadcrumb" role="navigation">
            //     <ol className="breadcrumb">
            //     <li className="breadcrumb-item"><NavLink exact to="/">Home</NavLink></li>
            //     {this.renderSteps()}
            //     {this.renderCurrentPage()}
            //     </ol>
            // </nav>
            <div class="col-lg-12 footer-message header-row">
                HomeRatesToday.com is not a Financial Service Company, We do not offer loans or charge fees to you for the information we provide. This website is for informational purposes only. Please call or submit your information to be directed to a licensed professional in your area.
            </div>
        );
    }
}
