import {DocsComponent} from '@core/DocsComponent';

export class DocsStateComponent extends DocsComponent{
	constructor(...args) {
		super(...args);
	}

	get template () {
		return JSON.stringify(this.state)	
	}

	initState(initialState = {}) {
		this.state = {...initialState}
	}

	setState(newState) {
		this.state = {...this.state,...newState};
		this.$root.html(this.template)
	}
}