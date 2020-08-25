import { Page } from './Page';
import { createElem, addHTML, getElem, toArray } from '@base/utils';
import { createTableRecords } from '@/pages/dashboard.functions';

export class DashboardPage extends Page {
  render() {
    this.key = Date.now().toString();
    this.root = createElem('div', 'dashboard-container');
    this.root.addEventListener('click', this.dbDeleteItem);

    this.createDB(this.key);

    return this.root;
  }

  dbDeleteItem = (e) => {
    const type = e.target.dataset.btn;

    if (type === 'delete-item') {
      const key = e.target.dataset.key;
      localStorage.removeItem(key);
      this.createDB(this.key);
    }
  }

  createDB(key) {
    addHTML(this.root, `
			<div class="dashboard-manage">
				<a class="dashboard-add" href="#note/${key}">+</a>
			</div>
			<div class="dashboard-notes">
				<div class="dashboard-notes__fields">
					<span>Title</span>
					<span>Create Date</span>
				</div>
				<ul class="dashboard-notes__list">
					${createTableRecords()}
				</ul>
			</div>
		`);
  }

  afterRender() {
    this.items = toArray(getElem('.dashboard-notes__list-item', true));
  }

  destroy() {
    console.log('destroy');
    this.root.removeEventListener('click', this.dbDeleteItem);
  }
}