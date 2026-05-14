import React from "react";
import { View, Text } from "react-native";
import { Preview } from "@storybook/react";
import { WllSdkProvider, SDKConfig, CoreApiUrl } from "../../lib/context/WllSdkContext";

const sdkConfig: SDKConfig = {
  apiKey: "test-api-key",
  coreApiUrl: CoreApiUrl.STAGING_EU,
};

// Cast to work around React 18/19 type mismatch between native and lib packages
const Provider = WllSdkProvider as any;

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
      try {
        return (
          <Provider config={sdkConfig}>
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
          </Provider>
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
