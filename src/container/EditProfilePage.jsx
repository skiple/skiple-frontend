import React, { Component } from 'react'

import Header from 'components/Header'
import EditProfile from 'components/EditProfile'

class EditProfilePage extends Component {
  render () {
    return (
      <div className="container">
        <Header />
        <EditProfile />
      </div>
    )
  }
}

export default EditProfilePage
