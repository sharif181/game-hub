import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatfromIconList from "./PlatfromIconList";
import CriticScore from "./CriticScore";

const GameCard = ({ game }) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatfromIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
