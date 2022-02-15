import Navigation from 'components/Navigation'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/static/images/logo/circle_orange.svg" alt="Incentro Logo" />
      </div>
      <Navigation />
    </header>
  )
}

export default Header
