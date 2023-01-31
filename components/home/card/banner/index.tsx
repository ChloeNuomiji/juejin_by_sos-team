import { memo } from 'react'
import type { FC, ReactElement } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import classNames from 'classnames'
import styles from './index.module.less'

export interface IProps {
  children?: ReactElement
}

const Banner: FC<IProps> = memo(() => {
  return (
    <div className={classNames('sidebar-block', styles.banner)}>
      <Link href="#">
        <Image
          src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4023ed80e2794fb48858b4809b17f139~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?"
          alt="banner"
          className={styles['banner-image']}
          width={240}
          height={200}
        />
      </Link>

      <Link href='#' className={styles['banner-desc']}>
        <span className={styles.inco}>投放 </span>
        <span>广告</span>
      </Link>
    </div>
  )
})

Banner.displayName = 'Banner'
export default Banner
