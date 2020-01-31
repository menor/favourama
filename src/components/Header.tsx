import React from 'react'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <section>
        <h1 className="mv0 normal">Favourama</h1>
        <p className="mv1">Favourite futurama episodes</p>
      </section>
    </header>
  )
}

const styles = {
  header: `
    pa3
    sans-serif
    bg-light-blue
`
}

export default Header
