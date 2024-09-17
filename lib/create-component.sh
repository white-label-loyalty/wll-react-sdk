#!/bin/bash

# Set the base path for components
COMPONENTS_DIR="./components"

# Prompt for component name
read -p "Enter the component name: " COMPONENT_NAME

# Function to display menu
display_menu() {
    echo "Select the folder for the component:"
    echo "1) atoms"
    echo "2) molecules"
    echo "3) organisms"
    echo "4) particles"
    echo "5) templates"
    read -p "Enter your choice (1-5): " choice
}

# Display menu and get user choice
display_menu
while [[ ! $choice =~ ^[1-5]$ ]]; do
    echo "Invalid choice. Please try again."
    display_menu
done

# Set folder name based on choice
case $choice in
    1) FOLDER_NAME="atoms" ;;
    2) FOLDER_NAME="molecules" ;;
    3) FOLDER_NAME="organisms" ;;
    4) FOLDER_NAME="particles" ;;
    5) FOLDER_NAME="templates" ;;
esac

# Create component directory
COMPONENT_DIR="$COMPONENTS_DIR/$FOLDER_NAME/$COMPONENT_NAME"
mkdir -p $COMPONENT_DIR

# Create component file
cat << EOF > "$COMPONENT_DIR/index.tsx"
import * as React from 'react';
import { View } from 'react-native';

type ${COMPONENT_NAME}Props = {
  // Define your props here
}

const ${COMPONENT_NAME}: React.FC<${COMPONENT_NAME}Props> = () => {
  return (
    <View>
      {/* Your component code here */}
    </View>
  );
};

export default ${COMPONENT_NAME};
EOF

# Create story file
cat << EOF > "$COMPONENT_DIR/${COMPONENT_NAME}.stories.tsx"
import * as React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ${COMPONENT_NAME} from './index';

export default {
  title: 'components/${FOLDER_NAME}/${COMPONENT_NAME}',
  component: ${COMPONENT_NAME},
} as Meta;

const Template: StoryFn<typeof ${COMPONENT_NAME}> = (args) => <${COMPONENT_NAME} {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};
EOF

# Update index file in the specific component type folder
INDEX_FILE="$COMPONENTS_DIR/$FOLDER_NAME/index.ts"
mkdir -p "$(dirname "$INDEX_FILE")"
touch "$INDEX_FILE"

# Function to add new component to index file
update_index_file() {
    # Read existing content
    content=$(cat "$INDEX_FILE")

    # Remove duplicate imports and exports
    content=$(echo "$content" | awk '!seen[$0]++')

    # Add new import if it doesn't exist
    if ! echo "$content" | grep -q "import $COMPONENT_NAME from './$COMPONENT_NAME';" ; then
        content=$(echo "$content"; echo "import $COMPONENT_NAME from './$COMPONENT_NAME';")
    fi

    # Update export line
    export_line=$(echo "$content" | grep "^export {")
    if [ -n "$export_line" ]; then
        # If export line exists, add new component if it's not already there
        if ! echo "$export_line" | grep -q "$COMPONENT_NAME"; then
            new_export_line=$(echo "$export_line" | sed "s/};/, $COMPONENT_NAME};/")
            content=$(echo "$content" | sed "s|$export_line|$new_export_line|")
        fi
    else
        # If no export line, add it
        content=$(echo "$content"; echo "export { $COMPONENT_NAME };")
    fi

    # Write updated content back to file
    echo "$content" | sed '/^$/N;/^\n$/D' > "$INDEX_FILE"
}

update_index_file

echo "${COMPONENT_NAME} component created successfully in components/${FOLDER_NAME} folder!"