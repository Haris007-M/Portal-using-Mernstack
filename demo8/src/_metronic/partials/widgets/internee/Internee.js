import React, {useState, useEffect} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'

import axios from 'axios'
import {setIn} from 'formik'
import InterneeForm from '../../modals/Internee/InterneeForm'
import UpdateIntern from './Updateform/UpdateIntern'
export default function Internee({className}) {
  const [internee, setInterneeData] = useState([])
  const [update, setUpdate] = useState(-1)
  const [rowsPerPage, setRowsPerPage] = useState('25')

  const handleChange = (event) => {
    setRowsPerPage(event.target.value)
  }

  const currentData = internee.slice(0, rowsPerPage)
  //-------get data from database--------------------------------------------------------
  useEffect(() => {
    axios
      .get('http://localhost:8002/students')
      .then((res) => {
        setInterneeData(res.data)
      })
      .catch((error) => {
        console.log(error + 'this is not working')
      })
  }, [])
  // for deletion the record--------------------------------------------------------------------
  const handleClick = async (e) => {
    console.log(e)
    axios
      .delete(`http://localhost:8002/students/${e}`)
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        alert('An error occurred. Please try again.')
      })
    const items = await axios.get('http://localhost:8002/students')
    setInterneeData(items.data)
  }
  //for updation data ----------------------------------------------------------------------------
  const handleEdit = (id) => {
    console.log(id)
    setUpdate(id)
  }
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Internee</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>Over 500 members</span>
        </h3>
        <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Click to add a user'
        >
          <a
            href='#'
            className='btn btn-sm btn-light-primary'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_Internee'
          >
            <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
            Internee
          </a>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted'>
                <th className='w-25px'>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='1'
                      data-kt-check='true'
                      data-kt-check-target='.widget-9-check'
                    />
                  </div>
                </th>
                <th className='min-w-130px'>Name</th>
                <th scope='min-w-100px'>Intern no</th>
                <th scope='min-w-120px'>Email</th>
                <th scope='min-w-120px'>Duration</th>
                <th scope='min-w-120px'>Join Date</th>
                <th scope='min-w-120px'>Technology</th>
                <th scope='min-w-120px'>Attendance</th>
                <th scope='min-w-120px'>Projects</th>
                <th scope='min-w-120px'>Status</th>
                <th scope='min-w-100px text-end'>Action</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {currentData.map((item) =>
                update === item._id ? (
                  <UpdateIntern
                    item={item}
                    currentData={currentData}
                    setInterneeData={setInterneeData}
                  />
                ) : (
                  <tr key={item._id}>
                    <td>
                      <div className='form-check form-check-sm form-check-custom form-check-solid'>
                        <input
                          className='form-check-input widget-9-check'
                          type='checkbox'
                          value='1'
                        />
                      </div>
                    </td>
                    <td>
                      <div className='d-flex align-items-center'>
                        <div className='symbol symbol-45px me-5'>
                          <img src={toAbsoluteUrl('/media/avatars/300-14.jpg')} alt='' />
                        </div>
                        <div className='d-flex justify-content-start flex-column'>
                          <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                            {item.name}
                          </a>
                        </div>
                      </div>
                    </td>
                    <td className='fw-bold'>{item.interneeNo}</td>
                    <td>
                      <a
                        href='#'
                        className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'
                      >
                        {item.email}
                      </a>
                    </td>
                    <td className='fw-semibold'>
                      <span className='text-dark fw-bold d-block fs-7'>{item.duration}</span>
                    </td>
                    <td className='fw-semibold'>
                      <span className='text-dark fw-bold d-block fs-7'>{item.joinDate}</span>
                    </td>
                    <td className='fw-semibold'>
                      <span className='text-dark fw-bold d-block fs-7'>{item.technology}</span>
                    </td>
                    <td className='text-end'>
                      <div className='d-flex flex-column w-100 me-2'>
                        <div className='d-flex flex-stack mb-2'>
                          <span className='text-muted me-2 fs-7 fw-semibold'>
                            {item.attendance}
                          </span>
                        </div>
                        <div className='progress h-6px w-100'>
                          <div
                            className='progress-bar bg-primary'
                            role='progressbar'
                            style={{width: `${item.attendance}%`}}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className='fw-semibold'>
                      <span className='text-dark fw-bold d-block fs-7'>{item.project}</span>
                    </td>
                    <td>
                      <span className='badge badge-light-warning'>{item.status}</span>
                    </td>
                    <td>
                      <div className='d-flex justify-content-end flex-shrink-0'>
                        <button
                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                          onClick={() => handleEdit(item._id)}
                          data-bs-toggle='modal'
                          data-bs-target='#kt_modal_Internee_Update'
                        >
                          <KTSVG
                            path='/media/icons/duotune/art/art005.svg'
                            className='svg-icon-3'
                          />
                        </button>
                        <button
                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                          onClick={() => handleClick(item._id)}
                        >
                          <KTSVG
                            path='/media/icons/duotune/general/gen027.svg'
                            className='svg-icon-3'
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
      <InterneeForm setInterneeData={setInterneeData} />

      {/* <UpdateForm/> */}
    </div>
  )
}
