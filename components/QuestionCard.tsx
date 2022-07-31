import type {FC} from "react";

import {Stack, Text} from "@chakra-ui/react";

import {Question} from "../types";

interface Props {
  question: Question;
}

const QuestionCard: FC<Props> = ({question}) => {
  return (
    <Stack borderRadius="xl" boxShadow="xl" spacing={0} textAlign="center">
      <Text
        bgGradient="linear(primary.500 0%, secondary.500 100%)"
        borderTopRadius="xl"
        color="white"
        fontSize="2xl"
        fontWeight="bold"
        padding={4}
      >
        Dejá tu pregunta
      </Text>
      <Text
        alignItems="center"
        borderBottomRadius="xl"
        borderColor="gray.200"
        borderWidth={1}
        display="flex"
        flex={1}
        fontSize="xl"
        fontWeight="medium"
        justifyContent="center"
        lineHeight="normal"
        padding={4}
      >
        <Text as="span">{question.text}</Text>
      </Text>
    </Stack>
  );
};

export default QuestionCard;
