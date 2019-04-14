 <template>
  <root>
    <app-navigation></app-navigation>
  </root>
</template>


<script>
import React from "react";
import { StackNavigator, DrawerNavigator } from "vue-native-router";
import { Root } from "native-base";
import HomeScreen from "./screens/home/Index.vue";
import SideBarScreen from "./screens/sidebar/Index.vue";

import CardScreen from "./screens/card";
import BasicCardScreen from "./screens/card/basicCard";
import CardHeaderAndFooterScreen from "./screens/card/cardHeaderAndFooter";
import CardImageScreen from "./screens/card/cardImage";
import CardListScreen from "./screens/card/cardList";
import CardShowcaseScreen from "./screens/card/cardShowcase";
import CardTransparentScreen from "./screens/card/cardTransparent";
import CardBorderedScreen from "./screens/card/cardBordered";
import CardItemButtonScreen from "./screens/card/carItemButton";

import ListScreen from "./screens/list";
import BasicListScreen from "./screens/list/basicList";
import ListAvatarScreen from "./screens/list/avatarList";
import ListDividerScreen from "./screens/list/dividerList";
import ListHeaderScreen from "./screens/list/headerList";
import ListIconScreen from "./screens/list/iconList";
import ListSeparatorScreen from "./screens/list/separatorList";
import ListThumbnailScreen from "./screens/list/thumbnailList";
import ListItemSelectedScreen from "./screens/list/selectedListItem";

import ListSwipeScreen from "./screens/listSwipe";
import BasicListSwipeScreen from "./screens/listSwipe/basicListSwipe";
import MultiListSwipeScreen from "./screens/listSwipe/multiListSwiper";
import CustomRowListSwipeScreen from "./screens/listSwipe/customRowListSwiper";

const Drawer = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    NHList: { screen: ListScreen },
    NHCard: { screen: CardScreen },
    ListSwipe: { screen: ListSwipeScreen }
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => {
      // console.log("props inside contentComponent", props);
      return <SideBarScreen {...props} />;
    }
  }
);

const AppNavigation = StackNavigator(
  {
    Drawer: { screen: Drawer },

    NHBasicList: { screen: BasicListScreen },
    NHListAvatar: { screen: ListAvatarScreen },
    NHListDivider: { screen: ListDividerScreen },
    NHListHeader: { screen: ListHeaderScreen },
    NHListIcon: { screen: ListIconScreen },
    NHListSeparator: { screen: ListSeparatorScreen },
    NHListThumbnail: { screen: ListThumbnailScreen },
    NHListItemSelected: { screen: ListItemSelectedScreen },

    BasicListSwipe: { screen: BasicListSwipeScreen },
    MultiListSwipe: { screen: MultiListSwipeScreen },
    SwipeRowCustomStyle: { screen: CustomRowListSwipeScreen },

    BasicCard: { screen: BasicCardScreen },
    NHCardHeaderAndFooter: { screen: CardHeaderAndFooterScreen },
    NHCardImage: { screen: CardImageScreen },
    NHCardList: { screen: CardListScreen },
    NHCardShowcase: { screen: CardShowcaseScreen },
    NHCardTransparent: { screen: CardTransparentScreen },
    NHCardItemBordered: { screen: CardBorderedScreen },
    NHCardItemButton: { screen: CardItemButtonScreen }
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);
export default {
  components: { Root, AppNavigation }
};
</script> 

