import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 6.6rem;
  color: #282828;
  background-color: #fff;
  border-color: #e8e8e8;
  border-bottom: 0.1rem solid #dcdedd;
  display: flex;
  align-items: center;
`;

export const LinkContainer = styled.div`
  margin-left: 300px;
  flex: 1;
  display: flex;
  height: 100%;

  justify-content: ${(props) => (props.leftAlign ? 'flex-start' : 'flex-end')};
`;

export const Link = styled.p`
  margin-right: 1.8rem;
  margin-left: 1.8rem;
  cursor: pointer;
  font-size: 1.5rem;
  line-height: 2.8rem;
  font-weight: 600;
  border-bottom: ${(props) =>
    props.selected === props.children ? '3px solid #282828;' : 'none'};
  padding: 20px 5px;
  &:hover {
    color: #037362;
  }
`;

export const PrettyLink = styled.p`
  margin: 0 20px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    color: #037362;
  }
`;

export const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
