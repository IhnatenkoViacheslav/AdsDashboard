import { FC, PropsWithChildren, createContext, useState } from 'react'

interface IAdsDashboardContext {
  name: string
}

export const AdsDashboardContext = createContext<IAdsDashboardContext>(
  {} as IAdsDashboardContext
)

export const AdsDashboardContextProvider: FC<PropsWithChildren> = ({
  children
}) => {
  const [name, setName] = useState<string>('')

  return (
    <AdsDashboardContext.Provider value={{ name }}>
      {children}
    </AdsDashboardContext.Provider>
  )
}
