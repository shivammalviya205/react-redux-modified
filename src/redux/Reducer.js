const initialState = [
  {
    id: 0,
    name: "Starbucks",
    area: "sector 62",
    category: "cafe",
    openinghour: 8,
    closinghour: 21,
  },
  {
    id: 1,
    name: "Cafe Coffee day",
    area: "sector 62",
    category: "cafe",
    openinghour: 9,
    closinghour: 22,
  },
  {
    id: 2,
    name: "Chai sutta bar",
    area: "sector 62",
    category: "cafe",
    openinghour: 10,
    closinghour: 23,
  },
  {
    id: 3,
    name: "Ram medical",
    area: "sector 62",
    category: "Medical",
    openinghour: 0,
    closinghour: 23,
  },
  {
    id: 4,
    name: "shree medical",
    area: "sector 62",
    category: "Medical",
    openinghour: 0,
    closinghour: 23,
  },
  {
    id: 5,
    name: "Taj restaurant",
    area: "sector 62",
    category: "food",
    openinghour: 0,
    closinghour: 8,
  },
  {
    id: 6,
    name: "punjabi restaurant",
    area: "sector 62",
    category: "food",
    openinghour: 12,
    closinghour: 18,
  },
  {
    id: 7,
    name: "Starbucks s-18",
    area: "sector 18",
    category: "cafe",
    openinghour: 8,
    closinghour: 21,
  },
  {
    id: 8,
    name: "Cafe Coffee day s-18",
    area: "sector 18",
    category: "cafe",
    openinghour: 9,
    closinghour: 22,
  },
  {
    id: 9,
    name: "Chai sutta bar s-18",
    area: "sector 18",
    category: "cafe",
    openinghour: 10,
    closinghour: 23,
  },
  {
    id: 10,
    name: "salman medical ",
    area: "sector 18",
    category: "Medical",
    openinghour: 0,
    closinghour: 23,
  },
  {
    id: 11,
    name: "srk medical",
    area: "sector 18",
    category: "Medical",
    openinghour: 0,
    closinghour: 23,
  },
  {
    id: 12,
    name: "lala restaurant",
    area: "sector 18",
    category: "food",
    openinghour: 0,
    closinghour: 8,
  },
  {
    id: 13,
    name: "rajasthani restaurant",
    area: "sector 18",
    category: "food",
    openinghour: 12,
    closinghour: 18,
  },

  {
    id: 14,
    name: "Starbucks s-150",
    area: "sector 150",
    category: "cafe",
    openinghour: 8,
    closinghour: 21,
  },
  {
    id: 15,
    name: "Cafe Coffee day s-150",
    area: "sector 150",
    category: "cafe",
    openinghour: 9,
    closinghour: 22,
  },
  {
    id: 16,
    name: "Chai sutta bar s-150",
    area: "sector 150",
    category: "cafe",
    openinghour: 10,
    closinghour: 23,
  },
  {
    id: 17,
    name: "virat medical ",
    area: "sector 150",
    category: "Medical",
    openinghour: 0,
    closinghour: 23,
  },
  {
    id: 18,
    name: "dhoni medical",
    area: "sector 150",
    category: "Medical",
    openinghour: 0,
    closinghour: 23,
  },
  {
    id: 19,
    name: "tasty restaurant",
    area: "sector 150",
    category: "food",
    openinghour: 0,
    closinghour: 8,
  },
  {
    id: 20,
    name: "south indian restaurant",
    area: "sector 150",
    category: "food",
    openinghour: 12,
    closinghour: 18,
  },

];

export const ShopReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SHOP":
      state = [...state, action.payload];
      return state;

    case "DELETE_SHOP":
      const shopFilter = state.filter((shop) =>
        shop.id === action.payload ? null : shop
      );
      state = shopFilter;
      return state;

    case "UPDATE_SHOP":
      const shopUpdate = state.filter((shop) =>
        shop.id === action.payload.id
          ? Object.assign(shop, action.payload)
          : shop
      );
      state = shopUpdate;
      return state;
    default:
      return state;
  }
};
