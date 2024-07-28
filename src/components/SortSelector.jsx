import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevence
      </MenuButton>
      <MenuList>
        <MenuItem key="TEST">Test</MenuItem>
        <MenuItem key="TEST2">Test2</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
