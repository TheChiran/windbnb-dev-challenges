import { Callback } from "../types/Callback";

export default interface IGuestCounterProps{
    title: string,
    subTitle: string,
    count: number,
    onIncrement: Callback,
    onDecrement: Callback,
};
