import { useEffect } from 'react';
import { changeLoading, saveCharacters, savePage } from '../store/CharacterSlice';
import { useAppDispatch, useAppSelector } from '../../../hook/store';

export const useCharacter = () => {
    const dispatch = useAppDispatch()
    const { characters, loading, page } = useAppSelector((state) => state.characters)

    const guardarCharacters = async (page = 1) => {
        dispatch(changeLoading(true))
        const response = await fetch(`${import.meta.env.VITE_URL_API}/character?page=${page}`)
        const data = await response.json()
        dispatch(saveCharacters(data.results))
        dispatch(changeLoading(false))
    }

    useEffect(() => {
        guardarCharacters(page)
    }, [page]);

    const handlePrevious = () => {
        if(page === 1) return
        dispatch(savePage(page - 1))
    }
    const handleNext = () => {
        dispatch(savePage(page + 1))
    }

    return {
        characters, loading,  handlePrevious, handleNext, page
    }
}