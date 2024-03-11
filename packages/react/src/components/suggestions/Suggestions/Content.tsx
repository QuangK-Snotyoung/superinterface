import { useMemo } from 'react'
import { isEmpty } from 'radash'
import { onlyText } from 'react-children-utilities'
import { useIsRunActive } from '@/hooks/runs/useIsRunActive'
import {
  Flex,
} from '@radix-ui/themes'
import { Item } from './Item'

export const Content = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const isRunActiveProps = useIsRunActive()

  const suggestions = useMemo(() => (
    onlyText(children).split(/\r?\n/).filter((c) => !isEmpty(c)).map((c) => c.trim())
  ), [children])

  const isDisabled = useMemo(() => (
    isRunActiveProps.isRunActive
  ), [isRunActiveProps])

  if (isEmpty(suggestions)) return null

  return (
    <Flex
      gap="2"
      py="2"
      wrap="wrap"
    >
      {suggestions.map((suggestion) => (
        <Item
          key={suggestion}
          suggestion={suggestion}
          isDisabled={isDisabled}
        />
      ))}
    </Flex>
  )
}
