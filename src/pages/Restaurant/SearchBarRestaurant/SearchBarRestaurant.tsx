
import styles from './SearchBarRestaurant.module.css'
import {useState} from 'react';
import emptyStar from '../../../assets/emptyStar.png';
import orangeStar from '../../../assets/orangeStar.png';
import search from '../../../assets/search.png';

export default function Restaurant() {

  const [searchInput, setSearchInput] = useState<string>('');
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const searchHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchInput(event.currentTarget.value);
  }

  const favoriteHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    if(isFavorite)
      setIsFavorite(false);
    else
      setIsFavorite(true);
  }

  return (
    <div className={styles.page}>
      <div className={styles.pageTopContainer}>
        <div className={styles.pageTopContainerBox}>
          <input
            className={styles.pageTopContainerBoxSearch}
            placeholder='Search for dish'
            value={searchInput}
            type="text"
            onChange={searchHandler}
          />
          <img src={search} alt="" />
        </div>
        <div className={styles.pageTopContainerBox}>
          <button
            className={styles.pageTopContainerBoxFavorite} 
            onClick={favoriteHandler}      
          >
            {isFavorite && <img src={orangeStar} alt="" />}
            {isFavorite && <p>Disfavor</p>}
            {!isFavorite && <img src={emptyStar} alt="" /> }
            {!isFavorite && <p>Favorite</p>}
          </button>
        </div>
      </div>
    </div>
  );
}
