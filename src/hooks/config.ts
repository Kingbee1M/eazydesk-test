	// @ts-ignore
const user = JSON.parse(localStorage.getItem("taskmaneger"));
 

 
 
export const config = {
         headers: {
          "Content-Type": "application/json", 
           Authorization: `Bearer ${user?.token}`,
         },
  };   


  