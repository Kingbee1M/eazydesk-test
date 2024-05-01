
import { MdOutlineErrorOutline } from "react-icons/md";
import { VscCloudDownload } from "react-icons/vsc";




// EntriesPerPage
const EntriesPerPage = ({ data, entriesPerPage, setEntriesPerPage }: any) => (
  <div className="entries-perpage">
    {data?.length > 8 && (
      // <>
      // Show
      <select
        value={entriesPerPage}
        onChange={(e) => setEntriesPerPage(e.target.value)}
      >
        <option value="5">5</option>
        <option value="8">8</option>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>

    )}
  </div>
);

const TableProgressBar = () => (
  <div id="container-progressbar">
    <div id="bar"></div>
  </div>
);

// EntriesPerPage
const EmployeeStatus = ({
  status,
  setStatus,
  roles,
  setRole,
}: any) => (
  <div className="entries-perpage">
    <>
      Filter by
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="in review">in review</option>
        <option value="pending">pending</option>
        <option value="engaged">engaged</option>
      </select>
      Status
    </>
    <select value={roles} onChange={(e) => setRole(e.target.value)}>
      <option value="">All Roles</option>
      {roles &&
        roles?.map((role: any) => (
          <option key={role.id} value={role.id}>
            {role.name}
          </option>
        ))}
    </select>
    Role
  </div>
);



// TableFetch
const TableFetch = ({ colSpan }: any) => (
  <tr>
    <td colSpan={colSpan} id="table-loader">
      <div className="center-content">
        <VscCloudDownload size={75} />
        <p id="mt-3">Fetching request...</p>
      </div>
    </td>
  </tr>
);

// NoRecordFound
const NoRecordFound = ({ colSpan }: any) => (
  <tr>
    <td colSpan={colSpan} id="table-loader">
      <div className="center-content">
        <MdOutlineErrorOutline size={75} />
        <p id="mt-3">No record found</p>
      </div>
    </td>
  </tr>
);



const InputField = ({ placeholder, style, label, value, type, onChange, max, className, required, error }: any) => {
  return (
    <div className={"input"}>
      <label className={"input__label"} >
        {label}
      </label>
      <input
        required={required}
        className={className}
        type={type}
        // onFocus={handleFocus}
        // onBlur={handleBlur}
        autoComplete="off"
        placeholder={placeholder}
        // inputMode={inputMode}
        // onChange={onChange}
        // defaultValue={defaultValue}
        style={style}
        // maxLength={maxLength}
        value={value}
        max={max}
        onChange={onChange}
      />
      {error}
    </div>
  );
};

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const customId = "custom-id-yes";
const tokenKey = "svd-sYUDugysad-sdkjhsadkrjyteyugd--dskghjksdh";

const getMonth = (data: any) => {
  // Get the current date
  const currentDate = new Date();

  // Get the current year and month in the format "YYYY-MM"
  const currentYearMonth = currentDate.toISOString().slice(0, 7);

  // Filter the data for the current year and month
  const currentMonthData = data?.filter((item: { createdAt: string | number | Date }) => {
    const itemYearMonth = new Date(item?.createdAt).toISOString().slice(0, 7);
    return itemYearMonth === currentYearMonth;
  });

  return currentMonthData;
};

const getDailyData = (data: any) => {
  // Get the current date in "YYYY-MM-DD" format
  const currentDate = new Date().toISOString().slice(0, 10);

  // Filter the data for the current day
  const currentDayData = data?.filter((item: { createdAt: string | number | Date }) => {
    const itemDate = new Date(item?.createdAt).toISOString().slice(0, 10);
    return itemDate === currentDate;
  });

  return currentDayData;
};

const getWeeklyData = (data: any) => {
  const today = new Date();
  const currentDay = today.getDay(); // Get the current day of the week (0 for Sunday, 1 for Monday, etc.)
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - currentDay); // Calculate the start date of the current week

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6); // Calculate the end date of the current week 
  // Filter the data for the current week
  const currentWeekData = data?.filter((item: { createdAt: string | number | Date }) => {
    const itemDate = new Date(item?.createdAt);

    // Compare if the item's date is within the start and end dates of the current week
    return itemDate >= startOfWeek && itemDate <= endOfWeek;
  });

  return currentWeekData;
};


