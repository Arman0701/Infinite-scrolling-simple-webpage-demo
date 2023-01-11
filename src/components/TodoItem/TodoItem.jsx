import style from './TodoItem.module.scss';

export default function TodoItem({item}) {
	function inputChangeHandler() {
		item.checked = !item.checked;
	}

	return (
		<div className={style.todoItem}>
			<input type="checkbox" checked={item.checked ? "checked" : ""} onChange={inputChangeHandler} />
			<p className={style.title}>{item.title}</p>
			<p className={style.itemID}>ID: {item.id}</p>
			<p className={style.userID}>User ID: {item.userId}</p>
		</div>
	)
}