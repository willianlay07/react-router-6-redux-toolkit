import styled from "styled-components";

const InputStyled = styled.input`
  font-size: 15px;
  padding: 10px 10px;
  border-radius: 7px;
  border: 1px solid #ccc;
  outline: none;
`;

const Input = ({ type, user, setUser }) => {
  return (
    <InputStyled
      type={type}
      value={user}
      onChange={(e) => setUser(e.target.value)}
    />
  );
};

export default Input;
