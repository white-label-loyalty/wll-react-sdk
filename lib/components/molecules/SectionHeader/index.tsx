import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "../../atoms";

type SectionHeaderProps = {
  title?: string;
  description?: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <View style={styles.sectionHeader}>
      {title || description ? (
        <>
          {title && (
            <Text variant="title" style={styles.sectionTitle}>
              {title}
            </Text>
          )}
          {description && (
            <Text variant="body" style={styles.sectionDescription}>
              {description}
            </Text>
          )}
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 16,
    color: "#666",
  },
});

export default SectionHeader;
