import React, {Component} from 'react';

export default class refinance1 extends Component {
	constructor(props) {
      super(props);
      this.state={
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
      // console.log($('.input-field-one').val());
      // mailInfo.push($('.input-field-one').val());
      // console.log(mailInfo)
    }
    step2() {
      $('.three').removeClass('step');
      $('.two').addClass('step');
      // console.log($('.input-field-two').val());
      // mailInfo.push($('.input-field-two').val());
    }
    step3a() {
      $('.four').removeClass('step');
      $('.three').addClass('step');
      $('.input-field-three-a').addClass('active');
      // console.log($('.input-field-three-a.active').text())
    }
    step3b() {
      $('.four').removeClass('step');
      $('.three').addClass('step');
      $('.input-field-three-b').addClass('active');
      // console.log($('.input-field-three-b').text();
    }
    step4a() {
      $('.five').removeClass('step');
      $('.four').addClass('step');
      console.log($('.input-field-three-b .active'))
      // console.log($('.input-field-four-a').text());
      let inputFourA = $('.input-field-four-a').text();
    }
    step4b() {
      $('.five').removeClass('step');
      $('.four').addClass('step');
      // console.log($('.input-field-four-b').text());
      let inputFourB = $('.input-field-four-b').text();
    }
    step4c() {
      $('.five').removeClass('step');
      $('.four').addClass('step');
      // console.log($('.input-field-four-c').text());
      let inputFourC = $('.input-field-four-c').text();
    }
    step4d() {
      $('.five').removeClass('step');
      $('.four').addClass('step');
      // console.log($('.input-field-four-d').text());
      let inputFourD = $('.input-field-four-d').text();
    }
    step5() {
      $('.six').removeClass('step');
      $('.five').addClass('step');
      console.log($('.input-field-five').val());
    }
    step6() {
      $('.eleven').removeClass('step');
      $('.six').addClass('step');
      console.log($('.input-field-six').val());
    }
    step11() {
      $('.twelve').removeClass('step');
      $('.eleven').addClass('step');
      console.log($('.input-field-six').val());
    }
    step12() {
      $('.seven').removeClass('step');
      $('.twelve').addClass('step');
      console.log($('.input-field-six').val());
    }
    step7a() {
      $('.eight').removeClass('step');
      $('.seven').addClass('step');
      // console.log($('.input-field-seven').text());
      let inputSevenA = $('.input-field-seven-a').text();
    }
    step7b() {
      $('.eight').removeClass('step');
      $('.seven').addClass('step');
      // console.log($('.input-field-seven').text());
      let inputSevenB = $('.input-field-seven-b').text();
    }
    step7c() {
      $('.eight').removeClass('step');
      $('.seven').addClass('step');
      // console.log($('.input-field-seven').text());
      let inputSevenC = $('.input-field-seven-c').text();
    }
    step7d() {
      $('.eight').removeClass('step');
      $('.seven').addClass('step');
      // console.log($('.input-field-seven').text());
      let inputSevenD = $('.input-field-seven-d').text();
    }
    step7e() {
      $('.eight').removeClass('step');
      $('.seven').addClass('step');
      // console.log($('.input-field-seven').text());
      let inputSevenE = $('.input-field-seven-e').text();
    }
    step8() {
      $('.nine').removeClass('step');
      $('.eight').addClass('step');
      console.log($('.input-field-eight;').val());
    }
    step9() {
      $('.ten').removeClass('step');
      $('.nine').addClass('step');
      window.location.href= 'mailto:tealkrysta92@gmail.com?subject=' + $('.input-field-one').val() + '&body=Name: ' + $('.input-field-one').val() + '%0D%0A' + 'State: ' + $('.input-field-two').val() + '%0D%0A' + 'Type: ' + $('.input-field-three-a.active').text() + $('.input-field-three-b.active').text() + '%0D%0A' + 'Type of Property: ' + $('.input-field-four').text() + '%0D%0A' + 'Approximate purchase price: ' + $('.input-field-five').val() + '%0D%0A' + 'Amount for down payment: ' + $('.input-field-six').val() + '%0D%0A' + 'How is your credit? ' + $('.input-field-seven').text() + '%0D%0A' + 'Email address: ' + $('.input-field-eight').val() + '%0D%0A' + 'Phone Number ' + $('.input-field-nine').val()
      // window.location.href= 'mailto:tealkrysta92@gmail.com?subject=' + $('.input-field-one').val() + '&body=Name: ' + $('.input-field-one').val() + '%0D%0A' + 'State:' + $('.input-field-two').val() + '%0D%0A' + $('.input-field-three').text() + '%0D%0A' + 'Type of Property: ' + $('.input-field-four').text() + '%0D%0A' + 'Approximate purchase price: ' + $('.input-field-five').val() + '%0D%0A' + 'Amount for down payment: ' + $('.input-field-six').val() + '%0D%0A' + 'How is your credit? ' + $('.input-field-seven').text() + '%0D%0A' + 'Email address: ' + $('.input-field-eight').val() + '%0D%0A' + 'Phone Number ' + $('.input-field-nine').val()
    }

    render() {
      return (
        <div class="whole">
          <div class="one">
            <div class="center top-pad">
              <h4>*Refinance*</h4>
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
                    <img class="image-clickable" src="../sass/images/Primary.gif"></img>
                    <p class="input-field-three-a">Primary</p>
                </button>
                <button onClick={this.step3b} class="pur-but-three">
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
                <button onClick={this.step4a} class="pur-but-four">
                    <img class="image-clickable" src="../sass/images/Single.gif"></img>
                    <p class="input-field-four-a">Single Family</p>
                </button>
                <button onClick={this.step4b} class="pur-but-four">
                    <img class="image-clickable" src="../sass/images/Double.gif"></img>
                    <p class="input-field-four-b">2-4 Unit</p>
                </button>
                <button onClick={this.step4c} class="pur-but-four">
                    <img class="image-clickable" src="../sass/images/Condo.gif"></img>
                    <p class="input-field-four-c">Condo/Townhouse</p>
                </button>
                <button onClick={this.step4d} class="pur-but-four">
                    <img class="image-clickable" src="../sass/images/Commercial.gif"></img>
                    <p class="input-field-four-d">Commercial</p>
                </button>
              </div>
            </div>
          </div>
          <div class="step five">
            <div class="center top-pad">
              <h4>Approximate Current Loan Balance</h4>
              <div class="slidecontainer">
                <div>
                  <span id="range-val-one" onChange={this.updateRangeOne}>$0
                  </span>
                </div>
                <span>$0</span>
                <input type="range" id="start" name="volume"
                  min="60000" max="2000000" class="slider input-field-five" id="myRange" onChange={this.updateTextInputOne}/>
                <span>$2M+</span>
              </div>
              <button onClick={this.step5} class="pur-but-five" type="submit">Continue</button>
            </div>
          </div>
          <div class="step six">
            <div class="center top-pad">
              <h4>Approximate Current Property Value</h4>
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
          <div class="step eleven">
            <div class="center top-pad">
              <h4>How much cash would you like?</h4>
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
              <button onClick={this.step11} class="pur-but-eleven" type="submit">Continue</button>
            </div>
          </div>
          <div class="step twelve">
            <div class="center top-pad">
              <p>Property Zip Code</p>
              <input class="input-bar input-field-eight" type="text"/>
              <button onClick={this.step12} class="pur-but-twelve" type="submit">Continue</button>
            </div>
          </div>
          <div class="step seven">
            <div class="center top-pad">
              <div>
                <h4>How is your credit?</h4>
                <button onClick={this.step7a} class="pur-but-seven">
                    <img class="image-clickable" src="../sass/images/Dontknow.gif"></img>
                    <p class="input-field-seven-a">Don't Know</p>
                </button>
                <button onClick={this.step7b} class="pur-but-seven">
                    <img class="image-clickable" src="../sass/images/Poor.gif"></img>
                    <p class="input-field-seven-b">Poor</p>
                </button>
                <button onClick={this.step7c} class="pur-but-seven">
                    <img class="image-clickable" src="../sass/images/Fair.gif"></img>
                    <p class="input-field-seven-c">Fair</p>
                </button>
                <button onClick={this.step7d} class="pur-but-seven">
                    <img class="image-clickable" src="../sass/images/Good.gif"></img>
                    <p class="input-field-seven-d">Good</p>
                </button>
                <button onClick={this.step7e} class="pur-but-seven">
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
