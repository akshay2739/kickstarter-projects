import styled from "styled-components";
import { COLORS } from "../../theme";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  .input-wrapper {
    button {
      height: 30px;
      margin-left: 10px;
      cursor: pointer;
      border-radius: 5px;
      border: none;
      padding: 0 15px;
    }
  }
`;

interface PageNumberProps {
  active?: boolean;
}

export const PageNumber = styled.button<PageNumberProps>`
  margin: 5px;
  padding: 10px 15px;
  border: none;
  background-color: ${(props) =>
    props.active ? COLORS.PAGINATION_ACTIVE : COLORS.PAGINATION_INACTIVE};
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${COLORS.PAGINATION_HOVER};
  }

  &:disabled {
    background-color: ${COLORS.PAGINATION_DISABLED};
    cursor: not-allowed;
  }
`;

export const JumpInput = styled.input`
  margin-left: 10px;
  padding: 5px;
  width: 50px;
`;
