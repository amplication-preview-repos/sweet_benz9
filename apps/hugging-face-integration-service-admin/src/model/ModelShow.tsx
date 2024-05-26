import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { MODEL_TITLE_FIELD } from "./ModelTitle";

export const ModelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="accessToken" source="accessToken" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="modelName" source="modelName" />
        <TextField label="modelPath" source="modelPath" />
        <TextField label="modelType" source="modelType" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Tokenization"
          target="modelId"
          label="Tokenizations"
        >
          <Datagrid rowClick="show">
            <TextField label="accessToken" source="accessToken" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Model" source="model.id" reference="Model">
              <TextField source={MODEL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="tokenizationName" source="tokenizationName" />
            <TextField label="tokenizationType" source="tokenizationType" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
