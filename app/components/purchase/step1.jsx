import React, {Component} from 'react';

export default class purchase1 extends Component {
	constructor(props) {
    	super(props);
      this.state={
        mailInfo: []
      }
  	}
    mailClick() {
      this.addClass('Hiding');

    }
    updateTextInputOne() {
      const r1 = $('.input-field-five').val();
      const r2 = r1.toString();
      const r3 = r2 - 10000;
      const r4 = r2 - -15000;
      $('#range-val-one').text('$' + r3 );
      $('#range-val-oneb').text('$' + r4 );
    }
    updateTextInputTwo() {
      const r1 = $('.input-field-six').val();
      const r2 = r1.toString();
      const r3 = r2 - 10000;
      const r4 = r2 - -15000;
      $('#range-val-two').text('$' + r3 );
      $('#range-val-twob').text('$' + r4 );
    }
    updateRangeOne() {
      $('.input-field-five').val($('#range-val-one').text())
    }
    updateRangeOneb() {
      $('.input-field-five').val($('#range-val-oneb').text())
    }
    updateRangeTwo() {
      $('.input-field-six').val($('#range-val-two').text())
    }
    updateRangeTwob() {
      $('.input-field-six').val($('#range-val-twob').text())
    }

    step1() {
      $('.two').removeClass('step');
      $('.one').addClass('step');
      console.log($('.input-field-one').val());
    }
    step2() {
      $('.three').removeClass('step');
      $('.two').addClass('step');
      console.log($('.input-field-two').val());
    }
    step3a() {
      $('.four').removeClass('step');
      $('.three').addClass('step');
      $('.input-field-three-a').addClass('active');
    }
    step3b() {
      $('.four').removeClass('step');
      $('.three').addClass('step');
      $('.input-field-three-b').addClass('active');
    }
    step4a() {
      $('.five').removeClass('step');
      $('.four').addClass('step');
      $('.input-field-four-a').addClass('active');
    }
    step4b() {
      $('.five').removeClass('step');
      $('.four').addClass('step');
      $('.input-field-four-b').addClass('active');
    }
    step4c() {
      $('.five').removeClass('step');
      $('.four').addClass('step');
      $('.input-field-four-c').addClass('active');
    }
    step4d() {
      $('.five').removeClass('step');
      $('.four').addClass('step');
      $('.input-field-four-d').addClass('active');
    }
    step5() {
      $('.six').removeClass('step');
      $('.five').addClass('step');
      console.log($('.input-field-five').val());
    }
    step6() {
      $('.seven').removeClass('step');
      $('.six').addClass('step');
      console.log($('.input-field-six').val());
    }
    step7a() {
      $('.eight').removeClass('step');
      $('.seven').addClass('step');
      $('.input-field-seven-a').addClass('active');
    }
    step7b() {
      $('.eight').removeClass('step');
      $('.seven').addClass('step');
      $('.input-field-seven-b').addClass('active');
    }
    step7c() {
      $('.eight').removeClass('step');
      $('.seven').addClass('step');
      $('.input-field-seven-c').addClass('active');
    }
    step7d() {
      $('.eight').removeClass('step');
      $('.seven').addClass('step');
      $('.input-field-seven-d').addClass('active');
    }
    step7e() {
      $('.eight').removeClass('step');
      $('.seven').addClass('step');
      $('.input-field-seven-e').addClass('active');
    }
    step8() {
      $('.nine').removeClass('step');
      $('.eight').addClass('step');
      console.log($('.input-field-eight').val());
    }
    step9() {
      $('.ten').removeClass('step');
      $('.nine').addClass('step');

      const name = $('.input-field-one').val();
      const state = $('.input-field-two').val();
      const renttype = $('.input-field-three-a.active').text() + $('.input-field-three-b.active').text();
      const proptype = $('.input-field-four-a.active').text() + $('.input-field-four-b.active').text() + $('.input-field-four-c.active').text() + $('.input-field-four-d.active').text();
      const price = $('.input-field-five').val();
      const downpay = $('.input-field-six').val();
      const credit = $('.input-field-seven-a.active').text() + $('.input-field-seven-b.active').text() + $('.input-field-seven-c.active').text() + $('.input-field-seven-d.active').text() + $('.input-field-seven-e.active').text();
      const email = $('.input-field-eight').val();
      const phone = $('.input-field-nine').val();

      $.ajax({
        url: "../mail/mailPurchase.php",
        method: "POST",
        data: {
          name: name,
          state: state,
          renttype: renttype,
          proptype: proptype,
          price: price,
          downpay: downpay,
          credit: credit,
          email: email,
          phone: phone
        },
        success: function() {
          console.log('success')
        },
        dataType: "json",
        error: function(req, err){ console.log('my message' + err); }
      });

      // window.location.href= 'mailto:tealkrysta92@gmail.com?subject=' + 'HomeRateLoan Customer: ' +  $('.input-field-one').val() + '&body=Name: ' + $('.input-field-one').val() + '%0D%0A' + 'State:' + $('.input-field-two').val() + '%0D%0A' + 'Type: ' + $('.input-field-three-a.active').text() + $('.input-field-three-b.active').text() + '%0D%0A' + 'Type of Property: ' + $('.input-field-four-a.active').text() + $('.input-field-four-b.active').text() + $('.input-field-four-c.active').text() + $('.input-field-four-d.active').text() + '%0D%0A' + 'Approximate purchase price: ' + '$' + $('.input-field-five').val() + '%0D%0A' + 'Amount for down payment: ' + '$' + $('.input-field-six').val() + '%0D%0A' + 'How is your credit? ' + $('.input-field-seven-a.active').text() + $('.input-field-seven-b.active').text() + $('.input-field-seven-c.active').text() + $('.input-field-seven-d.active').text() + $('.input-field-seven-e.active').text() + '%0D%0A' + 'Email address: ' + $('.input-field-eight').val() + '%0D%0A' + 'Phone Number ' + $('.input-field-nine').val()
    }

