declare module "yarn-bound"

interface Result {
    metadata: { [key: string]: string }
}

export interface TextResult extends Result {
    text: string,
    hashtags: string[]
}

export interface CommandResult extends Result {
    command: string,
    hashtags: string[]
}

export interface OptionResult extends Result {
    text: string,
    isAvailable: boolean,
    hashtags: string[]
}

export interface OptionsResult extends Result {
    options: OptionResult[],
    select: (index: number) => OptionResult
}

declare interface YarnBound {
    jump: (startAt: string) => void,
    advance: (optionIndex: number) => void,
    currentResult: Result
}

export default YarnBound