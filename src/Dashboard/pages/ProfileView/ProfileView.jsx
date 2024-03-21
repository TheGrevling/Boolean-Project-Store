import { useContext } from 'react'
import './ProfileView.css'
import { DataContext } from '../../../App'



function ProfileView() {
  const dataContext = useContext(DataContext)

  return (
    <div className='page'>
      <div className='page-row'>
        <div className='profile-view'>
          <div className='profile-container'>
            <div className='profile-container-top-bar'>
              Profile
            </div>
            <div className='profile-container-padding'>
              <h1>{dataContext?.userData?.username}</h1>
              <div>
                <span className='text-bold'>Email: </span><span>{dataContext?.userData?.email}</span>
              </div>
              <button className='profile-button-sign-out'> {/*TODO: Add functionallity*/}
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileView