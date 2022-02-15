import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from './Navigation.module.scss'

const Navigation = () => {
  const router = useRouter()

  const getLinkClass = (linkPath: string) => {
    return router.pathname === linkPath
      ? styles['listItemActive']
      : styles['listItem']
  }

  return (
    <nav className={styles['navigation']}>
      <ul className={styles['list']}>
        <li className={getLinkClass('/')}>
          <Link href="/" passHref>
            <a href="dummy">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>{' '}
              Feedback Form
            </a>
          </Link>
        </li>
        <li className={styles['listItemDisabled']}>
          <button disabled>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z" />
            </svg>
            E-commerce Demo
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
