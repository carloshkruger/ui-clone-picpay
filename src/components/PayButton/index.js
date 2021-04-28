import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native";

import { Button, Label } from "./styles";

export default function PayButton({ onPress, focused }) {
  const gradientColors = focused ? ["#fff", "#ccc"] : ["#00f66c", "#00ac4a"];
  const iconColor = focused ? "#000" : "#fff";

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Button colors={gradientColors} start={[1, 0.2]}>
        <MaterialIcons name="attach-money" size={30} color={iconColor} />
        <Label focused={focused}>Pagar</Label>
      </Button>
    </TouchableWithoutFeedback>
  );
}
