import { Badge } from "@chakra-ui/react";

const CriticScore = ({ score }) => {
  let color = score > 85 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      colorScheme={color}
      fontSize="14px"
      paddingX="5px"
      borderRadius="4px"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
