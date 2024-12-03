import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, SafeAreaView, Text, View } from "react-native";
import AppGradient from "../components/AppGradient";
import CustomButton from "../components/CustomButton";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 ">
      <ImageBackground
        source={require("../assets/images/beach.webp")}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
          <SafeAreaView className="flex-1 px-1 justify-between mt-12">
            <View>
              <Text className="text-center text-white font-bold text-4xl">
                Simple Meditation
              </Text>
              <Text className="text-center text-white text-regular text-2xl mt-3">
                Simplifying Meditation for Everyone
              </Text>
            </View>
            <View>
              <CustomButton
                onPress={() => router.push("/nature-meditate")}
                title="Get Started"
              />
            </View>
            <StatusBar style="light"></StatusBar>
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
}
