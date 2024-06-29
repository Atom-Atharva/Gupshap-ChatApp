// NOTE : To RUN ON DEV Backend Add REACT_APP_SERVER_API_DEV instead of REACT_APP_SERVER_API

export const REGISTER_API =
    process.env.REACT_APP_SERVER_API +
    process.env.REACT_APP_USER_ROUTE +
    process.env.REACT_APP_REGISTER_ROUTE;

export const LOGIN_API =
    process.env.REACT_APP_SERVER_API +
    process.env.REACT_APP_USER_ROUTE +
    process.env.REACT_APP_LOGIN_ROUTE;

export const GET_PROFILE_API =
    process.env.REACT_APP_SERVER_API +
    process.env.REACT_APP_USER_ROUTE +
    process.env.REACT_APP_GET_PROFILE_ROUTE;

export const GITHUB_OAUTH_API =
    process.env.REACT_APP_GITHUB_OAUTH_API +
    process.env.REACT_APP_GITHUB_CLIENT_ID;

export const SERVER_GOOGLE_AUTH_API =
    process.env.REACT_APP_SERVER_API +
    process.env.REACT_APP_USER_ROUTE +
    process.env.REACT_APP_GOOGLE_AUTH_ROUTE;

export const SERVER_GITHUB_AUTH_API =
    process.env.REACT_APP_SERVER_API +
    process.env.REACT_APP_USER_ROUTE +
    process.env.REACT_APP_GITHUB_AUTH_ROUTE;

// Chat Page APIs--
export const LOGOUT_API =
    process.env.REACT_APP_SERVER_API +
    process.env.REACT_APP_USER_ROUTE +
    process.env.REACT_APP_LOGOUT_ROUTE;

export const GET_ALL_USERS_API =
    process.env.REACT_APP_SERVER_API +
    process.env.REACT_APP_USER_ROUTE +
    process.env.REACT_APP_GET_ALL_USERS_ROUTE;

export const GET_MY_CHATS_API =
    process.env.REACT_APP_SERVER_API +
    process.env.REACT_APP_CHAT_ROUTE +
    process.env.REACT_APP_GET_MY_CHATS_ROUTE;

export const GET_MY_GROUPS_API =
    process.env.REACT_APP_SERVER_API +
    process.env.REACT_APP_CHAT_ROUTE +
    process.env.REACT_APP_GET_MY_GROUPS_ROUTE;

export const GET_MY_FRIENDS_API =
    process.env.REACT_APP_SERVER_API +
    process.env.REACT_APP_USER_ROUTE +
    process.env.REACT_APP_GET_MY_FRIENDS_ROUTE;

export const CREATE_NEW_GROUP =
    process.env.REACT_APP_SERVER_API +
    process.env.REACT_APP_CHAT_ROUTE +
    process.env.REACT_APP_CREATE_NEW_GROUP;

export const SEND_FRIEND_REQUEST =
    process.env.REACT_APP_SERVER_API +
    process.env.REACT_APP_USER_ROUTE +
    process.env.REACT_APP_SEND_FRIEND_REQUEST;

export const GET_MY_NOTIFICATIONS =
    process.env.REACT_APP_SERVER_API +
    process.env.REACT_APP_USER_ROUTE +
    process.env.REACT_APP_GET_MY_NOTIFICATIONS;

export const ACCEPT_FRIEND_REQUEST =
    process.env.REACT_APP_SERVER_API +
    process.env.REACT_APP_USER_ROUTE +
    process.env.REACT_APP_ACCEPT_FRIEND_REQUEST;

export const REMOVE_USER_API =
    process.env.REACT_APP_SERVER_API +
    process.env.REACT_APP_CHAT_ROUTE +
    process.env.REACT_APP_REMOVE_USER;

export const LEAVE_GROUP_API =
    process.env.REACT_APP_SERVER_API +
    process.env.REACT_APP_CHAT_ROUTE +
    process.env.REACT_APP_LEAVE_GROUP;

export const GET_CHAT_INFO =
    process.env.REACT_APP_SERVER_API +
    process.env.REACT_APP_CHAT_ROUTE +
    process.env.REACT_APP_GET_CHAT_INFO;

export const ADD_MEMBER =
    process.env.REACT_APP_SERVER_API +
    process.env.REACT_APP_CHAT_ROUTE +
    process.env.REACT_APP_ADD_MEMBER;

export const GET_MESSAGE =
    process.env.REACT_APP_SERVER_API +
    process.env.REACT_APP_CHAT_ROUTE +
    process.env.REACT_APP_GET_MESSAGE;
