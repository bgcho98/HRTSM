const Sqlite = require("nativescript-sqlite");

const state = {
  database: null,
  data: []
};

const mutations = {
  init(state, data) {
    state.database = data.database;
  },
  load(state, data) {
    state.data = [];
    for (var i = 0; i < data.data.length; i++) {
      state.data.push({
        id: data.data[i][0],
        title: data.data[i][1],
        phoneNumber: data.data[i][2],
        description: data.data[i][3],
        regDateTime: data.data[i][4]
      });
    }
  },
  save(state, data) {
    let post = data.data;
    state.data.push(post);
  }
};

const actions = {
  init(context) {
    new Sqlite("my.db").then(
      db => {
        db.execSQL(
          "CREATE TABLE IF NOT EXISTS post (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, phone_number TEXT, description TEXT, reg_datetime TEXT)"
        ).then(
          id => {
            context.commit("init", { database: db });
          },
          error => {
            console.log("CREATE TABLE ERROR", error);
          }
        );
      },
      error => {
        console.log("OPEN DB ERROR", error);
      }
    );
  },
  insert(context, data) {
    context.state.database
      .execSQL(
        "INSERT INTO post (title, phone_number, description, reg_datetime) VALUES (?, ?, ?, ?)",
        [data.title, data.phoneNumber, data, description, data.regDateTime]
      )
      .then(
        id => {
          context.commit("save", { data: Object.assign({ id: id }, data) });
        },
        error => {
          console.log("INSERT ERROR", error);
        }
      );
  },
  query(context) {
    context.state.database
      .all(
        "SELECT id, title, phone_number, description, reg_datetime FROM post",
        []
      )
      .then(
        result => {
          context.commit("load", { data: result });
        },
        error => {
          console.log("SELECT ERROR", error);
        }
      );
  }
};

export const postStore = {
  state,
  getters,
  mutations,
  actions
};

export default postStore;
