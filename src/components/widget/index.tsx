import React, { useRef } from "react";
import { TouchableOpacity } from "react-native";
import { ChatTeardropDots } from "phosphor-react-native";
import { styles } from "./styles";
import { theme } from "../../theme";
import BottomSheet from "@gorhom/bottom-sheet";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

function Widget() {
  const bottomsheetRef = useRef<BottomSheet>(null);
  function handleOpen() {
    bottomsheetRef.current?.expand();
  }

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots
          size={24}
          color={theme.colors.text_on_brand_color}
          weight="bold"
        />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomsheetRef}
        snapPoints={[1, 280]}
        children={() => {}}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      />
    </>
  );
}
export default gestureHandlerRootHOC(Widget);
