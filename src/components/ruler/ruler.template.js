export function createRuler(state) {
	return `
			<div class="ruler-h">
				<div class="left" data-resize="left" style="left:${getPosition(state, 'left')}px"></div>
				<div class="right" data-resize="right" style="left:${getPosition(state, 'right')}px"></div>
			</div>

			<div class="ruler-v">
				<div class="top" data-resize="top" style="top:${getPosition(state, 'top')}px"></div>
				<div class="bottom" data-resize="bottom" style="top:${getPosition(state, 'bottom')}px"></div>
			</div>
		 `;
}

function getPosition(state, side = '') {
	if (!('rulerState' in state)) return;
	
	const value = state['rulerState'][side]?.[side];

	if (!value) return;

	return value;
}
