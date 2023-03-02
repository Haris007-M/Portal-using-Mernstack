import React, {useState} from 'react'
import axios from 'axios'

import {KTSVG} from '../../../../helpers'
// import {InviteUsers} from '../../modals/invite-users/InviteUsers'
export default function UpdateForm({item, currentData, setData}) {
  const [formData, setFormData] = useState(item)
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }
  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.put('http://localhost:8001/stuProjects', formData)
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
    const items = await axios.get('http://localhost:8001/stuProjects')
    setData(items.data)
  }
  return (
    <>
      <div className='modal fade' id='kt_modal_update_friends' aria-hidden='true'>
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
                    placeholder='type your name'
                    value={formData.name}
                    onChange={handleChange}
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
                    placeholder='title'
                    value={formData.title}
                    onChange={handleChange}
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
                    id='name'
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='col-md-6 my-1'>
                  <label htmlFor='validationServer05' className='form-label'>
                    Duration
                  </label>
                  <select
                    className='form-select'
                    name='duration'
                    id='validationServer05'
                    value={formData.duration}
                    onChange={handleChange}
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
                    id='day'
                    value={formData.day}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='col-md-6 my-1'>
                  <label htmlFor='validationServer05' className='form-label'>
                    Status
                  </label>
                  <select
                    className='form-select'
                    name='status'
                    id='validationServer05'
                    value={item.status}
                    onChange={handleChange}
                    required
                  >
                    <option defaultValue disabled value=''></option>
                    <option>On going</option>
                    <option>Pending</option>
                  </select>
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                onClick={handleUpdate}
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <tr>
        <td>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="type your name"
            value={formData.name}
            onChange={handleChange}
            id="name"
            required
          />
        </td>
        <td>
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="title"
            value={formData.title}
            onChange={handleChange}
            id="validationServerUsername"
            required
          />
        </td>
        <td>
          <input
            type="date"
            name="startDate"
            className="form-control"
            id="name"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </td>
        <td>
          <select
            className="form-select"
            name="duration"
            id="validationServer05"
            value={formData.duration}
            onChange={handleChange}
            required>
            <option defaultValue disabled value=""></option>
            <option value="1_Month">1_MONTH</option>
            <option value="2_Month">2_MONTH</option>
            <option value="3_Month">3_MONTH</option>
            <option value="4_Month">4_MONTH</option>
            <option value="5_Month">5_MONTH</option>
            <option value="6_Month">6_MONTH</option>
          </select>
        </td>
        <td>
          <input
            type="number"
            name="day"
            className="form-control"
            id="day"
            value={formData.day}
            onChange={handleChange}
            required
          />
        </td>
        <td>
          <select
            className="form-select"
            name="status"
            id="validationServer05"
            value={item.status}
            onChange={handleChange}
            required>
            <option defaultValue disabled value=""></option>
            <option>On going</option>
            <option>Pending</option>
          </select>
        </td>
        <td>
          <button
            type="button"
            onClick={handleUpdate}
            className="btn btn-secondary">
            Update
          </button>
        </td>
      </tr> */}
    </>
  )
}
