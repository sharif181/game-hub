import { Heading } from "@chakra-ui/react";

const GameHeading = ({ gameQuery }) => {
  //   Games
  //   Genre Games
  // Platform Games
  // Genre Platform Games

  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
