import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TokenizationTitle } from "../tokenization/TokenizationTitle";

export const ModelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
