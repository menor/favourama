import React from 'react'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className="lh-solid mv0 tracked-tight bold dark-gray">Favourama</h1>
      <p className="mv1 silver">Favourite futurama episodes</p>
    </header>
  )
}

const styles = {
  header: `
    pt3
    ph4
    pb1
    mb1
    sans-serif
    br4
    br--bottom
  `
}

export default Header
