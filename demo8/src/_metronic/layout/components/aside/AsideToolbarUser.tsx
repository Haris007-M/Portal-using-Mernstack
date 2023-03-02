import {useAuth} from '../../../../app/modules/auth'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {HeaderUserMenu, Search} from '../../../partials'

/* eslint-disable jsx-a11y/anchor-is-valid */
const AsideToolbarUser = () => {
  const {currentUser} = useAuth()

  return (
    <>
      {/* <Search/> */}
      {/*begin::User*/}
      <div className='aside-user d-flex align-items-sm-center justify-content-center py-5'>
        <div className='me-n2'>
          {/*begin::Action*/}
          <a
            href='#'
            className='btn btn-icon btn-sm btn-active-color-primary mt-n2'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-start'
            data-kt-menu-overflow='false'
          >
            <KTSVG
              path='/media/icons/duotune/coding/cod001.svg'
              className='svg-icon-muted svg-icon-12'
            />
          </a>

          <HeaderUserMenu />
          {/*end::Action*/}
        </div>
        {/*begin::Wrapper*/}
        <div className='aside-user-info flex-row-fluid flex-wrap ms-5'>
          {/*begin::Section*/}
          <div className='d-flex'>
            {/*begin::Info*/}
            <div className='flex-grow-1 me-2'>
              {/*begin::Username*/}
              <a href='#' className='text-white text-hover-primary fs-6 fw-bold'>
                {currentUser?.email} {currentUser?.last_name}
              </a>
              {/*end::Username*/}

              {/*begin::Description*/}
              <span className='text-gray-600 fw-bold d-block fs-8 mb-1'>Internee</span>
              {/*end::Description*/}

              {/*begin::Label*/}
              <div className='d-flex align-items-center text-success fs-9'>
                <span className='bullet bullet-dot bg-success me-1'></span>online
              </div>
              {/*end::Label*/}
            </div>
            {/*end::Info*/}

            {/*begin::User menu*/}

            {/*end::User menu*/}
          </div>
          {/*end::Section*/}
        </div>
          <div className='symbol symbol-50px mx-3'>
            <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt=''></img>
          </div>
        {/*end::Wrapper*/}
      </div>
      {/*end::User*/}
      {/*begin::Symbol*/}

      {/*end::Symbol*/}

      {/*begin::Aside search*/}
      <div className='aside-search py-5'>
        {/* <?php Theme::getView('partials/search/_inline', array(
        'class' => 'w-100',
        'menu-placement' => 'bottom-start',
        'responsive' => 'false'
    ))?> */}
      </div>
      {/*end::Aside search*/}
    </>
  )
}

export {AsideToolbarUser}
