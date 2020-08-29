import React from 'react'
import { Heading } from '@chakra-ui/core'

interface Props {
  title: string;
  simple: boolean;
}
function PageHeader({ title, simple }: Partial<Props>) {

  if (simple) {
    return <Heading as='h1' mb={5}>{title}</Heading>
  }
  return (
    <Heading as='h1' px={[15,20]} fontSize={[25, 30]} mb={[5, 10]} pt={"70px"}>{title}</Heading>
  )
}

export default PageHeader