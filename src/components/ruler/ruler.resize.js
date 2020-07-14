import {$} from '@core/dom';
import {capitalize} from '@core/utils';

let toddlerValue = null;
let toddlerSide = null;
let paddingValue = null;
let paddingSide = null;

export function resize(event) {
	return new Promise(resolve => {
		const $resizer = $(event.target);
		const $resizerParent = $($resizer.getParentNode());
		const $resizeTarget = $('[data-type="resizable"]');

		const targetStyle = $resizeTarget.getStyles();
		const targetCoords = $resizeTarget.getCoords();
		const resizerParent = $resizerParent.getCoords();

		const side = event.target.dataset.resize;

		const initialPaddings = {
			left: parseInt(targetStyle.paddingLeft),
			right: parseInt(targetStyle.paddingRight),
			top: parseInt(targetStyle.paddingTop),
			bottom: parseInt(targetStyle.paddingBottom)
		};
		const initialCoords = $resizer.getCoords();
		let coords = initialCoords;
		let delta;	 

		document.onmousemove = (e) => {
			coords = $resizer.getCoords();
	
			if (side === 'left' ||
				  side === 'right') {
				delta = e.pageX - coords.left;
	
				if ((coords.left <= targetCoords.left && delta <= 0) ||
						(coords.right >= targetCoords.right && delta >= 0)) {
					delta = 0;
				}

				toddlerValue = delta  + coords.left;
				toddlerSide = side;
				$resizer.css({
						'left': toddlerValue + 'px'
				});
			}

			if (side === 'top' ||
					side === 'bottom') {
				delta = e.pageY - coords.top;
				if ((coords.top <= targetCoords.top && delta <= 0) ||
						 coords.bottom >= targetCoords.bottom && delta >= 0) {
					delta = 0;
				}

				toddlerValue = delta  + coords.top - resizerParent.top;
				toddlerSide = side;
				$resizer.css({
						'top': toddlerValue + 'px'
				});
			}
		}

		document.onmouseup = () => {	
			setTextareaPadding(side, $resizeTarget, initialPaddings, initialCoords, coords);
			resolve({
				value: {
					[paddingSide]: paddingValue,
					[toddlerSide || side]: toddlerValue || coords[side] - resizerParent.top 
				},
				side
			})
	
			document.onmousemove = null;
			document.onmouseup = null;
		}
	})	
}

function setTextareaPadding(side, target, initialPaddings, initialCoords, coords) {
	if (side === 'left' ||
			side === 'top') {
		const padName = `padding${capitalize(side)}`
		paddingValue = initialPaddings[side] + coords[side] - initialCoords[side];
		paddingSide = padName;
		target.css({
			[padName]: paddingValue + 'px'
		});
		return;
	}
	if (side === 'right' ||
			side === 'bottom') {
		const padName = `padding${capitalize(side)}`;
		const oppositeSide = side === 'right'
												 ? 'left'
												 : 'top';
		paddingValue = initialPaddings[side] + initialCoords[oppositeSide] - coords[oppositeSide];
		paddingSide = padName;
		target.css({
			[padName]: paddingValue + 'px'
		});
		return;
	}
}
