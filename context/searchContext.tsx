"use client"
import React, { createContext, useState, ReactNode, Dispatch, SetStateAction, useContext } from 'react'

type SearchContextType = {
    searchQuery: string
    setsearchQuery: Dispatch<SetStateAction<string>>
}

export const SearchContext = createContext<SearchContextType | undefined>(undefined)

export const SearchProvider = ({ children }: { children: ReactNode }) => {
    const [searchQuery, setsearchQuery] = useState("")
    return (
        <SearchContext.Provider value={{ searchQuery, setsearchQuery }}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearch = () => useContext(SearchContext)