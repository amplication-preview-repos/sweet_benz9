import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ModelTitle } from "../model/ModelTitle";

export const TokenizationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="accessToken" source="accessToken" />
        <ReferenceInput source="model.id" reference="Model" label="Model">
          <SelectInput optionText={ModelTitle} />
        </ReferenceInput>
        <TextInput label="tokenizationName" source="tokenizationName" />
        <TextInput label="tokenizationType" source="tokenizationType" />
      </SimpleForm>
    </Edit>
  );
};
