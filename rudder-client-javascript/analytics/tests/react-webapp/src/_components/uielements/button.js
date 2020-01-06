import styled from 'styled-components';
import { Button,Input } from '@material-ui/core/';

const LoginInput = styled(Input)`
    input{
        text-align: left;
        font-family:verdana;
    } 
`;
const LoginButton = styled(Button)`
    &&.MuiButton-containedPrimary-24{
      background-color: #2aa20c;
    }
    } 
`;
export {LoginButton,LoginInput};