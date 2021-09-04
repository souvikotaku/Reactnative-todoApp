import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export default function CompletedScreen(props) {
  const favTodos = useSelector((state) => state.favoriteTodos.favoriteTodos);

  if (favTodos.length === 0 || !favTodos) {
    return (
      <View style={styles.content}>
        <Text>No favorite meals found.</Text>
      </View>
    );
  }
  //   return (
  //     <View>
  //       <Text>completed screen</Text>
  //     </View>
  //   );

  const renderCompletedScreen = (itemData) => {
    return (
      <View style={styles.listItem}>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              color: "blue",
            }}
          >
            {itemData.item.task}
          </Text>
        </View>
      </View>
    );
  };

  return (
    // <MealList listData={favMeals} navigation={props.navigation} />
    <FlatList
      data={favTodos}
      keyExtractor={(item, index) => item.id} // Modern versions of RN automatically detect the key. Thus, keyExtractor is not needed!
      renderItem={renderCompletedScreen}
    />
  );
}

CompletedScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Completed Screen",
    //   headerLeft: () => (
    //     <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //       <Item
    //         title="Menu"
    //         iconName="ios-menu"
    //         onPress={() => {
    //           navData.navigation.toggleDrawer();
    //         }}
    //       />
    //     </HeaderButtons>
    //   ),
  };
};

styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  listItem: {
    padding: 20,
    backgroundColor: "white",
    flexDirection: "row",
    elevation: 12,
    borderRadius: 7,
    marginVertical: 10,
  },
});
