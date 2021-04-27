import React from 'react';
import Image from './Image';

class UserProfiles extends React.Component {
  render() {
    const UserProfiles = [{
      id: 102,
      name: "João",
      email: "joao@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
    },
    {
      id: 77,
      name: "Amélia",
      email: "amelia@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
    }]

    return (
      UserProfiles.map(UserProfile => {
      const { name, email, avatar } = UserProfile
      return (<div>
        <p> {name} </p>
        <p> {email} </p>
        <Image source={avatar} alternativeText="User avatar" />
      </div>)
      })
    );
  }
}

export default UserProfiles;