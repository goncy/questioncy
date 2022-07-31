import type {NextPage} from "next";

import {
  Button,
  Center,
  Grid,
  Skeleton,
  Spinner,
  Stack,
  StackDivider,
  Text,
  Textarea,
} from "@chakra-ui/react";
import {FormEvent, useEffect, useState} from "react";

import api from "../api";
import QuestionCard from "../components/QuestionCard";
import {Question} from "../types";

const Home: NextPage = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [status, setStatus] = useState<"init" | "starting" | "updating" | "resolved" | "rejected">(
    "init",
  );
  const [question, setQuestion] = useState<string>("");

  function fetchQuestions() {
    api.question
      .list()
      .then((questions) => {
        setQuestions(questions);
        setStatus("resolved");
      })
      .catch(() => setStatus("rejected"));
  }

  function handleAddQuestion(event: FormEvent) {
    event.preventDefault();

    setStatus("updating");

    api.question.create(question).then(() => {
      setQuestion("");
      fetchQuestions();
    });
  }

  useEffect(() => {
    setStatus("starting");
    fetchQuestions();
  }, []);

  if (["init"].includes(status)) {
    return (
      <Center paddingY={12}>
        <Spinner size="xl" />
      </Center>
    );
  }

  if (status === "rejected") {
    return <Text>Hubo un problema trayendo los mensajes</Text>;
  }

  return (
    <Stack divider={<StackDivider />} spacing={6}>
      <Stack as="form" margin="auto" maxWidth={512} width="100%" onSubmit={handleAddQuestion}>
        <Textarea
          placeholder="Que estás haciendo hoy?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <Button
          colorScheme="primary"
          isDisabled={status === "starting"}
          isLoading={status === "updating"}
          size="lg"
          type="submit"
        >
          Enviar pregunta
        </Button>
      </Stack>
      <Grid gap={4} templateColumns="repeat(auto-fill, minmax(300px, 1fr))">
        {status === "starting" ? (
          <>
            <Skeleton height={60} width={"100%"} />
            <Skeleton height={60} width={"100%"} />
            <Skeleton height={60} width={"100%"} />
            <Skeleton height={60} width={"100%"} />
          </>
        ) : (
          questions.map((question) => <QuestionCard key={question.id} question={question} />)
        )}
      </Grid>
    </Stack>
  );
};

export default Home;
