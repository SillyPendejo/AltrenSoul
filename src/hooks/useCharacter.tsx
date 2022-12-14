import React, { useState } from 'react'
import { isEmpty } from 'lodash'

import { uuid } from '~utils/index'

import { Character } from '~types'

const isCharacterList = (character: any): character is Character[] => {
  return typeof character === 'object'
}

const useCharacter = () => {
  const getCharacters = () => {
    let characterList = localStorage.getItem('AltrenCharacterList')
    if (!characterList) {
      localStorage.setItem('AltrenCharacterList', JSON.stringify([]))
      return [] as Character[]
    }
    characterList = JSON.parse(characterList)
    if (isCharacterList(characterList)) {
      return characterList
    }
    return [] as Character[]
  }

  const getCharacter = (id: string) => {
    const characters = getCharacters()
    const character = characters.find(character => character.id === id)
    return character
  }

  const [characters, setCharacters] = useState(getCharacters())

  const addCharacter = () => {
    const characterId = uuid().slice(0, 8)
    const emptyCharacter: Character = {
      id: characterId,
      name: 'Новый персонаж',
      race: 'Раса',
      health: 4,
      maxHealth: 4,
      armor: 4,
      maxArmor: 4,
      energy: 4,
      maxEnergy: 4,
      strength: 0,
      dexterity: 0,
      charisma: 0,
      intelligence: 0,
      endurance: 0
    }
    const characterList = [...getCharacters(), emptyCharacter]
    localStorage.setItem('AltrenCharacterList', JSON.stringify(characterList))
    setCharacters(characterList)
    return characterId
  }

  const setCharacterField = (id: string, value: string | number, valueKey: keyof Character) => {
    const character = getCharacter(id)
    const updatedCharacter = {
      ...character,
      [valueKey]: value
    }
    const updatedCharacterList = getCharacters().map(character => {
      if (character.id === id) {
        return updatedCharacter
      }
      return character
    })
    localStorage.setItem('AltrenCharacterList', JSON.stringify(updatedCharacterList))
  }

  return { characters, getCharacters, addCharacter, getCharacter, setCharacterField }
}

export default useCharacter
