import AppGradient from "@/components/AppGradient";
import GuidedAffirmationsGallery from "@/components/GuidedAffirmationsGallery";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";
import React from "react";
import { FlatList, Text, View } from "react-native";

const Affirmations = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
        <FlatList
          data={AFFIRMATION_GALLERY}
          keyExtractor={(item) => item.title}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <GuidedAffirmationsGallery
              title={item.title}
              previews={item.data}
            />
          )}
          ListHeaderComponent={
            <Text className="text-zinc-50 text-3xl font-bold mb-4">
              Change your beliefs with affirmations
            </Text>
          }
        />
      </AppGradient>
    </View>
  );
};

export default Affirmations;
