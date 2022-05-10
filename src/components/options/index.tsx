import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";
import { Copyright } from "../copyright";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { Option } from "../option";

export function Options() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send your feedback</Text>

      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <Option key={key} title={value.title} image={value.image} />
        ))}
      </View>

      <Copyright />
    </View>
  );
}
