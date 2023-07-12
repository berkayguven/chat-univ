import styled from "styled-components";
import SmallButton from "../SmallButton";

const CreateChat = () => {
  return (
    <Container>
      <InputBox placeholder="채팅방 이름을 입력해주세요."></InputBox>
      <SmallButton type="chatting" text="채팅방 만들기" />
    </Container>
  );
};

export default CreateChat;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 405px;
  height: 182px;
  background-color: ${({ theme }) => theme.colors.PURPLE100};
  border-radius: 20px;
`;
const InputBox = styled.input`
  width: 375px;
  height: 41px;
  border-radius: 20px;
  border: none;
  font-size: 16px;
  padding: 10px;
  color: ${({ theme }) => theme.colors.PURPLE50};
  &::placeholder {
    color: ${({ theme }) => theme.colors.PURPLE50};
    font-size: 16px;
  }
`;
