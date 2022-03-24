const rules = {
  user: {
    static: [
      "posts:list",
      "home-page:visit",
      //aggiunti per gestione admin/modifier/user
      "login:enter"
    ]
  },
  modifier: {
    static: [
      "posts:list",
      "posts:create",
      "users:getSelf",
      "home-page:visit",
      "dashboard-page:visit",
      //aggiunti per gestione admin/modifier/user
      "login:enter",
      "button:modify"
    ],
    dynamic: {
      "posts:edit": ({ userId, postOwnerId }) => {
        if (!userId || !postOwnerId) return false;
        return userId === postOwnerId;
      }
    }
  },
  ADMIN: {
    static: [
      "posts:list",
      "posts:create",
      "posts:edit",
      "posts:delete",
      "users:get",
      "users:getSelf",
      "home-page:visit",
      "dashboard-page:visit",
      //aggiunti per gestione admin/modifier/user
      "login:enter",
      "navbarlinks:view",
      "button:modify",
      "button:add",
      "button:delete",
      "sidebar:view"
    ]
  },
  USER:{
    static:[
      "login:enter"
    ]
  }
};

export default rules;
