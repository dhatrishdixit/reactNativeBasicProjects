import React from 'react';
import type { PropsWithChildren } from 'react';

import Icon from '@react-native-vector-icons/fontawesome6';

type IconsProps = PropsWithChildren<{
    name: number;
}>

function Icons({name}:IconsProps){
    switch (name){
        case 1:
            return <Icon name="circle" size={38} color="#F7CD2E" />
           
        case 2:
            return <Icon name="check" size={38} color="#38CC77" iconStyle='solid' />
           
      
        default:
          return <Icon name="pencil" size={38} color="grey" iconStyle='solid'  />
    }
}

export default Icons ;