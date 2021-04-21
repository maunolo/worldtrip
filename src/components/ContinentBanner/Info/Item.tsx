import { Flex, Icon, Text, Tooltip } from '@chakra-ui/react'
import { VscInfo } from 'react-icons/vsc'

interface ItemProps {
  count: number
  label: string
  tooltip?: boolean
}

export function Item({ count, label, tooltip = false }: ItemProps) {
  return (
    <Flex direction="column" align={['start', 'start', 'center']}>
      <Text
        fontSize={['2xl', '4xl', '5xl']}
        lineHeight={['10', '3rem', '4.5rem']}
        color="yellow.500"
        fontWeight="semibold"
      >
        {count}
      </Text>
      <Text
        fontSize={['md', 'xl', '2xl']}
        lineHeight={['5', '7', '9']}
        color="gray.700"
        fontWeight={['normal', 'semibold']}
        whiteSpace="nowrap"
      >
        {label}
        {tooltip && (
          <Tooltip
            label="Cidades mais visitadas dos continentes"
            hasArrow
            placement="bottom-start"
            bg="gray.700"
            color="gray.100"
          >
            <span>
              <Icon
                as={VscInfo}
                fontSize={['xs', 'sm', 'md']}
                color="gray.400"
                ml={['0.5', '1']}
              />
            </span>
          </Tooltip>
        )}
      </Text>
    </Flex>
  )
}
