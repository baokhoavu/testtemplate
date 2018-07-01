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
      $('#range-val-one').text('$' + $('.input-field-five').val())
    }
    updateTextInputTwo() {
      $('#range-val-two').text('$' + $('.input-field-six').val())
    }
    updateRangeOne() {
      $('.input-field-five').val($('#range-val-one').text())
    }
    updateRangeTwo() {
      $('.input-field-six').val($('#range-val-two').text())
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
    step3() {
      $('.four').removeClass('step');
      $('.three').addClass('step');
      console.log($('.input-field-three').text())
    }
    step4() {
      $('.five').removeClass('step');
      $('.four').addClass('step');
      console.log($('.input-field-four').text());
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
    step7() {
      $('.eight').removeClass('step');
      $('.seven').addClass('step');
      console.log($('.input-field-seven').text());
    }
    step8() {
      $('.nine').removeClass('step');
      $('.eight').addClass('step');
      console.log($('.input-field-eight;').val());
    }
    step9() {
      $('.ten').removeClass('step');
      $('.nine').addClass('step');
      window.location.href= 'mailto:tealkrysta92@gmail.com?subject=' + $('.input-field-one').val() + '&body=Name: ' + $('.input-field-one').val() + '\r\n' + 'State:' + $('.input-field-two').val() + '%0D%0A' + $('.input-field-three').text() + '%0D%0A' + 'Type of Property: ' + $('.input-field-four').text() + '%0D%0A' + 'Approximate purchase price: ' + $('.input-field-five').val() + '%0D%0A' + 'Amount for down payment: ' + $('.input-field-six').val() + '%0D%0A' + 'How is your credit? ' + $('.input-field-seven').text() + '%0D%0A' + 'Email address: ' + $('.input-field-eight').val() + '%0D%0A' + 'Phone Number ' + $('.input-field-nine').val()
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
                <button onClick={this.step3} class="pur-but-three">
                    <img class="image-clickable" src="../sass/images/Primary.gif"></img>
                    <p class="input-field-three">Primary</p>
                </button>
                <button onClick={this.step3} class="pur-but-three">
                    <img class="image-clickable" src="../sass/images/Rental.gif"></img>
                    <p class="input-field-three">Rental</p>
                </button>
              </div>
            </div>
          </div>
          <div class="step four">
            <div class="center top-pad">
              <div>
                <h4>Type of property?</h4>
                <button onClick={this.step4} class="pur-but-four">
                    <img class="image-clickable" src="../sass/images/Single.gif"></img>
                    <p class="input-field-four">Single Family</p>
                </button>
                <button onClick={this.step4} class="pur-but-four">
                    <img class="image-clickable" src="../sass/images/Double.gif"></img>
                    <p class="input-field-four">2-4 Unit</p>
                </button>
                <button onClick={this.step4} class="pur-but-four">
                    <img class="image-clickable" src="../sass/images/Condo.gif"></img>
                    <p class="input-field-four">Condo/Townhouse</p>
                </button>
                <button onClick={this.step4} class="pur-but-four">
                    <img class="image-clickable" src="../sass/images/Commercial.gif"></img>
                    <p class="input-field-four">Commercial</p>
                </button>
              </div>
            </div>
          </div>
          <div class="step five">
            <div class="center top-pad">
              <h4>Approximate purchase price</h4>
              <div class="slidecontainer">
                <div>
                  <span id="range-val-one" onChange={this.updateRangeOne}>$60000
                  </span>
                </div>
                <span>$60k</span>
                <input type="range" id="start" name="volume"
                  min="60000" max="2000000" class="slider input-field-five" id="myRange" onChange={this.updateTextInputOne}/>
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
                  <span id="range-val-two" onChange={this.updateRangeTwo}>$60000
                  </span>
                </div>
                <span>$60k</span>
                <input type="range" min="60000" max="2000000" class="slider input-field-six" id="myRange" onChange={this.updateTextInputTwo}/>
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
                <button onClick={this.step7} class="pur-but-seven">
                    <img class="image-clickable" src="../sass/images/Dontknow.gif"></img>
                    <p class="input-field-seven">Don't Know</p>
                </button>
                <button onClick={this.step7} class="pur-but-seven">
                    <img class="image-clickable" src="../sass/images/Poor.gif"></img>
                    <p class="input-field-seven">Poor</p>
                </button>
                <button onClick={this.step7} class="pur-but-seven">
                    <img class="image-clickable" src="../sass/images/Fair.gif"></img>
                    <p class="input-field-seven">Fair</p>
                </button>
                <button onClick={this.step7} class="pur-but-seven">
                    <img class="image-clickable" src="../sass/images/Good.gif"></img>
                    <p class="input-field-seven">Good</p>
                </button>
                <button onClick={this.step7} class="pur-but-seven">
                    <img class="image-clickable" src="../sass/images/Excellent.gif"></img>
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
