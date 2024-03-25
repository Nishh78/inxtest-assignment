"use client"

import React, { useEffect } from 'react'
import styles from './style.module.css'
import { createGoogleMapsLink } from '@/util/util';
import SearchInput from '@/components/seachInput';

const BASE_URL = `https://irail.be/stations/NMBS`;

interface RowList {
  name: string;
  latitude: number;
  longitude: number;
  note?: string; // Optional property
}

export default function DataTable() {

  const [{
    isLoading,
    searchInput,
    rowList
  }, setState] = React.useState<{ isLoading: boolean, searchInput: string, rowList: RowList[] }>({
    isLoading: false,
    searchInput: '',
    rowList: []
  })

  const fetchData = async () => {
    try {
      const API_URL = searchInput ? `${BASE_URL}?q=${searchInput}` : BASE_URL;
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
          setState(
            (oldState) => (
              {
                ...oldState,
                isLoading: false,
                rowList: [
                  ...data['@graph']
                ]
              }
            )
          )
        })
    } catch (error) {
      setState(
        (oldState) => (
          {
            ...oldState,
            isLoading: false,
            rowList: []
          }
        )
      )
    }

  }

  const handleSearch = (search:string): void => {
    setState(
      (oldState) => (
        {
          ...oldState,
          searchInput: search
        }
      )
    )
  }

  useEffect(() => {
    fetchData();
  }, [searchInput])

  return (
    <div className={styles['page']}>
      <div className={styles['container']}>
        <h1 className={styles['title']}>Belgium train stations</h1>
        <SearchInput
          placeholder="Filter By Name"
          handleSearch={handleSearch}
        />
          <table className={styles['table']}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? `Loading...` : (
                rowList.length > 0 ? (
                  rowList.map((row, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <a href={createGoogleMapsLink(row)} target="_blank" rel="noopener noreferrer"> {row.name}</a>
                        </td>
                        <td>{row.latitude}</td>
                        <td>{row.longitude}</td>
                        <td><input className={styles['input']} type="text" name='note' placeholder="Enter Note" /></td>
                      </tr>
                    )
                  })
                ) : (<></>)
              )}
            </tbody>
          </table>
      </div>
    </div>
  )
}
