import * as React from 'react'
import styles from './searchInput.module.css'
import { useDebounce } from '@/hooks/useDebounce';

interface ISearchInputProps {
    placeholder: string,
    handleSearch:(search:string) => void
}
export default function SearchInput({
    placeholder,
    handleSearch
}: ISearchInputProps) {

    const [search, setSearch] = React.useState('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value && e.target.value.trim() ? e.target.value.trim() : '';
        setSearch(query);
      };

    const debounceQuery = useDebounce(search, 250);

    React.useEffect(() => {
        handleSearch(search); 
      }, [debounceQuery]);

    return (
        <input
            className={styles['search-box']}
            defaultValue={search || ''}
            placeholder={placeholder}
            onChange={handleSearchChange}
        />
    )
}