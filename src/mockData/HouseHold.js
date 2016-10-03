let members = [
    {
        "fullName": "Alexander Hamilton",
        "role": "user",
        "favoriteFruit": "apple"
    },
    {
        "fullName": "Elizabeth Hamilton",
        "role": "spouse",
        "favoriteFruit": "pear"
    },
    {
        "fullName": "Philip Hamilton",
        "role": "dependent",
        "favoriteFruit": "grape"
    },
    {
        "fullName": "Angelica Hamilton",
        "role": "dependent",
        "favoriteFruit": "cherry"
    },
    {
        "fullName": "James Hamilton",
        "role": "dependent",
        "favoriteFruit": "peach"
    }
];

let get = () => {
    return members;
};

let addMember = (member) => {
    members.push(member);
    return members;
};

export default {
    get: get,
    addMember: addMember
};