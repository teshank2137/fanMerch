import styled from "styled-components";

const StyledSignup = styled.div`
  height: 100vh;
  padding-top: 5rem;
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin: 1rem;
    text-align: center;
  }
  .signup-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80%;
    .signup-input {
      margin: 1rem;
    }
    .btn-group {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0.5rem;
    }
  }
`;

export default StyledSignup;