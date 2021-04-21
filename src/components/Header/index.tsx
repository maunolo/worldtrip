import { Flex, Icon, Image, Box } from '@chakra-ui/react'
import { VscChevronLeft } from 'react-icons/vsc'
import { useRouter } from 'next/router'

interface HeaderProps {
  withReturnButton?: boolean
}

export function Header({ withReturnButton = false }: HeaderProps) {
  const router = useRouter()

  return (
    <Flex
      as="header"
      maxWidth="7xl"
      w="full"
      mx="auto"
      align="center"
      h={['50px', '75px', '100px']}
      px={['4', '16', '16']}
    >
      {withReturnButton && (
        <Icon
          as={VscChevronLeft}
          fontSize={['lg', '2xl', '3xl']}
          onClick={() => router.back()}
          transition="color 0.2s"
          left="0"
          cursor="pointer"
          position="relative"
          _hover={{
            color: 'yellow.500'
          }}
        />
      )}
      <Flex align="center" justify="center" width="full">
        <Image
          src="/logo.svg"
          alt="Logo"
          h={['20px', '30px', '45px']}
          justifySelf=""
        ></Image>
      </Flex>
      <Box w="30px" />
    </Flex>
  )
}
