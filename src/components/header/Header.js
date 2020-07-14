import {DocsComponent} from '@core/DocsComponent';
import {changeTitle} from '@/redux/actions';
import {defaultTitle} from '@/constants';
import {$} from '@core/dom';
import {ActiveRoute} from '@core/router/ActiveRoute';

export class Header extends DocsComponent {
	static className = 'docs__header';
	static parentTag = 'header';

	constructor($root, options) {
		super($root, {
			name: 'Header',
			listeners: ['input', 'click'],
			...options
		})
	}

	toHTML() {
		const title = this.store.getState().title || defaultTitle;
		return `
			<input type="text" class="input" value="${title}"/>

					<div>
						<div class="btn" data-btn="remove">
							<i class="material-icons" data-btn="remove">delete_forever</i>
						</div>
						<div class="btn" data-btn="exit">
							<i class="material-icons" data-btn="exit">exit_to_app</i>
						</div>
					</div>
		 `;
	}

	onInput(event) {
		const $target = $(event.target);
		this.$dispatch(changeTitle($target.text()))
	}
	onClick(event) {
		const $target = $(event.target);
		console.log($target.dataset('btn'))

		if ($target.dataset('btn') === 'remove') {
			const decision = confirm('You sure you want delete this document?')
			if (decision) {
				localStorage.removeItem(`doc:${ActiveRoute.param}`);
				ActiveRoute.navigate('');
			}
		} else if ($target.dataset('btn') === 'exit') {
			ActiveRoute.navigate('');
		}
	}
} 