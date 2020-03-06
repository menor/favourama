import React from 'react'

type HeaderProps = {
  favFilterActive: boolean
  unfavFilterActive: boolean
  onFavFilterClick: Function
  onUnfavFilterClick: Function
}

const Header = (props: HeaderProps) => {
  return (
    <header className={styles.header}>
      <h1 className="lh-solid mv0 tracked-tight bold dark-gray">Favourama</h1>
      <p className="mv1 silver">Favourite futurama episodes</p>
      <p className="tr mt3">
        <span className="f6 ttu silver">show: </span>
        <button
          className={styles.filterButton({ active: props.favFilterActive })}
          onClick={e => props.onFavFilterClick(e)}
        >
          favs
        </button>
        <button
          className={styles.filterButton({ active: props.unfavFilterActive })}
          onClick={e => props.onUnfavFilterClick(e)}
        >
          unfavs
        </button>
      </p>
    </header>
  )
}

type filterButtonProps = {
  active: boolean
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
`,
  filterButton: ({ active }: filterButtonProps) => `
    f6
    link
    dim
    br2
    ba
    ph2
    pv2
    mb2
    ml2
    dib
    pointer:hover
    ${active ? 'white' : 'orange'}
    ${active ? 'bg-orange' : 'bg-white'}
  `
}

export default Header
