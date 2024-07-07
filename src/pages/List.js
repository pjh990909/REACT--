import React from "react";

const User = ({userData}) => {
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    );
};

const UserList = () => {
    const users = [
        {email: 'user1@gmail.com', name: '이은빈'},
        {email: 'user2@gmail.com', name: '유영수'},
        {email: 'user3@gmail.com', name: '박종희'},
        {email: 'user4@gmail.com', name: '윤다솜'},
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>

            <tbody>
                {users.map(user => <User userData={user} />)}
            </tbody>
        </table>
    )
};

export default UserList;