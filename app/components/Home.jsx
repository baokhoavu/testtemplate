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
                        <div class="col-md">
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
                        <div class="col-md-5 home-mid-row">
                            <p>Welcome to HomeRates Today!</p>
                            <p>How can we help you today?</p>
                            <p>Please choose an option below to start</p>
                            <form action="./refinance/step1">
                                <button class="button">
                                    <img class="image-clickable" src="../sass/images/cashout.gif"></img>
                                    <p>Refinance</p>
                                </button>
                            </form>
                            <form action="./purchase/step1">
                            <button class="button">
                                <img class="image-clickable" src="../sass/images/commercial.gif"></img>
                                <p>Purchase</p>
                            </button>
                            </form>
                            <form action="./refinance/step1">
                            <button class="button">
                                <img class="image-clickable" src="../sass/images/condo.gif"></img>
                                <p>Cash Out Refinance</p>
                            </button>
                            </form>
                        </div>
                        <div class="col-md">
                            <ul class="home-right-list">
                                <li>There are lenders that specialize in:</li>
                                <li>Bad Credit Refinancing</li>
                                <li>Stated Income Loans</li>
                                <li>Cash Out Loans</li>
                                <li>Self Employed</li>
                                <li>Investment Properties</li>
                                <li>Credit scores as low as 450 is ok</li>
                                <li>VA Loans</li>
                                <li>FHA Loans</li>
                                <li>Conventional</li>
                                <li>Jumbo</li>
                            </ul>
                       </div>
                    </div>
                </div>
                <section className="row col-lg-12 nopadding">

                </section>
            </article>
      );
    }
}
