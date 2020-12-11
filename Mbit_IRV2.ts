/*
Copyright (C): 2020, Shenzhen Yahboom Tech
modified by liusen
*/

/**
 * IR remote
 */
//% icon="\uf1eb" weight=19 color=50
namespace Mbit_IRV2 {

    /**
    * initialization
    */
  
    /**
    * button read.
    */
    //% blockId=Mbit_IRV2_readv2
    //% blockGap=20 weight=89
    //% block="read IR key value"
    //% shim=Mbit_IRV2::Mbit_IR_readv2
    export function Mbit_IR_readv2(): number {
      return 0;
    }

}
  