/* eslint-disable react/jsx-no-target-blank */
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../helpers'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/general/gen025.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
      />
      {/* <AsideMenuItem
        to='/builder'
        icon='/media/icons/duotune/general/gen019.svg'
        title='Layout Builder'
      /> */}
      <div className='menu-item'>
        {/* <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Crafted</span>
        </div> */}
      </div>
      {/* <AsideMenuItemWithSub
        to='/crafted/pages'
        title='Pages'
        icon='/media/icons/duotune/ecommerce/ecm007.svg'
      >
        <AsideMenuItemWithSub to='/crafted/pages/profile' title='Profile' hasBullet={true}>
          <AsideMenuItem to='/crafted/pages/profile/overview' title='Overview' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/projects' title='Projects' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/campaigns' title='Campaigns' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/documents' title='Documents' hasBullet={true} />
          <AsideMenuItem
            to='/crafted/pages/profile/connections'
            title='Connections'
            hasBullet={true}
          />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub to='/crafted/pages/wizards' title='Wizards' hasBullet={true}>
          <AsideMenuItem
            to='/crafted/pages/wizards/horizontal'
            title='Horizontal'
            hasBullet={true}
          />
          <AsideMenuItem to='/crafted/pages/wizards/vertical' title='Vertical' hasBullet={true} />
        </AsideMenuItemWithSub>
      </AsideMenuItemWithSub> */}
      {/*   */}
      {/* <AsideMenuItemWithSub
        to='/crafted/widgets'
        title='Students'
        icon='/media/icons/duotune/general/gen022.svg'
      > */}
      <AsideMenuItem
        to='/crafted/widgets/tables'
        icon='/media/icons/duotune/general/gen055.svg'
        title='Students Projects'
      />
      <AsideMenuItem
        to='/crafted/widgets/internee'
        icon='/media/icons/duotune/general/gen017.svg'
        title='Internee'
      />
      <AsideMenuItem
        to='/crafted/widgets/stutasks'
        icon='/media/icons/duotune/general/gen032.svg'
        title='Student Tasks'
      />
      <AsideMenuItem
        to='/crafted/widgets/leave'
        icon='/media/icons/duotune/general/gen043.svg'
        title='Leave'
      />
      <AsideMenuItem
        to='/crafted/widgets/accounts'
        icon='/media/icons/duotune/general/gen049.svg'
        title='Accounts'
      />
      <AsideMenuItem
        to='/crafted/widgets/teachers'
        icon='/media/icons/duotune/general/gen022.svg'
        title='Teachers'
      />

      <AsideMenuItem
        to='/crafted/widgets/knowledgebase'
        icon='/media/icons/duotune/general/gen005.svg'
        title='Knowledge base'
      />
      <AsideMenuItem
        to='/crafted/widgets/addteacher'
        icon='/media/icons/duotune/general/gen035.svg'
        title='Add Teacher'
      />
      <AsideMenuItem
        to='/crafted/widgets/universities'
        icon='/media/icons/duotune/general/gen001.svg'
        title='Universities'
      />
      <AsideMenuItem
        to='/crafted/widgets/setting'
        icon='/media/icons/duotune/general/gen015.svg'
        title='Setting'
      />
      {/* </AsideMenuItemWithSub> */}
      {/* <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Apps</span>
        </div>
      </div> */}
      {/* <AsideMenuItemWithSub
        to='/apps/chat'
        title='Chat'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <AsideMenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />
        <AsideMenuItem to='/apps/chat/group-chat' title='Group Chart' hasBullet={true} />
        <AsideMenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={true} />
      </AsideMenuItemWithSub> */}
      {/* <AsideMenuItem
        to='/apps/user-management/users'
        icon='/media/icons/duotune/general/gen051.svg'
        title='User management'
      /> */}
      {/* <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-4'></div>
        </div>
      </div> */}
      {/* <div className='menu-item'>
        <a
          target='_blank'
          className='menu-link'
          href={process.env.REACT_APP_PREVIEW_DOCS_URL + '/docs/changelog'}
        >
          <span className='menu-icon'>
            <KTSVG path='/media/icons/duotune/general/gen005.svg' className='svg-icon-2' />
          </span>
          <span className='menu-title'>Changelog {process.env.REACT_APP_VERSION}</span>
        </a>
      </div> */}
    </>
  )
}
