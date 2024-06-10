import { useState } from 'react';
import { LuSearch } from 'react-icons/lu';


const SearchInput = () => {
	const [isFocused, setIsFocused] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [suggestions] = useState([
		{ label: 'React', icon: '⚛️' },
		{ label: 'JavaScript', icon: '📜' },
		{ label: 'CSS', icon: '🎨' },
		{ label: 'HTML', icon: '📄' },
	]);

	const handleInputChange = (e: any) => {
		setInputValue(e.target.value);
	};

	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleBlur = () => {
		setIsFocused(false);
	};

	return (
		<div className={`header_Search_container ${isFocused ? 'focused' : ''}`}>
			<LuSearch color='#5C5F62' size={20} />
			<input
				placeholder='search...'
				className='header_Search'
				value={inputValue}
				onChange={handleInputChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
			/>
			{isFocused && (
				<div className='suggestions_container'>
					{suggestions.map((suggestion, index) => (
						<div key={index} className='suggestion'>
							{suggestion.icon && <span className='suggestion_icon'>{suggestion.icon}</span>}
							<span className='suggestion_label'>{suggestion.label}</span>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default SearchInput;
