import { Dimensions, StyleSheet, View } from "react-native";
import Colors from "../../constans/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, //android için shodaw efekti
    shadowColor: "black", //IOS için shadow efekti
    shadowOffset: { width: 0, height: 2 }, //IOS için shadow efekti
    shadowOpacity: 6, //IOS için shadow efekti
    shadowRadius: 0.25, //IOS için shadow efekti
  },
});
