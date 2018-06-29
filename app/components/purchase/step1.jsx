import React, {Component} from 'react';

export default class purchase1 extends Component {
	constructor() {
    	super();
  	}

  	render() {
	    return (
    	    <div class="center top-pad">
    	    	<h4>*Purchase*</h4>
    	    	<p>What is your name?</p>
    	    	<form>
				    <input class="input-field" type="text"/>
				    <button class="submit-button" type="submit">Continue</button>
				</form>
    	    </div>
    	)
  	}
}
