import React from "react";
import { View, Text } from "react-native";
import { Preview } from "@storybook/react";
import { WllSdkProvider } from "../../lib/context/WllSdkContext";

const sdkConfig = {
  apiKey: "test-api-key",
  baseUrl: "http://localhost:3000",
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    (Story: React.FC, { parameters }: { parameters: any }) => {
      // Debug component to help identify story loading issues
      try {
        return (
          <WllSdkProvider config={sdkConfig}>

          <View
            style={{
              flex: 1,
              backgroundColor:
              parameters.noBackground === true ? undefined : "#f5f5f5",
                padding: 8,
            }}
            >
            <Story />
          </View>
            </WllSdkProvider>
        );
      } catch (error: any) {
        // Show error fallback if story fails to render
        return (
          <View
            style={{
              flex: 1,
              backgroundColor: "#ffeeee",
              padding: 16,
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "red", fontWeight: "bold", marginBottom: 10 }}>
              Error rendering story:
            </Text>
            <Text style={{ color: "red" }}>{error.message}</Text>
          </View>
        );
      }
    },
  ],
};

export default preview;
