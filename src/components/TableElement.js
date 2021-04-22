import React from "react";

const TableElement = (props) => {
	console.log(props);
	return <div>{props.content.children}</div>;
};

export default TableElement;
