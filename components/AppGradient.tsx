import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import React from "react";
import { SafeAreaView } from "react-native";

const AppGradient = ({
  children,
  colors,
}: {
  children: React.ReactNode;
  colors: LinearGradientProps["colors"];
}) => {
  return (
    <LinearGradient className="flex-1" colors={colors}>
      <SafeAreaView className="flex-1 px-5 py-3">{children}</SafeAreaView>
    </LinearGradient>
  );
};

export default AppGradient;
