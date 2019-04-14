<template>
  <nb-container :style="{backgroundColor: '#fff'}">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back"/>
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>My Mistake</nb-title>
      </nb-body>
      <nb-right/>
    </nb-header>

    <nb-content padder>
      <nb-card v-for="history in historyList" :key="history.id">
        <nb-card-item bordered>
          <nb-left>
            <nb-body>
              <nb-text>{{ history.title }}</nb-text>
              <nb-text>{{ history.phoneNumber }}</nb-text>
              <nb-text note>{{ history.regDateTime }}</nb-text>
            </nb-body>
          </nb-left>
        </nb-card-item>

        <nb-card-item>
          <nb-body>
            <nb-text>{{ history.description }}</nb-text>
          </nb-body>
        </nb-card-item>
      </nb-card>
    </nb-content>
  </nb-container>
</template>

<script>
import { Dimensions } from "react-native";
import logo from "../../../assets/logo.png";
import cardImage from "../../../assets/drawer-cover.png";

const deviceWidth = Dimensions.get("window").width;
export default {
  data: function() {
    return {
      logo,
      stylesObj: {
        cardItemImage: {
          resizeMode: "cover",
          width: deviceWidth / 1.18
        }
      },
      historyList: [
        {
          id: 1,
          name: "만리성",
          phoneNumber: "032-2222-2222",
          regDateTime: "2019-03-22",
          description: "탕슉 너무 안좋았음"
        },
        {
          id: 2,
          name: "자금성",
          phoneNumber: "032-2222-1222",
          regDateTime: "2019-03-21",
          description: "짜장면 너무 안좋았음"
        }
      ]
    };
  }
};
</script>


<style>
.mb-15 {
  margin-bottom: 15;
}
.card-item-image {
  align-self: center;
  height: 150;
  margin-vertical: 5;
}
</style>
