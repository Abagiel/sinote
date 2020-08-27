import { storage } from '@/client/storage';

export function chooseSortType(target, sortTarget, sortType) {
	const sort = assignSortFunc(target, sortType);

  if (sortTarget === 'last-opened') {
  	return sort(numSort, 'lastOpened');
  } else if (sortTarget === 'title') {
  	return sort(strSort, 'title');
  } else if (sortTarget === 'create-date') {
  	return sort(strSort, 'createDate');
  }
}

function assignSortFunc(target, sortType) {

	return (f, field) => {
	  if (sortType === 'true') {
	    return target.sort((a, b) => f(a, b, field, 'D'))
	  } else {
	    return target.sort((a, b) => f(a, b, field, 'A'))
	  }
	}
}

function numSort(a, b, field, type) {
	const ac = storage(a)[field];
  const bc = storage(b)[field];

  return type === 'D' ? bc - ac : ac - bc;
}

function strSort(a, b, field, type) {
	const ac = storage(a)[field].toUpperCase();
  const bc = storage(b)[field].toUpperCase();

  return type === 'D'
  	? strCompare(ac, bc)
  	: strCompare(bc, ac);
}

function strCompare(a, b) {
	if (a < b) return -1;
	if (a > b) return 1;
	return 0;
}