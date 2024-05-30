import Select from 'react-select'
import { customStyles } from './Options';


const HandleVendorTickets = ({ superAdminDashboarddata, setActiveIndex, activeIndex }: any) => {

	const options = superAdminDashboarddata?.map((company: { companyInfo: { company_name: string } }) => ({
		value: company?.companyInfo?.company_name,
		label: company?.companyInfo?.company_name,
	})) || [];


	const handleClick = (index: React.SetStateAction<string>) => {
		setActiveIndex(index);
	};


	// Extract the company names
	let statusList = superAdminDashboarddata?.map(
		(company: { companyInfo: { company_name: string } }) => company?.companyInfo?.company_name
	);

	// Ensure "OUTCESS SOLUTIONS" is always first
	if (statusList) {
		const outcessIndex = statusList.indexOf("OUTCESS SOLUTIONS");
		if (outcessIndex > -1) {
			statusList.splice(outcessIndex, 1); // Remove "OUTCESS SOLUTIONS" from its current position
			statusList.unshift("OUTCESS SOLUTIONS"); // Add "OUTCESS SOLUTIONS" to the start of the list
		} else {
			statusList.unshift("OUTCESS SOLUTIONS"); // Add "OUTCESS SOLUTIONS" if not present
		}
	}

	// Restrict to first 3 items
	const displayedStatusList = statusList?.slice(0, 1);

	return (
		<div>

			<ul className='TeamsPerformanceUL mb-2'>
				{displayedStatusList?.map((status: string, index: number) => (
					<li key={index} onClick={() => handleClick(status)} className={status === activeIndex ? 'TeamsPerformanceUL_active' : ''}>
						{status}
					</li>
				))}

			</ul>
			<Select name="Select by Status" id="register-select"
				value={activeIndex?.value}
				onChange={(selectedOption) => setActiveIndex(selectedOption.value)}
				options={options}
				styles={customStyles}
			/>
		</div>
	);
};

export default HandleVendorTickets;
