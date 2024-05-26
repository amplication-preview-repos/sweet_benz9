import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TokenizationTitle } from "../tokenization/TokenizationTitle";

export const ModelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="accessToken" source="accessToken" />
        <TextInput label="modelName" source="modelName" />
        <TextInput label="modelPath" source="modelPath" />
        <TextInput label="modelType" source="modelType" />
        <ReferenceArrayInput
          source="tokenizations"
          reference="Tokenization"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TokenizationTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
