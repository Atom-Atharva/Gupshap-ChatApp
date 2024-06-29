import { createContext, useContext, useMemo } from "react";
import { io } from "socket.io-client";

// Create Context for SOCKET
const SocketContext = createContext();

// CUSTOM HOOK --> to use the context
const useGetSocket = () => useContext(SocketContext);

const SocketProvider = ({ children }) => {
    // because it is called once only as its value is memoised so no further calls

    const socket = useMemo(() => {
        // FOR DEV Backend --
        // return io(process.env.REACT_APP_SOCKET_CONNECTION_DEV, {
        //     withCredentials: true,
        //     credentials: "include",
        // });
        return io(process.env.REACT_APP_SOCKET_CONNECTION, {
            withCredentials: true,
            credentials: "include",
        });
    }, []);

    return (
        // THIS NEEDS TO BE WRAPPED INSIDE CHATPAGE COMPONENT
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};

export { useGetSocket, SocketProvider };
