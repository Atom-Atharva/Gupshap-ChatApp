// return {
//     _id,
//     groupChat,
//     avatar: groupChat ? avatar : [otherMember.avatar],
//     name: groupChat ? name : otherMember.name,
//     members: members.reduce((prev, curr) => {
//         if (curr._id.toString() !== req.user._id.toString()) {
//             prev.push(curr._id);
//         }
//         return prev;
//     }, []),
// };

// This needs to be Comment Out
export const getChatsData = [
    {
        _id: "1",
        groupChat: false,
        avatar: {
            public_id: "ChatApp/profile/hqliwr1agvxv7xlpjzsb",
            url: "http://res.cloudinary.com/dk3rw649k/image/upload/v1718475891/ChatApp/profile/hqliwr1agvxv7xlpjzsb.jpg",
        },

        name: "user9",
        members: [
            {
                avatar: {
                    public_id: "ChatApp/profile/hqliwr1agvxv7xlpjzsb",
                    url: "http://res.cloudinary.com/dk3rw649k/image/upload/v1718475891/ChatApp/profile/hqliwr1agvxv7xlpjzsb.jpg",
                },
                _id: "666ddc743fd89fd020e60880",
                name: "user9",
            },
        ],
        creator: {
            _id: "666b5534c6d685bb8e95e126",
            name: "user1",
        },
    },
    {
        _id: "21",
        groupChat: false,
        avatar: {
            public_id: "ChatApp/profile/hqliwr1agvxv7xlpjzsb",
            url: "http://res.cloudinary.com/dk3rw649k/image/upload/v1718475891/ChatApp/profile/hqliwr1agvxv7xlpjzsb.jpg",
        },

        name: "user9",
        members: [
            {
                avatar: {
                    public_id: "ChatApp/profile/hqliwr1agvxv7xlpjzsb",
                    url: "http://res.cloudinary.com/dk3rw649k/image/upload/v1718475891/ChatApp/profile/hqliwr1agvxv7xlpjzsb.jpg",
                },
                _id: "666ddc743fd89fd020e60880",
                name: "user9",
            },
        ],
        creator: {
            _id: "666b5534c6d685bb8e95e126",
            name: "user1",
        },
    },
    {
        _id: "3",
        groupChat: false,
        avatar: {
            public_id: "ChatApp/profile/hqliwr1agvxv7xlpjzsb",
            url: "http://res.cloudinary.com/dk3rw649k/image/upload/v1718475891/ChatApp/profile/hqliwr1agvxv7xlpjzsb.jpg",
        },

        name: "user9",
        members: [
            {
                avatar: {
                    public_id: "ChatApp/profile/hqliwr1agvxv7xlpjzsb",
                    url: "http://res.cloudinary.com/dk3rw649k/image/upload/v1718475891/ChatApp/profile/hqliwr1agvxv7xlpjzsb.jpg",
                },
                _id: "666ddc743fd89fd020e60880",
                name: "user9",
            },
        ],
        creator: {
            _id: "666b5534c6d685bb8e95e126",
            name: "user1",
        },
    },
    {
        _id: "41",
        groupChat: false,
        avatar: {
            public_id: "ChatApp/profile/hqliwr1agvxv7xlpjzsb",
            url: "http://res.cloudinary.com/dk3rw649k/image/upload/v1718475891/ChatApp/profile/hqliwr1agvxv7xlpjzsb.jpg",
        },

        name: "user9",
        members: [
            {
                avatar: {
                    public_id: "ChatApp/profile/hqliwr1agvxv7xlpjzsb",
                    url: "http://res.cloudinary.com/dk3rw649k/image/upload/v1718475891/ChatApp/profile/hqliwr1agvxv7xlpjzsb.jpg",
                },
                _id: "666ddc743fd89fd020e60880",
                name: "user9",
            },
        ],
        creator: {
            _id: "666b5534c6d685bb8e95e126",
            name: "user1",
        },
    },
    {
        _id: "5",
        groupChat: false,
        avatar: {
            public_id: "ChatApp/profile/hqliwr1agvxv7xlpjzsb",
            url: "http://res.cloudinary.com/dk3rw649k/image/upload/v1718475891/ChatApp/profile/hqliwr1agvxv7xlpjzsb.jpg",
        },

        name: "user9",
        members: [
            {
                avatar: {
                    public_id: "ChatApp/profile/hqliwr1agvxv7xlpjzsb",
                    url: "http://res.cloudinary.com/dk3rw649k/image/upload/v1718475891/ChatApp/profile/hqliwr1agvxv7xlpjzsb.jpg",
                },
                _id: "666ddc743fd89fd020e60880",
                name: "user9",
            },
        ],
        creator: {
            _id: "666b5534c6d685bb8e95e126",
            name: "user1",
        },
    },
    {
        _id: "2",
        groupChat: true,
        avatar: {
            public_id: "ChatApp/group/duxgi8ggud8ive2aiil0",
            url: "http://res.cloudinary.com/dk3rw649k/image/upload/v1718310637/ChatApp/group/duxgi8ggud8ive2aiil0.png",
        },
        name: "Friends Group",
        members: [
            {
                avatar: {
                    public_id: "ChatApp/profile/eealuveza8kpbz0qnwrs",
                    url: "http://res.cloudinary.com/dk3rw649k/image/upload/v1718310222/ChatApp/profile/eealuveza8kpbz0qnwrs.jpg",
                },
                _id: "666b5548c6d685bb8e95e12d",
                name: "user2",
            },
            {
                avatar: {
                    public_id: "ChatApp/profile/pipyn7htxhpw6vzybxid",
                    url: "http://res.cloudinary.com/dk3rw649k/image/upload/v1718310235/ChatApp/profile/pipyn7htxhpw6vzybxid.jpg",
                },
                _id: "666b5554c6d685bb8e95e134",
                name: "user3",
            },
        ],
        creator: {
            _id: "666b5554c6d685bb8e95e134",
            name: "user3",
        },
    },
    {
        _id: "4",
        groupChat: true,
        avatar: {
            public_id: "ChatApp/group/duxgi8ggud8ive2aiil0",
            url: "http://res.cloudinary.com/dk3rw649k/image/upload/v1718310637/ChatApp/group/duxgi8ggud8ive2aiil0.png",
        },
        name: "FRND Groups",
        members: [
            {
                avatar: {
                    public_id: "ChatApp/profile/eealuveza8kpbz0qnwrs",
                    url: "http://res.cloudinary.com/dk3rw649k/image/upload/v1718310222/ChatApp/profile/eealuveza8kpbz0qnwrs.jpg",
                },
                _id: "666b5548c6d685bb8e95e12d",
                name: "user2",
            },
            {
                avatar: {
                    public_id: "ChatApp/profile/pipyn7htxhpw6vzybxid",
                    url: "http://res.cloudinary.com/dk3rw649k/image/upload/v1718310235/ChatApp/profile/pipyn7htxhpw6vzybxid.jpg",
                },
                _id: "666b5554c6d685bb8e95e134",
                name: "user3",
            },
        ],
        creator: {
            _id: "666b5554c6d685bb8e95e134",
            name: "user3",
        },
    },
    {
        _id: "666b56e6a5f7c33f2f473551",
        groupChat: true,
        avatar: {
            public_id: "ChatApp/group/duxgi8ggud8ive2aiil0",
            url: "http://res.cloudinary.com/dk3rw649k/image/upload/v1718310637/ChatApp/group/duxgi8ggud8ive2aiil0.png",
        },
        name: "Friends Group",
        members: [
            {
                avatar: {
                    public_id: "ChatApp/profile/eealuveza8kpbz0qnwrs",
                    url: "http://res.cloudinary.com/dk3rw649k/image/upload/v1718310222/ChatApp/profile/eealuveza8kpbz0qnwrs.jpg",
                },
                _id: "666b5548c6d685bb8e95e12d",
                name: "user2",
            },
            {
                avatar: {
                    public_id: "ChatApp/profile/pipyn7htxhpw6vzybxid",
                    url: "http://res.cloudinary.com/dk3rw649k/image/upload/v1718310235/ChatApp/profile/pipyn7htxhpw6vzybxid.jpg",
                },
                _id: "666b5554c6d685bb8e95e134",
                name: "user3",
            },
        ],
        creator: {
            _id: "666b5554c6d685bb8e95e134",
            name: "user3",
        },
    },
    {
        _id: "666b56e6a5f7c33f2f473552",
        groupChat: true,
        avatar: {
            public_id: "ChatApp/group/duxgi8ggud8ive2aiil0",
            url: "http://res.cloudinary.com/dk3rw649k/image/upload/v1718310637/ChatApp/group/duxgi8ggud8ive2aiil0.png",
        },
        name: "Friends Group",
        members: [
            {
                avatar: {
                    public_id: "ChatApp/profile/eealuveza8kpbz0qnwrs",
                    url: "http://res.cloudinary.com/dk3rw649k/image/upload/v1718310222/ChatApp/profile/eealuveza8kpbz0qnwrs.jpg",
                },
                _id: "666b5548c6d685bb8e95e12d",
                name: "user2",
            },
            {
                avatar: {
                    public_id: "ChatApp/profile/pipyn7htxhpw6vzybxid",
                    url: "http://res.cloudinary.com/dk3rw649k/image/upload/v1718310235/ChatApp/profile/pipyn7htxhpw6vzybxid.jpg",
                },
                _id: "666b5554c6d685bb8e95e134",
                name: "user3",
            },
        ],
        creator: {
            _id: "666b5554c6d685bb8e95e134",
            name: "user3",
        },
    },
];

// Do Not Touch From Here
export const searchbtn = `${process.env.PUBLIC_URL}/assets/svg/search.svg`;
