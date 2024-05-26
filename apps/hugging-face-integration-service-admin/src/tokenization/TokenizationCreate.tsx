import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ModelTitle } from "../model/ModelTitle";

export const TokenizationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="accessToken" source="accessToken" />
        <ReferenceInput source="model.id" reference="Model" label="Model">
          <SelectInput optionText={ModelTitle} />
        </ReferenceInput>
        <TextInput label="tokenizationName" source="tokenizationName" />
        <TextInput label="tokenizationType" source="tokenizationType" />
      </SimpleForm>
    </Create>
  );
};
