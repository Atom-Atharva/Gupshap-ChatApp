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
        _id: 1,
        groupChat: false,
        avatar: `${process.env.PUBLIC_URL}/assets/img/atharvaRound.png`,
        name: "Atharva Sugandhi",
        members: [],
    },
    {
        _id: 2,
        groupChat: true,
        avatar: `${process.env.PUBLIC_URL}/assets/img/atharvaRound.png`,
        name: "Friends Group",
        members: [],
    },
    {
        _id: 3,
        groupChat: false,
        avatar: `${process.env.PUBLIC_URL}/assets/img/atharvaRound.png`,
        name: "Atharva Sugandhi",
        members: [],
    },
    {
        _id: 4,
        groupChat: true,
        avatar: `${process.env.PUBLIC_URL}/assets/img/atharvaRound.png`,
        name: "Friends Group",
        members: [],
    },
    {
        _id: 5,
        groupChat: false,
        avatar: `${process.env.PUBLIC_URL}/assets/img/atharvaRound.png`,
        name: "Atharva Sugandhi",
        members: [],
    },
    {
        _id: 6,
        groupChat: false,
        avatar: `${process.env.PUBLIC_URL}/assets/img/atharvaRound.png`,
        name: "Atharva Sugandhi",
        members: [],
    },
    {
        _id: 7,
        groupChat: false,
        avatar: `${process.env.PUBLIC_URL}/assets/img/atharvaRound.png`,
        name: "Atharva Sugandhi",
        members: [],
    },
    {
        _id: 8,
        groupChat: false,
        avatar: `${process.env.PUBLIC_URL}/assets/img/atharvaRound.png`,
        name: "Atharva Sugandhi",
        members: [],
    },
    {
        _id: 9,
        groupChat: false,
        avatar: `${process.env.PUBLIC_URL}/assets/img/atharvaRound.png`,
        name: "Atharva Sugandhi",
        members: [],
    },
    {
        _id: 10,
        groupChat: false,
        avatar: `${process.env.PUBLIC_URL}/assets/img/atharvaRound.png`,
        name: "Atharva Sugandhi",
        members: [],
    },
];

// Do Not Touch From Here
export const searchbtn = `${process.env.PUBLIC_URL}/assets/svg/search.svg`;
