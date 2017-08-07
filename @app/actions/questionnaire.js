export const LOAD = 'questionnaire/LOAD';
export const LOADSUCCEED = 'questionnaire/LOADSUCCEED';

export function load() {
    return {
        type: LOAD
    }
}

export function loadSucceed(payLoad) {
    return {
        type: LOADSUCCEED,
        payLoad: payLoad
    }
}
