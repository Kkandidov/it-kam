import s from "./Paginator.module.css";
import React, {useState} from "react";
import cn from "classnames";

const Paginator = ({currentPage, onPageChanged, totalItemsCount, pageSize, portionSize = 10}) => {
	let pageCount = Math.ceil(totalItemsCount / pageSize);
	let pages = [];
	for (let i = 1; i <= pageCount; i++) {
		pages.push(i);
	}

	let portionCount = Math.ceil(pageCount / portionSize);
	let [portionNumber, setPortionNumber] = useState(1);
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	let rightPortionPageNumber = portionNumber * portionSize;

	return (
			<div className={s.paginator}>
				{
						portionNumber > 1 &&
						<button onClick={() => {
							setPortionNumber(portionNumber - 1)
						}}>PREV</button>
				}

				{
					pages
							.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
							.map(p => <span
									className={cn({[s.selectedPage]: currentPage === p}, s.pageNumber)}
									key={p}
									onClick={() => onPageChanged(p)}>{p}</span>)
				}
				{portionCount > portionNumber &&
						<button onClick={() => {
							setPortionNumber(portionNumber + 1)
						}}>NEXT</button>}
			</div>
	)
}

export default Paginator;