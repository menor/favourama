import React, { MouseEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { displayFiltersSelector } from '../../app/selectors'
import { toggleShowFavs, toggleShowUnfavs } from './DisplayFiltersSlice'

const DisplayFilters = () => {
  const dispatch = useDispatch()

  const { showFavs, showUnfavs } = useSelector(displayFiltersSelector)

  const handleFavFilterClicked = (_e: MouseEvent) => dispatch(toggleShowFavs())

  const handleUnfavFilterClicked = (_e: MouseEvent) =>
    dispatch(toggleShowUnfavs())

  return (
    <section className="tr mt3 ph4">
      <span className="f6 ttu silver">show: </span>
      <button
        className={styles.filterButton({ active: showFavs })}
        onClick={handleFavFilterClicked}
      >
        favs
      </button>
      <button
        className={styles.filterButton({ active: showUnfavs })}
        onClick={handleUnfavFilterClicked}
      >
        unfavs
      </button>
    </section>
  )
}

type filterButtonProps = {
  active: boolean
}

const styles = {
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

export default DisplayFilters
