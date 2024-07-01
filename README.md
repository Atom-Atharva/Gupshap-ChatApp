# Gupshap (ChatApp)

Gupshap (ChatApp) is a real-time chat application built using MERN and Socket.io. It facilitates seamless communication among users with features like real-time messaging, group chats, multi-media, notification.

## Table of Contents

1. [Project Highlights](#project-highlights)
2. [Installation](#installation)
3. [Setup](#setup)
4. [Project Directory](#project-directory)
5. [Sockets](#sockets)
6. [Support Us](#support-us)
7. [Licence](#licence)

## Project Highlights

1. **@react-oauth/google**: A library for integrating Google OAuth2 authentication in React applications.
2. **@reduxjs/toolkit**: A Redux utility toolkit for efficient Redux development, including simplified API and Redux Toolkit Query.
3. **tailwindcss**: Tailwind CSS is a utility-first CSS framework that helps you quickly build custom designs by composing utility classes directly in your HTML.
4. **axios**: Promise-based HTTP client for the browser and Node.js.
5. **react**: A JavaScript library for building user interfaces.
6. **react-dom**: React package for working with the DOM.
7. **react-hot-toast**: Lightweight toast notifications for React.
8. **react-redux**: Official React bindings for Redux.
9. **react-router-dom**: DOM bindings for React Router, enabling dynamic routing in React applications.
10. **socket.io-client**: Socket.IO client library for real-time, bidirectional communication between clients and servers.

## Installation

To install and run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Atom-Atharva/Gupshap-ChatApp`
2. Navigate to the project directory: `cd Gupshap-Chatapp`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

For production build:

-   Build the project: `npm run build`

## SetUp

Ensure Node.js and npm are installed on your machine. Refer to the `package.json` for detailed dependency versions and scripts.

### Environment Variables

Create a `.env` file in the root directory and configure the following variables:

```env
# Server APIs
REACT_APP_SERVER_API_DEV=your_backend_uri/api/v1/
REACT_APP_SERVER_API=https://gupshap-chatapp-backend.onrender.com/api/v1/
REACT_APP_USER_ROUTE=users/
REACT_APP_CHAT_ROUTE=chat/
REACT_APP_REGISTER_ROUTE=register
REACT_APP_LOGIN_ROUTE=login
REACT_APP_LOGOUT_ROUTE=logout
REACT_APP_GET_PROFILE_ROUTE=getMyProfile
REACT_APP_GET_ALL_USERS_ROUTE=getAllUser
REACT_APP_GET_MY_FRIENDS_ROUTE=getMyFriends
REACT_APP_GET_MY_CHATS_ROUTE=my-chat
REACT_APP_GET_MY_GROUPS_ROUTE=my-chat/groups
REACT_APP_SEND_FRIEND_REQUEST=sendFriendRequest
REACT_APP_GET_MY_NOTIFICATIONS=getMyNotifications
REACT_APP_ACCEPT_FRIEND_REQUEST=acceptFriendRequest
REACT_APP_CREATE_NEW_GROUP=new-group
REACT_APP_REMOVE_USER=remove-member
REACT_APP_GET_CHAT_INFO=get-chat-details/
REACT_APP_LEAVE_GROUP=leave-group/
REACT_APP_ADD_MEMBER=add-members
REACT_APP_GET_MESSAGE=get-message/

# Authentication 3P
REACT_APP_GOOGLE_AUTH_ROUTE=auth/google
REACT_APP_GITHUB_AUTH_ROUTE=auth/github

REACT_APP_GOOGLE_CLIENT_ID=your_client_id
REACT_APP_GOOGLE_CLIENT_SECRET=your_client_secret

REACT_APP_GITHUB_CLIENT_ID=your_client_id
REACT_APP_GITHUB_CLIENT_SECRET=your_client_secret

REACT_APP_GITHUB_OAUTH_API=https://github.com/login/oauth/authorize?client_id=

# SOCKET IO
REACT_APP_SOCKET_CONNECTION_DEV=your_wss_uri
REACT_APP_SOCKET_CONNECTION=https://gupshap-chatapp-backend.onrender.com

```

## Project Directory

```
│   index.js
│   LICENSE
│   .env
│   .gitignore
│   package.json
│   README.md
│
├───public
│   │   index.html
│   │
│   └───assets
│
└───src
    │   App.js
    │   index.css
    │   index.js
    │
    ├───component
    │   ├───chat
    │   │   ├───default
    │   │   │       Defaultcontent.js
    │   │   │       DefaultData.js
    │   │   │
    │   │   ├───groupPage
    │   │   │   │   Groupdet.js
    │   │   │   │
    │   │   │   └───form
    │   │   │           Addmembers.js
    │   │   │           formData.js
    │   │   │           Groupimg.js
    │   │   │           GrpBtn.js
    │   │   │           Maingrpform.js
    │   │   │           MemberItem.js
    │   │   │
    │   │   ├───mainarea
    │   │   │   │   ChatSingle.js
    │   │   │   │   homeData.js
    │   │   │   │   HomeMain.js
    │   │   │   │   Mainheading.js
    │   │   │   │   MultiChats.js
    │   │   │   │   SearchArea.js
    │   │   │   │
    │   │   │   ├───addfriend
    │   │   │   │       addFriendData.js
    │   │   │   │       AllFRiends.js
    │   │   │   │       FriendMain.js
    │   │   │   │       Singlefriend.js
    │   │   │   │
    │   │   │   ├───groups
    │   │   │   │       AllGroups.js
    │   │   │   │       groupData.js
    │   │   │   │       GroupMain.js
    │   │   │   │       NewGroup.js
    │   │   │   │
    │   │   │   └───profile
    │   │   │           Profdetail.js
    │   │   │           ProfileData.js
    │   │   │           ProfileMain.js
    │   │   │
    │   │   ├───navbar
    │   │   │       NavData.js
    │   │   │       NavDown.js
    │   │   │       NavUp.js
    │   │   │
    │   │   ├───notification
    │   │   │       Header.js
    │   │   │       List.js
    │   │   │       notificationData.js
    │   │   │       SingleNotification.js
    │   │   │
    │   │   └───room
    │   │       │   Chatarea.js
    │   │       │   ChatData.js
    │   │       │   ChatRoom.js
    │   │       │   Chattitle.js
    │   │       │   MessageBubble.js
    │   │       │   Sendbtn.js
    │   │       │   Singlemsg.js
    │   │       │   Textsend.js
    │   │       │
    │   │       ├───group-info
    │   │       │       AddUsers.js
    │   │       │       Friend.js
    │   │       │       GroupInfo.js
    │   │       │       List.js
    │   │       │       Member.js
    │   │       │       UsersList.js
    │   │       │
    │   │       └───profile-pic
    │   │               Profile.js
    │   │
    │   ├───common
    │   │       AuthBtn.js
    │   │       AuthHeader.js
    │   │       Creategrpbtn.js
    │   │       GetStartedBtn.js
    │   │       InputBox.js
    │   │       LogOutBtn.js
    │   │       OrLine.js
    │   │       SignInUpBtn.js
    │   │       StartChattingNowBtn.js
    │   │
    │   ├───home
    │   │   ├───about
    │   │   │       About.js
    │   │   │       AboutData.js
    │   │   │       leftAbout.js
    │   │   │       rightAbout.js
    │   │   │
    │   │   ├───contact-me
    │   │   │       Card.js
    │   │   │       ContactMe.js
    │   │   │       contactmeData.js
    │   │   │
    │   │   ├───features
    │   │   │       Card.js
    │   │   │       FeatureCard.js
    │   │   │       featureData.js
    │   │   │       Features.js
    │   │   │
    │   │   ├───footer
    │   │   │       Bottom.js
    │   │   │       CTA.js
    │   │   │       Footer.js
    │   │   │       footerData.js
    │   │   │       Middle.js
    │   │   │
    │   │   ├───header
    │   │   │       BrandLogo.js
    │   │   │       Header.js
    │   │   │       Navigator.js
    │   │   │       RedirectBtns.js
    │   │   │
    │   │   └───hero
    │   │           ChatBox.js
    │   │           Hero.js
    │   │           heroData.js
    │   │           Model.js
    │   │           Tagline.js
    │   │
    │   ├───login
    │   │   │   Form.js
    │   │   │   loginData.js
    │   │   │   LogInform.js
    │   │   │   RightStructurelogin.js
    │   │   │   SignInImg.js
    │   │   │
    │   │   └───form
    │   │           Auth.js
    │   │           Line.js
    │   │           MyForm.js
    │   │
    │   └───signup
    │       │   Form.js
    │       │   RightStructure.js
    │       │   signupData.js
    │       │   SignUpForm.js
    │       │   SignUpImg.js
    │       │
    │       └───form
    │               Auth.js
    │               Line.js
    │               MyForm.js
    │               PictureDP.js
    │
    ├───navigation
    │       AppRouter.js
    │
    ├───pages
    │   ├───auth
    │   │       Auth.js
    │   │       GithubLoading.js
    │   │       Login.js
    │   │       Signup.js
    │   │
    │   ├───chat-page
    │   │   │   Chatpage.js
    │   │   │
    │   │   ├───contents
    │   │   │       Content.js
    │   │   │       MainArea.js
    │   │   │       NavBar.js
    │   │   │       Notification.js
    │   │   │
    │   │   └───screens
    │   │           Default.js
    │   │           NewGroup.js
    │   │           Room.js
    │   │
    │   └───home-page
    │           Homepage.js
    │
    └───utils
        │   apis.js
        │   socket.js
        │
        └───redux
                appStore.js
                pagesSlice.js
                userSlice.js

```

## Sockets

Socket.IO enables real-time, bidirectional communication between web clients and servers. In Gupshap ChatApp, it manages chat messages, user connections, and other real-time interactions to create a seamless and interactive user experience.

NOTE: Don't Forget to Change ORIGIN for CORS Policy.

## Support Us

This project wouldn't be flying high without some awesome peeps behind the scenes. Here's how you can join the crew:

-   **Slap a ⭐ on this repo:** Like a virtual high five for our hard work (and totally helps us get noticed!).
-   **Spill the tea (good kind!):** Feedback and ideas are always welcome. Open an issue or a pull request to join the party.
-   **Spread the word:** Share this project with your coding crew or tweet it out to the world (we won't judge your memes ).

Basically, anything you do to keep this project soaring is epic!

## Licence

This project is licensed under the MIT License - see the LICENSE file for details.
