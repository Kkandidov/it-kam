import s from "./Paginator.module.css";
import React from "react";

let getPages = (totalUserCount, pageSize) => {
	let pageCount = Math.ceil(totalUserCount / pageSize);
	let pages = [];
	for (let i = 1; i <= pageCount; i++) {
		pages.push(i);
	}

	return pages;
}

const Paginator = ({currentPage, onPageChanged, totalUserCount, pageSize}) => {
	return getPages(totalUserCount, pageSize).map(p => <span
			className={p === currentPage && s.selectedPageNumber}
			onClick={() => onPageChanged(p)}>{p}</span>)
}

export default Paginator;