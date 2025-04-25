import { View, Text } from "react-native";

/** @type{import("@storybook/react").Preview} */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    (Story, { parameters }) => {
      // Debug component to help identify story loading issues
      try {
        return (
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
        );
      } catch (error) {
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