  	render() {
	    return (
        <div class="whole">
          <div class="one">
      	    <div class="center top-pad">
      	    	<h4>*Purchase*</h4>
      	    	<p>What is your name?</p>
				      <input class="input-bar input-field-one" type="text"/>
				      <button onClick={this.step1} class="pur-but-one">Continue</button>
      	    </div>
          </div>
          <div class="step two">
            <div class="center top-pad">
              <p>State property is located</p>
              <select class="input-field-two">
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
              <button onClick={this.step2} class="pur-but-two" type="submit">Continue</button>
            </div>
          </div>
          <div class="step three">
            <div class="center top-pad">
              <div>
                <button onClick={this.step3a} class="pur-but-three">
                    <img class="image-clickable" src="../sass/images/Primary.png"></img>
                    <p class="input-field-three-a">Primary</p>
                </button>
                <button onClick={this.step3b} class="pur-but-three">
                    <img class="image-clickable" src="../sass/images/Rental.png"></img>
                    <p class="input-field-three-b">Rental</p>
                </button>
              </div>
            </div>
          </div>
          <div class="step four">
            <div class="center top-pad">
              <div>
                <h4>Type of property?</h4>
                <button onClick={this.step4a} class="pur-but-four">
                    <img class="image-clickable" src="../sass/images/SingleHouse.png"></img>
                    <p class="input-field-four-a">Single Family</p>
                </button>
                <button onClick={this.step4b} class="pur-but-four">
                    <img class="image-clickable" src="../sass/images/2-4unit.png"></img>
                    <p class="input-field-four-b">2-4 Unit</p>
                </button>
                <button onClick={this.step4c} class="pur-but-four">
                    <img class="image-clickable" src="../sass/images/Condo.gif"></img>
                    <p class="input-field-four-c">Condo/Townhouse</p>
                </button>
                <button onClick={this.step4d} class="pur-but-four">
                    <img class="image-clickable" src="../sass/images/Business.png"></img>
                    <p class="input-field-four-d">Commercial</p>
                </button>
              </div>
            </div>
          </div>
          <div class="step five">
            <div class="center top-pad">
              <h4>Approximate purchase price</h4>
              <div class="slidecontainer">
                <div>
                  <span id="range-val-one" class="left" onChange={this.updateRangeOne}>$50000
                  </span>
                  <span> to </span>
                  <span id="range-val-oneb" class="right" onChange={this.updateRangeOneb}>$70000
                  </span>
                </div>
                <span>$60k</span>
                <input type="range" id="start" name="volume"
                  min="60000" max="2000000" class="slider input-field-five" id="myRange" step="1000" onChange={this.updateTextInputOne}/>
                <span>$2M+</span>
              </div>
              <button onClick={this.step5} class="pur-but-five" type="submit">Continue</button>
            </div>
          </div>
          <div class="step six">
            <div class="center top-pad">
              <h4>Amount for down payment</h4>
              <div class="slidecontainer">
                <div>
                  <span id="range-val-two" class="left" onChange={this.updateRangeTwo}>$50000
                  </span>
                  <span> to </span>
                  <span id="range-val-twob" class="right" onChange={this.updateRangeTwob}>$70000
                  </span>
                </div>
                <span>$60k</span>
                <input type="range" min="60000" max="2000000" class="slider input-field-six" id="myRange" step="1000" onChange={this.updateTextInputTwo}/>
                <span>$2M+</span>
                {/*<input type="range" min="6" max="200" value="10"/>*/}
              </div>
              <button onClick={this.step6} class="pur-but-six" type="submit">Continue</button>
            </div>
          </div>
          <div class="step seven">
            <div class="center top-pad">
              <div>
                <h4>How is your credit?</h4>
                <button onClick={this.step7a} class="pur-but-seven">
                    <img class="image-clickable" src="../sass/images/Dontknow.png"></img>
                    <p class="input-field-seven-a">Don't Know</p>
                </button>
                <button onClick={this.step7b} class="pur-but-seven">
                    <img class="image-clickable" src="../sass/images/Poor.png"></img>
                    <p class="input-field-seven-b">Poor</p>
                </button>
                <button onClick={this.step7c} class="pur-but-seven">
                    <img class="image-clickable" src="../sass/images/Fair.png"></img>
                    <p class="input-field-seven-c">Fair</p>
                </button>
                <button onClick={this.step7d} class="pur-but-seven">
                    <img class="image-clickable" src="../sass/images/Good.png"></img>
                    <p class="input-field-seven-d">Good</p>
                </button>
                <button onClick={this.step7e} class="pur-but-seven">
                    <img class="image-clickable" src="../sass/images/Excellent.png"></img>
                    <p class="input-field-seven">Excellent</p>
                </button>
              </div>
            </div>
          </div>
          <div class="step eight">
            <div class="center top-pad">
              <p>Email address</p>
              <input class="input-bar input-field-eight" type="text"/>
              <button onClick={this.step8} class="pur-but-eight" type="submit">Continue</button>
            </div>
          </div>
          <div class="step nine">
            <div class="center top-pad">
              <p>Phone Number</p>
                <input class="input-bar input-field-nine" type="text"/>
                <button onClick={this.step9} class="pur-but-nine" type="submit">Finish</button>
            </div>
          </div>
          <div class="step ten">
            <div class="center top-pad">
              <p>Thank you for completing the survey.</p>
            </div>
          </div>
        </div>
    	)
  	}
}
