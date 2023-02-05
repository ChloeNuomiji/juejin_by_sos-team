// components/layout/home/cpns/sidebar/index.tsx
import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import style from './index.module.less'
import Register from './register'
import Download from './download'
import Leaflet from './leaflet'
import AuthorList from './authorlist'

export interface IProps {
  children?: ReactElement
}

const Sidebar: FC<IProps> = memo((props) => {
  // const { children } = props

  return (
    <div>
      <Register/>
      <Leaflet/> {/* 小册广告组件 */}
      <Download/> {/* APP下载组件 */}
      <AuthorList/> {/* 作者榜组件 */}
    </div>
  )
})

export default Sidebar
