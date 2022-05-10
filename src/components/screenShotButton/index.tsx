import React from "react";
import { View, TouchableOpacity, Image } from "react-native";

import { styles } from "./styles";
import { Trash } from "phosphor-react-native";

interface Props {
  screenshot: string | null;
  onTakeShot: () => void;
  onRemoveShot: () => void;
}

export function name({ screenshot, onRemoveShot, onTakeShot }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={screenshot ? onRemoveShot : onTakeShot}
    >
      {screenshot ? <Trash size={22} /> : <></>}
    </TouchableOpacity>
  );
}
