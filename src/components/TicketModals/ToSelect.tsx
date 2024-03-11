import React from "react";
import Select from "react-select";
import { colourOptions } from "./example";


const ToSelect = () => (
	<Select
		defaultValue={[colourOptions[2], colourOptions[3]]}
		isMulti
		name="colors"
		options={colourOptions}
		className="basic-multi-select"
		classNamePrefix="select"
	/>
);

export default ToSelect;
