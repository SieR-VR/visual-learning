import { Center, VStack } from "@chakra-ui/react";

import { NodeProps } from "reactflow";
import { Tensor } from "../../common-types";
import NodeHeader from "./NodeHeader";

import { TbMathFunction } from "react-icons/tb";

const TensorNode = ({ data, selected }: NodeProps<Tensor>) => {
  return (
    <Center
      bg="var(--node-bg-color)"
      borderRadius="lg"
      borderWidth="0.5px"
      boxShadow="lg"
      overflow="hidden"
      transition="0.15s ease-in-out"
    >
      <VStack
        minWidth="240px"
        spacing={0}
      >
        <VStack w="full">
          <NodeHeader
            name="Tensor"
            icon={<TbMathFunction />}
            accentColor="var(--node-accent-color)"
            selected={selected}
          />
        </VStack>
      </VStack>
    </Center>
  );
}

export default TensorNode;