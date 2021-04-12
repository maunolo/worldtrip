import { useBreakpointValue, Image } from '@chakra-ui/react'

export function Airplane() {
  const airplaneVisible = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <>
      {airplaneVisible && (
        <Image
          src="/banner/airplane.svg"
          alt="airplane"
          h={271}
          mt="2"
          transform="rotate(3deg)"
        />
      )}
    </>
  )
}
