const initialState = {
  categoryData: [
    {
      id: 1,
      name: "Vegetables",
      url: "https://images.unsplash.com/photo-1486328228599-85db4443971f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000",
      meals: [
        {
          id: 1.1,
          name: "Garlic Cauliflower",
          isFavorites: false,
          rootId: 1,
          url: "https://images.unsplash.com/photo-1611745451987-bd5df5565d9e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FybGljJTIwY2F1bGlmbG93ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=900",
        },
        {
          id: 1.2,
          name: "Green Beans",
          isFavorites: false,
          rootId: 1,
          url: "https://images.unsplash.com/photo-1600271801401-65fe5f623a9a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGdyZWVuJTIwYmVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=900",
        },
        {
          id: 1.3,
          name: "Tofu Salad",
          isFavorites: false,
          rootId: 1,
          url: "https://images.unsplash.com/photo-1546069901-eacef0df6022?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG9mdSUyMHNhbGFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900",
        },
        {
          id: 1.4,
          name: "Mushrooms and Potatoes",
          isFavorites: false,
          rootId: 1,
          url: "https://images.unsplash.com/photo-1594973339153-51fb5e6a1727?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaHJvb21zJTIwYW5kJTIwcG90YXRvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=900",
        },
        {
          id: 1.5,
          name: "Guacamole",
          isFavorites: false,
          rootId: 1,
          url: "https://images.unsplash.com/photo-1595016111459-799a195e7452?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740",
        },
      ],
    },
    {
      id: 2,
      name: "Fruits",
      url: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
      meals: [
        {
          id: 2.1,
          name: "Banana Pudding",
          isFavorites: false,
          rootId: 2,
          url: "https://images.unsplash.com/photo-1610406765661-57646c40da59?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJhbmFuYSUyMHB1ZGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=900",
        },
        {
          id: 2.2,
          name: "Lemon Pudding",
          isFavorites: false,
          rootId: 2,
          url: "https://images.unsplash.com/photo-1543508834-51a9bcc28a88?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740",
        },
        {
          id: 2.3,
          name: "Strawberry Desserts",
          isFavorites: false,
          rootId: 2,
          url: "https://images.unsplash.com/photo-1503485838016-53579610c389?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3RyYXdiZXJyeSUyMGRlc3NlcnRzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900",
        },
        {
          id: 2.4,
          name: "Mango Salad",
          isFavorites: false,
          rootId: 2,
          url: "https://images.unsplash.com/photo-1555990206-5264326d3c1c?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFuZ28lMjBzYWxhZHxlbnwwfDB8MHx8&auto=format&fit=crop&w=900",
        },
        {
          id: 2.5,
          name: "Apple Crumble",
          isFavorites: false,
          rootId: 2,
          url: "https://images.unsplash.com/photo-1605698802040-b783f33b49a5?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740",
        },
      ],
    },
    {
      id: 3,
      name: "Meat",
      url: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVhdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=900",
      meals: [
        {
          id: 3.1,
          name: "Taco Meat",
          isFavorites: false,
          rootId: 3,
          url: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742",
        },
        {
          id: 3.2,
          name: "Meat Lasagna",
          isFavorites: false,
          rootId: 3,
          url: "https://images.unsplash.com/photo-1621510456681-2330135e5871?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVhdCUyMGxhc2FnbmF8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=900",
        },
        {
          id: 3.3,
          name: "Natchitoches Meat Pies",
          isFavorites: false,
          rootId: 3,
          url: "https://images.unsplash.com/photo-1584214853230-534e73232b43?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1638",
        },
      ],
    },
    {
      id: 4,
      name: "Dairy",
      url: "https://images.unsplash.com/photo-1613997141401-f36f285bcfa4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1pbGt8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=900",
      meals: [
        {
          id: 4.1,
          name: "Easter Cupcakes",
          isFavorites: false,
          rootId: 4,
          url: "https://images.unsplash.com/photo-1486428128344-5413e434ad35?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740",
        },
        {
          id: 4.2,
          name: "Easter Tea-Cake",
          isFavorites: false,
          rootId: 4,
          url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FrZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=900",
        },
        {
          id: 4.3,
          name: "Perfect Pavlova",
          isFavorites: false,
          rootId: 4,
          url: "https://images.unsplash.com/photo-1509594430428-2f93bbc9fef6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1319",
        },
        {
          id: 4.4,
          name: "Ricotta Bliss Balls",
          isFavorites: false,
          rootId: 4,
          url: "https://images.unsplash.com/photo-1559598467-f8b76c8155d0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWlsa3xlbnwwfDB8MHx8&auto=format&fit=crop&w=900",
        },
        {
          id: 4.5,
          name: "Bechamel Sauce",
          isFavorites: false,
          rootId: 4,
          url: "https://images.unsplash.com/photo-1604328471151-b52226907017?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNhdWNlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900",
        },
      ],
    },
    {
      id: 5,
      name: "Grains",
      url: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JhaW5zfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900",
      meals: [
        {
          id: 5.1,
          name: "Blueberry Muffins",
          isFavorites: false,
          rootId: 5,
          url: "https://images.unsplash.com/photo-1613119720614-61ad05237b9c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZWJlcnJ5JTIwbXVmZmluc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=900",
        },
        {
          id: 5.2,
          name: "Rice Pancakes",
          isFavorites: false,
          rootId: 5,
          url: "https://images.unsplash.com/photo-1564836235910-c3055ca0f912?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740",
        },
        {
          id: 5.3,
          name: "Bulgur Dish",
          isFavorites: false,
          rootId: 5,
          url: "https://images.unsplash.com/photo-1542528180-1c2803fa048c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVsZ3VyJTIwZGlzaHxlbnwwfDB8MHx8&auto=format&fit=crop&w=900",
        },
        {
          id: 5.4,
          name: "Whole Grain Bread",
          isFavorites: false,
          rootId: 5,
          url: "https://images.unsplash.com/photo-1606101273945-e9eba91c0dc4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hvbGUlMjBncmFpbiUyMGJyZWFkfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900",
        },
        {
          id: 5.5,
          name: "Mint and Pine Nuts",
          isFavorites: false,
          rootId: 5,
          url: "https://images.unsplash.com/photo-1505714197102-6ae95091ed70?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGluZSUyMG51dHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=900",
        },
      ],
    },
    {
      id: 6,
      name: "Baked Goods",
      url: "https://images.unsplash.com/photo-1502049584619-41d8c7a732f3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFrZWQlMjBnb29kfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900",
      meals: [
        {
          id: 6.1,
          name: "Cheese Pizza",
          isFavorites: false,
          rootId: 6,
          url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZXNlJTIwcGl6emF8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=900",
        },
        {
          id: 6.2,
          name: "Chicken pasta bake",
          isFavorites: false,
          rootId: 6,
          url: "https://images.unsplash.com/photo-1465911817134-741b5e473a1b?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpY2tlbiUyMHBhc3RhJTIwYmFrZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=900",
        },
        {
          id: 6.3,
          name: "Creamy pasta bake",
          isFavorites: false,
          rootId: 6,
          url: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588",
        },
        {
          id: 6.4,
          name: "Chicken tray bake",
          isFavorites: false,
          rootId: 6,
          url: "https://images.unsplash.com/photo-1514518189759-94d8ee01ecf1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740",
        },
        {
          id: 6.5,
          name: "Salmon pasta",
          isFavorites: false,
          rootId: 6,
          url: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588",
        },
      ],
    },
    {
      id: 7,
      name: "Seafood",
      url: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2VhZm9vZHxlbnwwfDB8MHx8&auto=format&fit=crop&w=900",
      meals: [
        {
          id: 7.1,
          name: "Garlicky Shrimp Scampi",
          isFavorites: false,
          rootId: 7,
          url: "https://images.unsplash.com/photo-1535400255456-984241443b29?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FybGlja3klMjBzaHJpbXAlMjBzY2FtcGl8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=900",
        },
        {
          id: 7.2,
          name: "Grilled Fish Steaks",
          isFavorites: false,
          rootId: 7,
          url: "https://images.unsplash.com/photo-1598511757337-fe2cafc31ba0?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JpbGxlZCUyMGZpc2glMjBzdGVha3N8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=900",
        },
        {
          id: 7.3,
          name: "Sesame-Seared Tuna",
          isFavorites: false,
          rootId: 7,
          url: "https://images.unsplash.com/photo-1501595091296-3aa970afb3ff?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHVuYXxlbnwwfDB8MHx8&auto=format&fit=crop&w=900",
        },
        {
          id: 7.4,
          name: "Easy Bake Fish",
          isFavorites: false,
          rootId: 7,
          url: "https://images.unsplash.com/photo-1533745807-618e4bd071f2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548",
        },
        {
          id: 7.5,
          name: "Catfish Po Boy",
          isFavorites: false,
          rootId: 7,
          url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhdGZpc2glMjBmb29kfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900",
        },
      ],
    },
    {
      id: 8,
      name: "Herbs and Spices",
      url: "https://images.unsplash.com/photo-1584436138007-b81df76616b5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGVyYnMlMjBhbmQlMjBzcGljZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=900",
      meals: [
        {
          id: 8.1,
          isFavorites: false,
          rootId: 8,
          name: "Spiced Indian Rusks",
          url: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwZm9vZHxlbnwwfDB8MHx8&auto=format&fit=crop&w=900",
        },
        {
          id: 8.2,
          isFavorites: false,
          rootId: 8,
          name: "Caprese Sandwich ",
          url: "https://images.unsplash.com/photo-1528736235302-52922df5c122?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2FuZHdpY2h8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=900",
        },
      ],
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_CATEGORY_DATA": {
      let data = state.categoryData;
      let objIndex = data.findIndex(
        (obj) => obj.id == action.payload.categoryId
      );
      let mealsIndex = data[objIndex].meals.findIndex(
        (obj) => obj.id == action.payload.mealId
      );
      data[objIndex].meals[mealsIndex].isFavorites = action.payload.isFavorites;
      return {
        ...state,
        categoryData: data,
      };
    }
    default: {
      return { ...state };
    }
  }
};
