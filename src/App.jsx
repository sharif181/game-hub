import { useState } from "react";
import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {
  const [gameQuery, setGameQuery] = useState({
    platform: null,
    genre: null,
    orderBy: null,
    searchText: null,
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
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText: searchText })
            }
          />
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
          <Box paddingLeft={3}>
            <GameHeading gameQuery={gameQuery} />
            <HStack spacing={5} marginBottom={5}>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platfrom) =>
                  setGameQuery({ ...gameQuery, platform: platfrom })
                }
              />
              <SortSelector
                selectedSort={gameQuery.orderBy}
                onSelectedSortOrder={(orderBy) =>
                  setGameQuery({ ...gameQuery, orderBy: orderBy })
                }
              />
            </HStack>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
