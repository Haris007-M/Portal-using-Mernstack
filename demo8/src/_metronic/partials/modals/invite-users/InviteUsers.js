/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {KTSVG} from '../../../helpers'
import axios from 'axios'
const InviteUsers = ({setData}) => {
  const [user, setUser] = useState({
    name: '',
    title: '',
    startDate: '',
    duration: '',
    day: '',
    status: '',
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setUser({
      ...user,
      [name]: value,
    })
  }

  const addData = async (event) => {
    event.preventDefault()

    axios
      .post('http://localhost:8001/stuProjects', user)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    const items = await axios.get('http://localhost:8001/stuProjects')
    setData(items.data)
    resetForm()
  }
  const resetForm = () => {
    setUser({
      name: '',
      title: '',
      startDate: '',
      duration: '',
      day: '',
      status: '',
    })
  }

  return (
    <div className='modal fade' id='kt_modal_invite_friends' aria-hidden='true'>
      <div className='modal-dialog mw-650px'>
        <div className='modal-content'>
          <div className='modal-header pb-0 border-0 justify-content-end'>
            <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
              <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
            </div>
          </div>

          <div className='modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15'>
            <form className='row'>
              <div className='col-md-6 my-1'>
                <label htmlFor='name' className='form-label'>
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                  className='form-control'
                  onChange={handleChange}
                  value={user.name}
                  placeholder='type your name'
                  id='name'
                  required
                />
              </div>
              <div className='col-md-6 my-1'>
                <label htmlFor='validationServer03' className='form-label'>
                  Title
                </label>
                <input
                  type='text'
                  name='title'
                  className='form-control'
                  onChange={handleChange}
                  value={user.title}
                  placeholder='title  '
                  id='validationServerUsername'
                  required
                />
                {/* <input type="numbers" className="form-control" value={cnic} onChange={(e) => setCnic(e.target.value)} maxLength="13" pattern="\d{13}" placeholder='1234156789101' id="validationServer03" required /> */}
              </div>
              <div className='col-md-6 my-1'>
                <label htmlFor='name' className='form-label'>
                  Start Date
                </label>
                <input
                  type='date'
                  name='startDate'
                  className='form-control'
                  onChange={handleChange}
                  value={user.startDate}
                  id='name'
                  required
                />
              </div>
              <div className='col-md-6 my-1'>
                <label htmlFor='validationServer05' className='form-label'>
                  Duration
                </label>
                <select
                  className='form-select'
                  onChange={handleChange}
                  value={user.duration}
                  name='duration'
                  id='validationServer05'
                  required
                >
                  <option defaultValue disabled value=''></option>
                  <option value='1_Month'>1_MONTH</option>
                  <option value='2_Month'>2_MONTH</option>
                  <option value='3_Month'>3_MONTH</option>
                  <option value='4_Month'>4_MONTH</option>
                  <option value='5_Month'>5_MONTH</option>
                  <option value='6_Month'>6_MONTH</option>
                </select>
              </div>
              <div className='col-md-6 my-1'>
                <label htmlFor='day' className='form-label'>
                  Day
                </label>
                <input
                  type='number'
                  name='day'
                  className='form-control'
                  onChange={handleChange}
                  value={user.day}
                  id='day'
                  required
                />
              </div>
              <div className='col-md-6 my-1'>
                <label htmlFor='validationServer05' className='form-label'>
                  Status
                </label>
                <select
                  className='form-select'
                  onChange={handleChange}
                  value={user.status}
                  name='status'
                  id='validationServer05'
                  required
                >
                  <option defaultValue disabled value=''></option>
                  <option className='badge badge-light-success'>On going</option>
                  <option className='badge badge-light-warning'>Pending</option>
                </select>
              </div>
            </form>
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
              Close
            </button>
            <button
              type='button'
              onClick={addData}
              className='btn btn-primary'
              data-bs-dismiss='modal'
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export {InviteUsers}
