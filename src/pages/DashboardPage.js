import { Page } from './Page';
import { createElem, addHTML, getElem, toArray } from '@base/utils';
import { createTableRecords } from '@/pages/dashboard.functions';

export class DashboardPage extends Page {
  render() {
    this.key = Date.now().toString();
    this.root = createElem('div', 'dashboard-container');
    this.root.addEventListener('click', this.dbDeleteItem);

    this.createDB(this.key, 'last-opened', 'true');

    return this.root;
  }

  dbDeleteItem = (e) => {
    const type = e.target.dataset.btn;

    if (type === 'delete-item') {
      const key = e.target.dataset.key;
      localStorage.removeItem(key);
      this.createDB(this.key);
    } else if (type === 'delete-all-item') {
      localStorage.clear();
      this.createDB(this.key);
    }

    if (type === 'last-opened' ||
        type === 'title' ||
        type === 'create-date') {
      this.sortTableRecords(e, type);
    }
  }

  sortTableRecords = (e, type) => {
    e.target.setAttribute('data-sort', e.target.dataset.sort === 'true' ? 'false' : 'true');
    const sort = e.target.dataset.sort;
    this.createDB(this.key, type, sort);
  }

  createDB(key, sortTarget, sortType) {
    addHTML(this.root, `
      <h2>Dashboard Notes</h2>
			<div class="dashboard-manage">
				<a class="dashboard-add" href="#note/${key}">+</a>
        <button class="dashboard-del" data-btn="delete-all-item">
          <span class="material-icons" data-btn="delete-all-item">delete</span>
        </button>
			</div>
			<div class="dashboard-notes">
				<div class="dashboard-notes__fields dashboard-grid">
					<span data-btn="title" data-sort="${sortType}">Title</span>
          <span data-btn="last-opened" data-sort="${sortType}">Last Opened</span>
					<span data-btn="create-date" data-sort="${sortType}">Create Date</span>
				</div>
				<ul class="dashboard-notes__list">
					${createTableRecords(sortTarget, sortType)}
				</ul>
			</div>
		`);
  }

  afterRender() {
    this.items = toArray(getElem('.dashboard-notes__list-item', true));
  }

  destroy() {
    this.root.removeEventListener('click', this.dbDeleteItem);
  }
}