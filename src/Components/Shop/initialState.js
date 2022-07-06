export const initialState = {
  classes: [
    { id: 1, type: "Fruits" },
    { id: 2, type: "vegetables" },
    { id: 3, type: "Non-Veg" },
  ],
  fruits: [
    { id: "1", name: "Mango", classid: "1", cnt: 0 },
    { id: "2", name: "Guava", classid: "1", cnt: 0 },
    { id: "3", name: "Apple", classid: "1", cnt: 0 },
    { id: "4", name: "Kiwi", classid: "1", cnt: 0 },
    { id: "5", name: "Orange", classid: "1", cnt: 0 },
  ],
  vagetables: [
    { id: "1", name: "Brinjal", classid: "2", cnt: 0 },
    { id: "2", name: "Tomatoes", classid: "2", cnt: 0 },
    { id: "3", name: "Potato", classid: "2", cnt: 0 },
    { id: "4", name: "Carrot", classid: "2", cnt: 0 },
    { id: "5", name: "Cucumbers", classid: "2", cnt: 0 },
  ],
  NonVeg: [
    { id: "1", name: "Chicken", classid: "3", cnt: 0 },
    { id: "2", name: "Mutton", classid: "3", cnt: 0 },
    { id: "3", name: "Fish", classid: "3", cnt: 0 },
    { id: "4", name: "Prawns", classid: "3", cnt: 0 },
  ],
};