function getCurrentMonth() {
  const currentDate = new Date();
  const monthNames = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];
  const currentMonth = monthNames[currentDate.getMonth()];
  return currentMonth;
}

function TooltipPositioned(userInfo: any, userInfo2: any) {
  return (
    <>
      <p aria-label={userInfo + ' ' + userInfo2} tooltip-position="bottom">
        <strong>{userInfo.slice(0, 14)}</strong>
      </p>
    </>
  );
}
function TooltipPositioned2(words: any) {
  return (
    <>
      <p aria-label={words} tooltip-position="bottom">
        {words.slice(0, 14)}
      </p>
    </>
  );
}
const EntriesLimit = ({ data, limit, handlePagination }: any) => (
  <div className="entries-perpage">
    {data?.length > 1 && (
      <>
        Entries
        <select
          value={limit}
          // @ts-ignore
          onChange={(e) => handlePagination('limit', e)}  >
          {["5", "8", "10", "25", "50", "100", "200"].map((optionValue) => (
            <option key={optionValue} value={optionValue}>
              {optionValue}
            </option>
          ))}
        </select>
        Perpage
      </>
    )}
  </div>
);

const customStyles = {
  // control: (provided: any, state: any) => ({
  // 	...provided,
  // 	border: '1px solid #ccc',
  // 	borderRadius: '4px',
  // 	boxShadow: state.isFocused ? '0 0 0 1px #6F47EB' : null,
  // }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#0240BC' : null,
    color: state.isFocused ? 'white' : null,
  }),
  menu: (provided: any) => ({
    ...provided,
    boxShadow: '0 4px 8px #E5ECFB',
  }),
};


const LoginSpiner = () => {
  return (
    <div className="spinner-box">
      <div className="configure-border-1">
        <div className="configure-core"></div>
      </div>
      <div className="configure-border-2">
        <div className="configure-core"></div>
      </div>
    </div>
  )
}
const getPriorityStyle = (priority: string) => {
  switch (priority) {
    case 'Low':
      return { color: 'blue' };
    case 'Medium':
      return { color: 'green' };
    case 'HIGH':
      return { color: 'red' };
    default:
      return { color: 'black' };
  }
};

const getInputColorClass = (status: string) => {
  switch (status) {
    case 'new':
      return 'new-color';
    case 'inprogress':
      return 'inprogress-color';
    case 'completed':
      return 'complete-color';
    case 'outdated':
      return 'outdated-color';
    default:
      return '';
  }
};

const svgPaths = {
  success: "M17.5,42.3l23.2-23.2L23.9,35.9l-17-17c3.4-8.1,11.3-13.7,20.6-13.7c12.3,0,22.3,10,22.3,22.3 s-10,22.3-22.3,22.3S5.2,39.8,5.2,27.5c0-3.1,0.6-6,1.7-8.6",
  error: "M15.8,39.2l23.4-23.4v23.4L11.7,11.7c4-4,9.6-6.5,15.8-6.5c12.3,0,22.3,10,22.3,22.3s-10,22.3-22.3,22.3 S5.2,39.8,5.2,27.5c0-6.2,2.5-11.8,6.6-15.8"
};


const menu = [
  {
    name: "Home",
    path: "/leadsdashboard",
  },
  {
    name: "Incident",
    path: "/incident-request",
  },
  {
    name: "Service",
    path: "/service-request",
  },
  {
    name: "Change",
    path: "/change-request",
  },
];

const ticketMenu = [
  {
    name: "Home",
    path: "/leadsdashboard",
  },
  {
    name: "Incident",
    path: "/incident-request",
  },
  {
    name: "Service",
    path: "/service-request",
  },
  {
    name: "Change",
    path: "/change-request",
  },
]

// @ts-ignore  
const userInfo = JSON.parse(localStorage.getItem("service_desk"));
export {
  TableFetch,
  EntriesPerPage,
  EmployeeStatus,
  NoRecordFound,
  InputField,
  TableProgressBar,
  months,
  getMonth,
  getCurrentMonth,
  getDailyData,
  getWeeklyData,
  TooltipPositioned,
  TooltipPositioned2,
  LoginSpiner,
  customId,
  customStyles,
  getPriorityStyle,
  getInputColorClass,
  svgPaths,
  tokenKey,
  menu, ticketMenu,
  EntriesLimit,
  userInfo
};
