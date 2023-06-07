import styled from 'styled-components';

export const ListFieldWrapper = styled.div`
    padding: 20px;
    position:relative;
    margin-bottom: 100px;
    
    @media all and (max-width: 992px){
        padding: 0 10px;
    }
    
    .list-box{
        position:relative;
        height: 500px;
        overflow: auto;
        border: 1px solid #e0e0e0;
        border-radius: 15px;
        background: #fff;
        box-shadow: var(--defaultBoxShadow);

        @media only screen and (max-width:768px){
            font-size: 10px;
        }
    }
`;