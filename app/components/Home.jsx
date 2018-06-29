import React, {Component} from 'react';

import Breadcrumb from './Breadcrumb.jsx';

export default class Home extends Component {

    constructor() {
      super();
    }

    componentDidMount() {
    }

    renderBreadcrumbs() {
        return (
            <Breadcrumb />
        );
    }

    render() {
      return (
            <article>
                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            <div class="blue-box">Who We Are</div>
                            <div class="grey-box">
                                <p>The HomeRatesToday.com Team is here to help you with questions regarding any information you have about our website. We pride ourselves in connecting you with lenders offering some of the lowests rates nationwide and make the loan process simple, straightfoward and fast for borrowers seeking a mortgage in the California and Washington area.
                                </p>
                                <ul class="body two">
                                    <li>Accurate and reliable quotes</li>
                                    <li>Quick 30 second form</li>
                                    <li>No SSN required</li>
                                    <li>No credit check conducted</li>
                                    <li>Your information is kept private</li>
                                    <li>Consultation with no obligation</li>
                                    <li>No Hassle</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm">
                            Hi
                        </div>
                        <div class="col-sm">
                            Hi
                        </div>
                    </div>
                </div>
                <section className="row col-lg-12 nopadding">

                </section>
            </article>
      );
    }
}
