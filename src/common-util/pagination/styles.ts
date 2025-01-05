import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

interface PageNumberProps {
  active: boolean;
}

export const PageNumber = styled.button<PageNumberProps>`
  margin: 5px;
  padding: 10px 15px;
  border: none;
  background-color: ${(props) => (props.active ? "#6200ea" : "#e0e0e0")};
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3700b3;
  }

  &:disabled {
    background-color: #bdbdbd;
    cursor: not-allowed;
  }
`;

export const JumpInput = styled.input`
  margin-left: 10px;
  padding: 5px;
  width: 50px;
`;
