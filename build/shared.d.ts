declare module "src/algorithm/draughts-engine" {
    import { Color, Coordinates, Draught } from "src/types";
    export interface Position {
        coords: Coordinates;
        availableMoves: Array<Position>;
        killId: number | string | undefined;
    }
    export enum Direction {
        UpLeft = 1,
        UpRight = 2,
        DownLeft = -1,
        DownRight = -2
    }
    interface PossibleKill {
        victim: Draught;
        killer: Draught;
        direction: Direction;
    }
    export function exploreDiagonalBehind(direction: Direction, coords: Coordinates, godMode: boolean): Generator<{
        x: number;
        y: number;
    }, void, unknown>;
    export const isFreeSpaceBehindDraught: (draught: Draught, draughts: Array<Draught>, direction: Direction) => boolean;
    export const getPossibleDiagonalKill: (draught: Draught, draughts: Array<Draught>, direction: Direction) => PossibleKill | undefined;
    export const isPossibleDiagonalKill: (draught: Draught, draughts: Array<Draught>, direction: Direction) => boolean;
    export const exploreMoves: (draught: Draught, draughts: Array<Draught>, switchSides: boolean, killingOnly?: boolean, isPositionExplored?: (coords: Coordinates) => boolean, excludeDirection?: Direction) => Array<Position>;
    export const fillStartingPosition: (bottomColor?: Color) => Draught[];
}
declare module "src/types" {
    import { Position } from "src/algorithm/draughts-engine";
    export interface BaseGameContext {
        draughts: Array<Draught>;
        selectedDraught: Draught | undefined;
        killIds: Array<number | string>;
        possibleMoves: Array<Position>;
        moveInProgress: boolean;
        activeColor: Color;
    }
    export type Color = "black" | "white";
    export interface Coordinates {
        x: number;
        y: number;
    }
    export interface Draught {
        coords: Coordinates;
        godMode: boolean;
        color: Color;
        id: number | string;
    }
}
declare module "src/algorithm/should-enable-god-mode" {
    import { Color, Draught } from "src/types";
    export const shouldEnableGodMode: (draught: Draught, bottomColor: Color) => boolean;
}
declare module "src/draught-reducer" {
    import { BaseGameContext, Color } from "src/types";
    export const createDraughtReducer: (bottomColor: Color) => (state: BaseGameContext, action: any) => any;
}
declare module "src/draughts-action-creator" {
    import { BaseGameContext, Color } from "src/types";
    export const getActionBySquareClick: (x: number, y: number, startColor: Color, context: BaseGameContext) => {
        type: string;
        position: import("src/algorithm/draughts-engine").Position;
        draught?: undefined;
        possibleMoves?: undefined;
    } | {
        type: string;
        draught: import("src/types").Draught;
        possibleMoves: import("src/algorithm/draughts-engine").Position[];
        position?: undefined;
    };
}
declare module "index" {
    export * from "src/draught-reducer";
    export * from "src/types";
    export * from "src/draughts-action-creator";
    export * from "src/algorithm/draughts-engine";
}
//# sourceMappingURL=shared.d.ts.map