import React from 'react'

// TODO next:
// style and function favs unfavs
// Improve cards typography
const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className="lh-solid mv0 tracked-tight bold dark-gray">Favourama</h1>
      <p className="mv1 silver">Favourite futurama episodes</p>
      <p>favs | unfavs</p>
    </header>
  )
}

const styles = {
  header: `
    pt3
    ph4
    pb4
    sans-serif
`
}

export default Header
