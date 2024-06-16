import PropTypes from 'prop-types'
import React, { createContext, useContext, useState, useEffect } from 'react'

const UseContext = createContext({})

export const UseProvider = ({ children }) => {
  const [userData, setUserData] = useState({})

  const putUserData = async userInfo => {
    setUserData(userInfo)

    await localStorage.setItem('codeburger:userData', JSON.stringify(userInfo))
  }

  const logout = async () => {
    await localStorage.removeItem('codeburger:userData')
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientInfor = await localStorage.getItem('codeburger:userData')

      if (clientInfor) {
        setUserData(JSON.parse(clientInfor))
      }
    }

    loadUserData()
  }, [])

  return (
    <UseContext.Provider value={{ putUserData, userData, logout }}>
      {children}
    </UseContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UseContext)

  if (!context) {
    throw new Error('useUser must be used with UseContext')
  }

  return context
}

UseProvider.propTypes = {
  children: PropTypes.node
}
