import { Text } from "@/components/atoms";
import React from "react";
import { StyleSheet, View } from "react-native";

type SectionHeaderProps = {
  title?: string;
  description?: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <>
      {title || description ? (
        <View style={styles.sectionHeader}>
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
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    marginBottom: 20,
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
