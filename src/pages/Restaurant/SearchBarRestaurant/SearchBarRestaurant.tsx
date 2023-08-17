
import styles from './SearchBarRestaurant.module.css'
import {useState} from 'react';
import emptyStar from '../../../assets/emptyStar.png';
import orangeStar from '../../../assets/orangeStar.png';
import search from '../../../assets/search.png';

 const SearchBarRestaurant: React.FC = () => {

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
    <div className={styles.page} data-testid='search-bar-restaurant'>
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
            data-testid='toggle-favorite'
          >
            {isFavorite && <img src={orangeStar} alt="Disfavor" />}
            {isFavorite && <p>Disfavor</p>}
            {!isFavorite && <img src={emptyStar} alt="Favorite" /> }
            {!isFavorite && <p>Favorite</p>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBarRestaurant;
