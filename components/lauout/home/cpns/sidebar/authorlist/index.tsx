// components/layout/home/cpns/sidebar/authorlist/index.tsx
import { FC } from 'react';
import styles from './index.module.less'
import Author from './author';

interface IProps {
  href?: string;
}

const AuthorList: FC<IProps> = (props) => {
  return (
    <div className={styles.authorBlock}>
      <header>🎖️作者榜</header>
      <div className={styles.list}>
        <Author/>
        <Author/>
        <Author/>
        <a 
          className={styles.item} 
          href="https://juejin.cn/recommendation/authors/recommended">
          <div className={styles.more}>
            <span>完整榜单 {">"}</span>
          </div>
        </a>
      </div>
    </div>
    
  )
}

export default AuthorList;