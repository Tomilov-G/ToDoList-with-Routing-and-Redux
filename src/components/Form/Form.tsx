import { useState, FormEvent} from "react";
import { FormButton, FormBlock, FormInput, FormLabel, FormWrapper } from "./Form.styled";

import plusIcon from '../../assets/images/plus.png'

export const Form = (props: { createNewToDo: Function }) => {
  const [text, setText] = useState<string>("");

  const formSumbit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (text) {
        props.createNewToDo(text)
        setText('')
    }
  }
  return (
    <FormWrapper>
      <FormBlock action="#" onSubmit={formSumbit} >
        <FormLabel>
          <FormInput
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <FormButton $icon={plusIcon} />
        </FormLabel>
      </FormBlock>
    </FormWrapper>
  );
};
