import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { initialState } from "./initialState";
import CategoryTabs from "./CategoryTabs";
import CategoryItems from "./CategoryItems";
const Body = () => {
  return (
    <Tabs>
      <TabList>
        {initialState.classes.map((cat) => (
          <CategoryTabs key={cat.id} id={cat.id} name={cat.type} />
        ))}
      </TabList>

      <TabPanels>
        <TabPanel>
          {initialState.fruits.map((fruit) => (
            <CategoryItems
              key={fruit.id}
              id={fruit.id}
              categoryId={fruit.classid}
              name={fruit.name}
            />
          ))}
        </TabPanel>
        <TabPanel>
          {initialState.vagetables.map((veg) => (
            <CategoryItems
              key={veg.id}
              id={veg.id}
              categoryId={veg.classid}
              name={veg.name}
            />
          ))}
        </TabPanel>
        <TabPanel>
          {initialState.NonVeg.map((nonveg) => (
            <CategoryItems
              key={nonveg.id}
              id={nonveg.id}
              categoryId={nonveg.classid}
              name={nonveg.name}
            />
          ))}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Body;
