<template>
  <view class="container">
    <app-loading v-if="!isAppReady"></app-loading>
    <app v-if="isAppReady"></app>
  </view>
</template>


<script>
import { StackNavigator } from "vue-native-router";
import { VueNativeBase } from "native-base";
import { AppLoading } from "expo";
import App from "../App.vue";
import store from "../store";

Vue.use(VueNativeBase);
Vue.prototype.$store = store;

export default {
  components: { App, AppLoading },
  data: function() {
    return {
      isAppReady: false
    };
  },
  created: function() {
    store.dispatch("init");
    this.loadFonts();
  },
  methods: {
    loadFonts: async function() {
      try {
        this.isAppReady = false;
        console.log("load expo font start..");
        await Expo.Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
          Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        });
        console.log("load expo font end");
        this.isAppReady = true;
      } catch (error) {
        console.log("some error occured", error);
        this.isAppReady = true;
      }
    }
  }
};
</script>

<style>
.container {
  flex: 1;
}
</style>

