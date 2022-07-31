import style from "./DataList.module.css";
import Loader from "../Loader";
import { useEffect, useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import getData from '../../helpers/getData';

export default function DataList() {
	const [loading, setLoading] = useState({ state: true, availableData: true });
	const [data, setData] = useState([]);
	const [page, setPage] = useState(0)

    const handleWindowHeight = () => {
        const scrolled = Math.round(window.scrollY);
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;

        if (scrolled === scrollable) setLoading({ ...loading, state: true });
    };
    window.addEventListener("scroll", handleWindowHeight);

	useEffect(() => {
		if (loading.state === true && loading.availableData === true) {
			getData(`https://jsonplaceholder.typicode.com/todos?_page=${page+1}&_limit=25`)
			.then(result => {
				setLoading({ ...loading, state: false });
				setPage(page + 1);

				if (result?.length !== 0) setData(prev => [...prev, ...result]);
				else setLoading({ state: false, availableData: false });
			})
		}
	}, [loading.state, loading.availableData])

    return <div className={style.listWrapper}>
		{
			data.map(item => <TodoItem key={item.id} item={item} />)
		}
		<div className={style.loaderBlock}>
			{
				!(loading.availableData) && <p className={style.messageBox}>No more data to load.</p> 
			}
			<Loader trigger={loading.state && loading.availableData} />
		</div>
	</div>;
}
