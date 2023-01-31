//
import { FC } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './index.module.less'

interface IProps {

}

const Author: FC<IProps> = (props) => {
  let data = {
    name: "糯米鸡",
    href: "https://juejin.cn/user/2506542244708072",
    rank: "5",
    position: "公众号: 码猿技术专栏 @ 蚂蚁金服",
  }
  
  return (
    <div className={styles.authorItem}>
      <a href={data.href} className={styles.link}>
        <img 
          src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/3/24/1710d2d313678bc6~tplv-t2oaga2asx-no-mark:100:100:100:100.awebp" 
          alt={data.name} 
          className={styles.avatar} 
          loading="lazy"
        />
        <div className={styles.userInfo}>
          <div className={styles.username}>
            <span className={styles.name}>{data.name}</span>
            <span className={styles.rank}>
              <img 
                className={styles.img} 
                src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-5.d08789d.png"
                alt= {"lv-"+"data.rank"}
                title="创作等级"
              ></img>
            </span>
          </div>
          
          <div className={styles.position}>{data.position}</div>
        </div>
      </a>

    </div>
  )
}

export default Author;