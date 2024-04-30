import { createContext } from "react";
import { io } from "socket.io-client";
import { baseUrl } from "../../shared/baseUrl";
import DataService from "../../features/Auth/dataService";
const SocketContext: any = createContext(undefined);
const SocketProvider = ({ children, setMessages }: any) => {
  const dataService = DataService()
  const token = dataService.getToken();
  const socket: any = io(baseUrl + "/notification", { auth: { token: token } });


  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContext, SocketProvider };




