import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import PlatfromIconList from "./PlatfromIconList";

const GameCard = ({ game }) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatfromIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
