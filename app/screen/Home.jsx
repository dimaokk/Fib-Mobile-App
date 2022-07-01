import { View, Text } from "react-native";
import { Button } from "@rneui/base";
import { StyleSheet } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Привет!!! давай расчитаем числа фибоначи</Text>
      <Button
        onPress={() => navigation.navigate("Computed")}
        title={"Давай расчитаем"}
        color={"#378ff6"}
        size="md"
        radius={12}
        fontSize={20}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eff3f7",
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 30,
  },
});
