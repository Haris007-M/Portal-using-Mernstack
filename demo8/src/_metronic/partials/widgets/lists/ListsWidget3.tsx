/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
}

const ListsWidget3: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0'>
        <h3 className='card-title fw-bold text-dark'>Message</h3>
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
          </button>
          <Dropdown1 />
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-2'>
      <form className='row'>
          <div className='col-md-6 my-1'>
            <label htmlFor='date' className='form-label'>
              From
            </label>
            <input type='date' name='joinDate' className='form-control' id='date' required />
          </div>
          <div className='col-md-6 my-1'>
            <label htmlFor='date' className='form-label'>
              TO
            </label>
            <input type='date' name='joinDate' className='form-control' id='date' required />
          </div>
          <div className='col-md-12 my-1'>
            <label htmlFor='validationServer05' className='form-label'>
              Select
            </label>
            <select className='form-select' name='technology' id='validationServer04' required>
              <option disabled value=''>
                Select
              </option>
              <option value='TEST'>TEST</option>
              <option value='ON GOING'>ON GOING</option>
              <option value='COMPLETE'>COMPLETE</option>
              <option value='INCOMPLETE'>INCOMPLETE</option>
            </select>
          </div>
          <div className='col-md-12 my-1'>
            <label htmlFor='validationServer05' className='form-label'>
              Technology
            </label>
            <select className='form-select' name='technology' id='validationServer04' required>
              <option disabled value=''></option>

              <option value='HTML/CSS'>HTML/CSS</option>
              <option value='Graphic Designing'>Graphic Designing</option>
              <option value='VIDEO EDITING'>VIDEO EDITING</option>
              <option value='ANIMATIONS'>ANIMATIONS</option>
              <option value='WORDPRESS'>WORDPRESS</option>
              <option value='PHP'>PHP</option>
              <option value='ASP.NET / MVC'>ASP.NET / MVC</option>
              <option value='LARAVEL'>LARAVEL</option>
              <option value='CODIGNITOR'>CODIGNITOR</option>
              <option value='Android Development'>Android Development</option>
              <option value='React Native'>React Native</option>
              <option value='JAVA EE/SE'>JAVA EE/SE</option>
              <option value='NODE JS'>NODE JS</option>
              <option value='REACT JS'>REACT JS</option>
              <option value='PYTHON'>PYTHON</option>
              <option value='C#'>C#</option>
              <option value='Flutter'>Flutter</option>
              <option value='SEO'>SEO</option>
              <option value='SQA'>SQA</option>
              <option value='DIGITAL MARKETING'>DIGITAL MARKETING</option>
              <option value='UNITY'>UNITY</option>
              <option value='BLOCKCHAIN'>BLOCKCHAIN</option>
              <option value='ARTIFICAL INTELLIGENCE'>ARTIFICAL INTELLIGENCE</option>
              <option value='PROJECT MANAGEMENT'>PROJECT MANAGEMENT</option>
              <option value='ADMINISTRATION'>ADMINISTRATION</option>
              <option value='NETWORKING'>NETWORKING</option>
              <option value='ACCOUNTING'>ACCOUNTING</option>
              <option value='OTHERS'>OTHERS</option>
            </select>
          </div>
          <div className='col-md-12 my-1'>
            <label htmlFor='name' className='form-label'>
              Message
            </label>
            <textarea
              name=''
              className='form-control card-xl-stretch mb-5 mb-xl-8'
              id=''
            ></textarea>
          </div>
        </form>
        <button type='button' className='btn btn-primary float-end' data-bs-dismiss='modal'>
          Send
        </button>
        {/* Form :: End */}
        {/* begin::Item */}
        {/* <div className='d-flex align-items-center mb-8'> */}
          {/* begin::Bullet */}
          {/* <span className='bullet bullet-vertical h-40px bg-success'></span> */}
          {/* end::Bullet */}
          {/* begin::Checkbox */}
          {/* <div className='form-check form-check-custom form-check-solid mx-5'>
            <input className='form-check-input' type='checkbox' value='' />
          </div> */}
          {/* end::Checkbox */}
          {/* begin::Description */}
          {/* <div className='flex-grow-1'>
            <a href='#' className='text-gray-800 text-hover-primary fw-bold fs-6'>
              Create FireStone Logo
            </a>
            <span className='text-muted fw-semibold d-block'>Due in 2 Days</span>
          </div> */}
          {/* end::Description */}
          {/* <span className='badge badge-light-success fs-8 fw-bold'>New</span>
        </div> */}
        {/* end:Item */}
        {/* begin::Item */}
        {/* <div className='d-flex align-items-center mb-8'> */}
          {/* begin::Bullet */}
          {/* <span className='bullet bullet-vertical h-40px bg-primary'></span> */}
          {/* end::Bullet */}
          {/* begin::Checkbox */}
          {/* <div className='form-check form-check-custom form-check-solid mx-5'>
            <input className='form-check-input' type='checkbox' value='' />
          </div> */}
          {/* end::Checkbox */}
          {/* begin::Description */}
          {/* <div className='flex-grow-1'>
            <a href='#' className='text-gray-800 text-hover-primary fw-bold fs-6'>
              Stakeholder Meeting */}
            {/* </a>
            <span className='text-muted fw-semibold d-block'>Due in 3 Days</span>
          </div> */}
          {/* end::Description */}
          {/* <span className='badge badge-light-primary fs-8 fw-bold'>New</span>
        </div> */}
        {/* end:Item */}
        {/* begin::Item */}
        {/* <div className='d-flex align-items-center mb-8'> */}
          {/* begin::Bullet */}
          {/* <span className='bullet bullet-vertical h-40px bg-warning'></span> */}
          {/* end::Bullet */}
          {/* begin::Checkbox */}
          {/* <div className='form-check form-check-custom form-check-solid mx-5'>
            <input className='form-check-input' type='checkbox' value='' />
          </div> */}
          {/* end::Checkbox */}
          {/* begin::Description */}
          {/* <div className='flex-grow-1'>
            <a href='#' className='text-gray-800 text-hover-primary fw-bold fs-6'>
              Scoping &amp; Estimations
            </a>
            <span className='text-muted fw-semibold d-block'>Due in 5 Days</span>
          </div> */}
          {/* end::Description */}
          {/* <span className='badge badge-light-warning fs-8 fw-bold'>New</span>
        </div> */}
        {/* end:Item */}
        {/* begin::Item */}
        {/* <div className='d-flex align-items-center mb-8'> */}
          {/* begin::Bullet */}
          {/* <span className='bullet bullet-vertical h-40px bg-primary'></span> */}
          {/* end::Bullet */}
          {/* begin::Checkbox */}
          {/* <div className='form-check form-check-custom form-check-solid mx-5'>
            <input className='form-check-input' type='checkbox' value='' />
          </div> */}
          {/* end::Checkbox */}
          {/* begin::Description */}
          {/* <div className='flex-grow-1'>
            <a href='#' className='text-gray-800 text-hover-primary fw-bold fs-6'>
              KPI App Showcase
            </a>
            <span className='text-muted fw-semibold d-block'>Due in 2 Days</span>
          </div> */}
          {/* end::Description */}
          {/* <span className='badge badge-light-primary fs-8 fw-bold'>New</span>
        </div> */}
        {/* end:Item */}
        {/* begin::Item */}
        {/* <div className='d-flex align-items-center mb-8'> */}
          {/* begin::Bullet */}
          {/* <span className='bullet bullet-vertical h-40px bg-danger'></span> */}
          {/* end::Bullet */}
          {/* begin::Checkbox */}
          {/* <div className='form-check form-check-custom form-check-solid mx-5'>
            <input className='form-check-input' type='checkbox' value='' />
          </div> */}
          {/* end::Checkbox */}
          {/* begin::Description */}
          {/* <div className='flex-grow-1'>
            <a href='#' className='text-gray-800 text-hover-primary fw-bold fs-6'>
              Project Meeting
            </a>
            <span className='text-muted fw-semibold d-block'>Due in 12 Days</span>
          </div> */}
          {/* end::Description */}
          {/* <span className='badge badge-light-danger fs-8 fw-bold'>New</span>
        </div> */}
        {/* end:Item */}
        {/* begin::Item */}
        {/* <div className='d-flex align-items-center'> */}
          {/* begin::Bullet */}
          {/* <span className='bullet bullet-vertical h-40px bg-success'></span> */}
          {/* end::Bullet */}
          {/* begin::Checkbox */}
          {/* <div className='form-check form-check-custom form-check-solid mx-5'>
            <input className='form-check-input' type='checkbox' value='' />
          </div> */}
          {/* end::Checkbox */}
          {/* begin::Description */}
          {/* <div className='flex-grow-1'>
            <a href='#' className='text-gray-800 text-hover-primary fw-bold fs-6'>
              Customers Update
            </a>
            <span className='text-muted fw-semibold d-block'>Due in 1 week</span>
          </div> */}
          {/* end::Description */}
          {/* <span className='badge badge-light-success fs-8 fw-bold'>New</span> */}
        {/* </div> */}
        {/* end:Item */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {ListsWidget3}
