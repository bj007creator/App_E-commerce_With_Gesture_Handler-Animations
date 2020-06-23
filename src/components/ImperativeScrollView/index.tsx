import React, {
    useRef,
    useImperativeHandle,
    forwardRef,
    ForwardRefRenderFunction,
    PropsWithChildren,
    useEffect,
    useState,
    RefObject
} from "react";
import { ScrollView, ScrollViewProps, Dimensions } from "react-native";

import {
    MenuContent,
    Menu,
    MenuItem,
    MenuItemContainer,
    MenuItemContent,
    MenuItemTitle,
    AnimationBar
} from './style';

import { Animated } from 'react-native';

export interface ImperativeScrollViewHandles {
    scrollToStart(options?: { animated: boolean }): void;
    scrollToEnd(options?: { animated: boolean }): void;
    scrollTo(options: { x?: number; y?: number; animated?: boolean }): void;
}

interface ImperativeScrollProps {
    positionX : number;
    setPositionX(positionX : number) : void;
    carousel : RefObject<ImperativeScrollViewHandles>;
}

const DEVICE_WIDTH = Dimensions.get('window').width;

const ImperativeScrollView: ForwardRefRenderFunction<
    ImperativeScrollViewHandles,
    ImperativeScrollProps
> = ({ setPositionX, positionX, carousel }, ref) => {
    const scrollViewRef = useRef<ScrollView>(null);
    const translateXAnim = useRef(new Animated.Value(0)).current

    useEffect( () => {
        Animated.timing(
            translateXAnim,
            {
                toValue: positionX,
                duration: 500,
            }
        ).start();
    }, [positionX] );

    useImperativeHandle(ref, () => ({
        scrollToStart: options => {
            if (scrollViewRef.current) {
                scrollViewRef.current.scrollTo({
                    x: 0,
                    y: 0,
                    animated: options ? options.animated : true,
                });
            }
        },
        scrollToEnd: options => {
            if (scrollViewRef.current) {
                scrollViewRef.current.scrollToEnd(options);
            }
        },
        scrollTo: options => {
            if (scrollViewRef.current) {
                scrollViewRef.current.scrollTo(options);
            }
        },
    }));

    

    return (
        <Menu 
            ref={scrollViewRef} 
            horizontal 
            showsHorizontalScrollIndicator={false} 
        >
            <MenuContent>
                <MenuItem>
                    <MenuItemContainer
                        onPress={ () => { 
                            setPositionX(0);
                            
                            setTimeout( () => {
                                if(carousel.current){
                                    carousel.current.scrollTo({x : DEVICE_WIDTH * 0, animated : true});
                                }
                            }, 500 );
                        } } 
                        rippleColor="transparent"
                    >
                        <MenuItemContent>
                            <MenuItemTitle>
                                1º
                            </MenuItemTitle>
                        </MenuItemContent>
                    </MenuItemContainer>
                </MenuItem>

                <MenuItem>
                    <MenuItemContainer 
                        onPress={ () => {
                            setPositionX(150);
                            
                            if(scrollViewRef.current){
                                scrollViewRef.current.scrollTo({x: 0, animated: true});
                            }
                            setTimeout( () => {
                                if(carousel.current){
                                    carousel.current.scrollTo({x : DEVICE_WIDTH * 1, animated : true});
                                }
                            }, 500 );
                            
                            
                        } } 
                        rippleColor="transparent"
                    >
                        <MenuItemContent>
                            <MenuItemTitle>
                                2º
                            </MenuItemTitle>
                        </MenuItemContent>
                    </MenuItemContainer>
                </MenuItem>

                <MenuItem>
                    <MenuItemContainer 
                        onPress={ () => { 
                            setPositionX(300);
                            if(scrollViewRef.current){
                                scrollViewRef.current.scrollTo({x: 300, animated: true});
                            }
                            setTimeout( () => {
                                if(carousel.current){
                                    carousel.current.scrollTo({x : DEVICE_WIDTH * 2, animated : true});
                                }
                            }, 500 );
                        } } 
                        rippleColor="transparent"
                    >
                        <MenuItemContent>
                            <MenuItemTitle>
                                3º
                            </MenuItemTitle>
                        </MenuItemContent>
                    </MenuItemContainer>
                </MenuItem>


                <MenuItem>
                    <MenuItemContainer
                        onPress={ () => { 
                            setPositionX(450);
                        } } 
                        rippleColor="transparent"
                    >
                        <MenuItemContent>
                            <MenuItemTitle>
                                4º
                            </MenuItemTitle>
                        </MenuItemContent>
                    </MenuItemContainer>
                </MenuItem>

                <AnimationBar style={ { left : translateXAnim } } />
            </MenuContent>
        </Menu>
    );
};

export default forwardRef(ImperativeScrollView);