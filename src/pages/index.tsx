import type { FC } from 'react'
import { useEffect } from 'react'

import axios from 'axios'

import classNames from 'classnames'
import { Divider } from '@arco-design/web-react'

import Link from 'next/link'
import styles from './index.module.less'
import { HomeCard, HomeCpns, HomeList } from '@/components/home'
import Banner from '@/components/banner'
import { useHomeLayout } from '@/hooks/useHomeLayout'

const Home: FC = () => {
  const { sideFixed } = useHomeLayout()

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get('https://sos.staraway.love/api/layouts/1?populate=*')
      console.log(data.data.data.header_navs)
    }
    fetchData()
    console.log('Home')
  }, [])

  return (
    <div className="home-wrapper">
      <div>
        <span>home</span>
        {/* {
          navData?.map(item => (
            <span key={item.id}> {item.title} </span>
          ))
        } */}
      </div>

      <div className={styles.main}>
        <div className={styles.left}>
          <nav className={styles['list-nav']}>
            <ul className={styles['nav-list']}>
              <li className={classNames(styles.active, styles.item)}>
                <Link href="#">推荐</Link>
              </li>
              <Divider type="vertical" style={{ margin: 0 }} />
              <li className={styles.item}>
                <Link href="#">最新</Link>
              </li>
              <Divider type="vertical" style={{ margin: 0 }} />
              <li className={styles.item}>
                <Link href="#">热榜</Link>
              </li>
            </ul>
          </nav>

          <HomeList.AdvertisementItem />
          <HomeList.EntryItem />
          <HomeList.EntryItem />
          <HomeList.EntryItem />
          <HomeList.EntryItem />
          <HomeList.EntryItem />
          <HomeList.EntryItem />
          <HomeList.EntryItem />
          <HomeList.EntryItem />
          <HomeList.EntryItem />
          <HomeList.EntryItem />
          <HomeList.EntryItem />
          <HomeList.EntryItem />
          <HomeList.EntryItem />
          <HomeList.EntryItem />
          <HomeList.EntryItem />
          <HomeList.EntryItem />
          <HomeList.AdvertisementItem />
        </div>

        <div className={styles.right}>
          <HomeCard.Signin />
          <div className={classNames({ [styles['side-fixed']]: sideFixed })}>
            <Banner />
            <Banner />
            {!sideFixed && <HomeCard.Users />}
            <HomeCard.Download />
          </div>
          {!sideFixed && (
            <>
              <HomeCard.Links />
              <HomeCpns.Footer />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

Home.displayName = 'Home'
export default Home
