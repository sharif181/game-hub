import { useState } from "react";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
  const [gameQuery, setGameQuery] = useState({
    platform: null,
    genre: null,
  });

  const onSelectedGenre = (genre) => {
    setGameQuery({ ...gameQuery, genre: genre });
  };

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              onSelectedGenre={onSelectedGenre}
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        </Show>

        <GridItem area="main">
          <HStack spacing={5} paddingLeft={3} marginBottom={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platfrom) =>
                setGameQuery({ ...gameQuery, platform: platfrom })
              }
            />
            <SortSelector />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
