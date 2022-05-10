import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

export function Copyright() {
  return (
    <View>
      <Text style={styles.text}>Made with ❤️ by Gabriel Guinter Herter </Text>
    </View>
  );
}
