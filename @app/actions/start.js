export const INCREASE = 'start/INCREASE';
export const PROCEED = 'start/PROCEED';
export const PROCEEDSUCCEED = 'start/PROCEEDSUCCEED';
export const PROCEEDERROR = 'start/PROCEEDERROR';

export function increase() {
    return {
        type: INCREASE
    }
}

export function proceed(history) {
    return {
        type: PROCEED,
        history: history
    }
}

export function proceedSucceed(payLoad) {
    return {
        type: PROCEEDSUCCEED,
        payLoad: payLoad
    }
}

export function proceedError() {
    return {
        type: PROCEEDERROR
    }
}