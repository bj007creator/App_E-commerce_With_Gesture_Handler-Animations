import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

import { StyleSheet, Animated } from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export const Container = styled.TouchableWithoutFeedback `
    flex : 1;
    background : ${props => props.theme.colors.background};
`;
export const ContentContainer = styled.View `
    height : ${ Math.floor(height) }px;
    width : ${ Math.floor(width) }px;
    display : flex;
    flex-direction : column;
    align-items : center;
    position : relative;
    background : ${props => props.theme.colors.background};
`;
export const SignUpContainer = styled(Animated.View) `
    height : 300px;
    width : 97%;
    margin-top : 30px;
    margin-bottom : 5px;
    display : flex;
    flex-direction : column;
    justify-content : center;
    border-top-width : ${StyleSheet.hairlineWidth}px;
    border-bottom-width : ${StyleSheet.hairlineWidth}px;
    border-color : ${props => props.theme.colors.labelButton};
    background : ${props => props.theme.colors.secundary};
`;

export const SelectProfilePictureContainer = styled.View `
    width : 300px;
    height : 200px;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`;

export const SelectProfilePictureTouchable = styled.TouchableWithoutFeedback `
    display : flex;
    width : 50px;
    height : 50px;
    display : flex;
    align-items : center;
    justify-content : center;
`;

export const SelectedProfilePicturePreview = styled.Image `
    height : 125px;
    width : 125px;
    margin : 0 auto;
    margin : 5px;
    border-radius : 10px;
`;
export const UploadLabel = styled.Text `
    font-size : 17px;
    font-family : 'Nunito_900Black_Italic';
    color : ${props => props.theme.colors.text};
`;

export const Loading = styled.ActivityIndicator.attrs({
    size : 'small',
    color : '#999'
}) `
    margin : 30px 0;
`;

