   
export interface User {
  data: {
    privileges: Privilege[];
  };
}

export interface Privilege {
  role: string;
}

export function getUserPrivileges(): {
  isSuperAdmin: boolean;
  isSupervisor: boolean;
  isEmployee: boolean;  

} {

   
  	// @ts-ignore  
	 const userString = JSON.parse(localStorage.getItem("taskmaneger"));
  const userInfo = userString ? userString : null;
  const privileges = userInfo?.user || [];

  
  

 
  const isSuperAdmin = privileges?.role === "SUPER_ADMIN";
  const isSupervisor = privileges?.role === "SUPERVISOR";
  const isEmployee = privileges?.role === "EMPLOYEE";

  
  

  return { 
      isSuperAdmin,
     isSupervisor,  
    isEmployee,  
  };
}

 
