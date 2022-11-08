import { Center, HStack, Heading } from '@chakra-ui/react';

interface NodeHeaderProps {
  name: string;
  icon: React.ReactElement;
  accentColor: string;
  selected: boolean;
  parentNode?: string;
}

const NodeHeader = ({
  name,
  icon,
  accentColor,
  selected,
  parentNode,
}: NodeHeaderProps) => {
  return (
    <Center
      bgGradient={`linear(to-r, ${accentColor}, ${accentColor} 50%, transparent 50%)`}
      borderBottomColor={accentColor}
      borderBottomStyle={parentNode ? 'dashed' : undefined}
      borderBottomWidth={parentNode ? '4px' : '2px'}
      h="auto"
      pt={2}
      verticalAlign="middle"
      w='full'
    >
      <HStack
        verticalAlign="middle"
        mb={-1}
        mt={-1}
        pb={2}
        pl={6}
        pr={6}
      >
        <Center
          alignContent="center"
          alignItems="center"
          h={4}
          w={4}
          verticalAlign="middle"
        >
          {icon}
        </Center>
        <Center verticalAlign="middle">
          <Heading
            alignContent="center"
            as="h5"
            fontWeight={700}
            lineHeight="auto"
            m="0"
            p="0"
            size="sm"
            textAlign="center"
            verticalAlign="middle"
          >
            {name}
          </Heading>
        </Center>
      </HStack>
    </Center>
  )
}

export default NodeHeader;