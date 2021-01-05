var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
define("src/algorithm/draughts-engine", ["require", "exports", "uuid"], function (require, exports, uuid) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fillStartingPosition = exports.exploreMoves = exports.isPossibleDiagonalKill = exports.getPossibleDiagonalKill = exports.isFreeSpaceBehindDraught = exports.exploreDiagonalBehind = exports.Direction = void 0;
    var Direction;
    (function (Direction) {
        Direction[Direction["UpLeft"] = 1] = "UpLeft";
        Direction[Direction["UpRight"] = 2] = "UpRight";
        Direction[Direction["DownLeft"] = -1] = "DownLeft";
        Direction[Direction["DownRight"] = -2] = "DownRight";
    })(Direction = exports.Direction || (exports.Direction = {}));
    function exploreDiagonalBehind(direction, coords, godMode) {
        var possibleStepsToKill, y, levelsSearched, x, x, possibleStepsToKill, y, levelsSearched, x, x;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(direction === Direction.UpLeft || direction === Direction.UpRight)) return [3 /*break*/, 7];
                    possibleStepsToKill = godMode ? 7 - coords.y : 1;
                    y = coords.y + 1;
                    _a.label = 1;
                case 1:
                    if (!(y <= Math.min(coords.y + possibleStepsToKill, 7))) return [3 /*break*/, 6];
                    levelsSearched = y - coords.y;
                    if (!(direction === Direction.UpLeft)) return [3 /*break*/, 3];
                    x = coords.x - levelsSearched;
                    if (x < 0) {
                        return [3 /*break*/, 6];
                    }
                    return [4 /*yield*/, { x: x, y: y }];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 3:
                    x = coords.x + levelsSearched;
                    if (x > 7) {
                        return [3 /*break*/, 6];
                    }
                    return [4 /*yield*/, { x: x, y: y }];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    ++y;
                    return [3 /*break*/, 1];
                case 6: return [3 /*break*/, 13];
                case 7:
                    if (!(direction === Direction.DownLeft || direction === Direction.DownRight)) return [3 /*break*/, 13];
                    possibleStepsToKill = godMode ? coords.y : 1;
                    y = coords.y - 1;
                    _a.label = 8;
                case 8:
                    if (!(y >= Math.max(coords.y - possibleStepsToKill, 0))) return [3 /*break*/, 13];
                    levelsSearched = y - coords.y;
                    if (!(direction === Direction.DownLeft)) return [3 /*break*/, 10];
                    x = coords.x + levelsSearched;
                    if (x < 0) {
                        return [3 /*break*/, 13];
                    }
                    return [4 /*yield*/, { x: x, y: y }];
                case 9:
                    _a.sent();
                    return [3 /*break*/, 12];
                case 10:
                    x = coords.x - levelsSearched;
                    if (x > 7) {
                        return [3 /*break*/, 13];
                    }
                    return [4 /*yield*/, { x: x, y: y }];
                case 11:
                    _a.sent();
                    _a.label = 12;
                case 12:
                    y--;
                    return [3 /*break*/, 8];
                case 13: return [2 /*return*/];
            }
        });
    }
    exports.exploreDiagonalBehind = exploreDiagonalBehind;
    var getFreeSpacesBehindDraught = function (victimDraught, draughts, direction, godMode) {
        var e_1, _a;
        var freeCoords = new Array();
        var _loop_1 = function (x, y) {
            if (!draughts.some(function (d) { return d.coords.x === x && d.coords.y === y; })) {
                freeCoords.push({ x: x, y: y });
            }
            else {
                return "break";
            }
        };
        try {
            for (var _b = __values(exploreDiagonalBehind(direction, victimDraught.coords, godMode)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = _c.value, x = _d.x, y = _d.y;
                var state_1 = _loop_1(x, y);
                if (state_1 === "break")
                    break;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return freeCoords;
    };
    exports.isFreeSpaceBehindDraught = function (draught, draughts, direction) {
        return getFreeSpacesBehindDraught(draught, draughts, direction, false).length > 0;
    };
    exports.getPossibleDiagonalKill = function (draught, draughts, direction) {
        var e_2, _a;
        var _loop_2 = function (x, y) {
            var foundDraught = draughts.find(function (d) { return d.coords.x === x && d.coords.y === y; });
            if (foundDraught && foundDraught.color !== draught.color) {
                if (exports.isFreeSpaceBehindDraught(foundDraught, draughts, direction)) {
                    return { value: {
                            killer: draught,
                            victim: foundDraught,
                            direction: direction,
                        } };
                }
                else {
                    return { value: undefined };
                }
            }
            else if (foundDraught && foundDraught.color === draught.color) {
                return { value: undefined };
            }
        };
        try {
            for (var _b = __values(exploreDiagonalBehind(direction, draught.coords, draught.godMode)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = _c.value, x = _d.x, y = _d.y;
                var state_2 = _loop_2(x, y);
                if (typeof state_2 === "object")
                    return state_2.value;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return undefined;
    };
    exports.isPossibleDiagonalKill = function (draught, draughts, direction) {
        return exports.getPossibleDiagonalKill(draught, draughts, direction) !== undefined;
    };
    var getPossibleKills = function (draught, draughts, excludeDirection, switchSides) {
        var directionMultiplier = switchSides ? -1 : 1;
        var possibleKills = [];
        var possibleUpLeftKill = exports.getPossibleDiagonalKill(draught, draughts, directionMultiplier * Direction.UpLeft);
        if (!(excludeDirection === directionMultiplier * Direction.UpLeft) && possibleUpLeftKill) {
            possibleKills.push(possibleUpLeftKill);
        }
        var possibleUpRightKill = exports.getPossibleDiagonalKill(draught, draughts, directionMultiplier * Direction.UpRight);
        if (!(excludeDirection === directionMultiplier * Direction.UpRight) && possibleUpRightKill) {
            possibleKills.push(possibleUpRightKill);
        }
        if (draught.godMode) {
            var possibleDownLeftKill = exports.getPossibleDiagonalKill(draught, draughts, directionMultiplier * Direction.DownLeft);
            if (!(excludeDirection === directionMultiplier * Direction.DownLeft) && possibleDownLeftKill) {
                possibleKills.push(possibleDownLeftKill);
            }
            var possibleDownRightKill = exports.getPossibleDiagonalKill(draught, draughts, directionMultiplier * Direction.DownRight);
            if (!(excludeDirection === directionMultiplier * Direction.DownRight) && possibleDownRightKill) {
                possibleKills.push(possibleDownRightKill);
            }
        }
        return possibleKills;
    };
    var getPossibleNonKillingPositions = function (draught, draughts, switchSides) {
        var directionMultiplier = switchSides ? -1 : 1;
        var possiblePositions = new Array();
        var possibleUpLeftPositions = getFreeSpacesBehindDraught(draught, draughts, directionMultiplier * Direction.UpLeft, draught.godMode).map(function (c) { return ({ availableMoves: [], killId: undefined, coords: c }); });
        var possibleUpRightPositions = getFreeSpacesBehindDraught(draught, draughts, directionMultiplier * Direction.UpRight, draught.godMode).map(function (c) { return ({ availableMoves: [], killId: undefined, coords: c }); });
        var possibleDownLeftPositions = getFreeSpacesBehindDraught(draught, draughts, directionMultiplier * Direction.DownLeft, draught.godMode).map(function (c) { return ({ availableMoves: [], killId: undefined, coords: c }); });
        var possibleDownRightPositions = getFreeSpacesBehindDraught(draught, draughts, directionMultiplier * Direction.DownRight, draught.godMode).map(function (c) { return ({ availableMoves: [], killId: undefined, coords: c }); });
        possiblePositions.push.apply(possiblePositions, __spread(possibleUpLeftPositions));
        possiblePositions.push.apply(possiblePositions, __spread(possibleUpRightPositions));
        if (draught.godMode) {
            possiblePositions.push.apply(possiblePositions, __spread(possibleDownLeftPositions));
            possiblePositions.push.apply(possiblePositions, __spread(possibleDownRightPositions));
        }
        return possiblePositions;
    };
    var getOppositeDirection = function (direction) {
        switch (direction) {
            case Direction.UpLeft:
                return Direction.DownRight;
            case Direction.UpRight:
                return Direction.DownLeft;
            case Direction.DownLeft:
                return Direction.UpRight;
            case Direction.DownRight:
                return Direction.UpLeft;
        }
    };
    exports.exploreMoves = function (draught, draughts, switchSides, killingOnly, isPositionExplored, excludeDirection) {
        var e_3, _a, e_4, _b;
        if (killingOnly === void 0) { killingOnly = false; }
        if (isPositionExplored === void 0) { isPositionExplored = function () { return false; }; }
        var possiblePositions = new Array();
        var possibleKills = getPossibleKills(draught, draughts, excludeDirection, switchSides);
        if (possibleKills.length > 0) {
            try {
                for (var possibleKills_1 = __values(possibleKills), possibleKills_1_1 = possibleKills_1.next(); !possibleKills_1_1.done; possibleKills_1_1 = possibleKills_1.next()) {
                    var possibleKill = possibleKills_1_1.value;
                    var spacesBehindVictim = getFreeSpacesBehindDraught(possibleKill.victim, draughts, possibleKill.direction, draught.godMode);
                    try {
                        for (var spacesBehindVictim_1 = (e_4 = void 0, __values(spacesBehindVictim)), spacesBehindVictim_1_1 = spacesBehindVictim_1.next(); !spacesBehindVictim_1_1.done; spacesBehindVictim_1_1 = spacesBehindVictim_1.next()) {
                            var freeSpaceCoords = spacesBehindVictim_1_1.value;
                            var position = {
                                coords: freeSpaceCoords,
                                killId: possibleKill.victim.id,
                                availableMoves: !isPositionExplored(freeSpaceCoords)
                                    ? exports.exploreMoves(__assign(__assign({}, draught), { coords: freeSpaceCoords }), draughts, switchSides, true, function (coords) {
                                        return (isPositionExplored(coords) ||
                                            (draught.coords.x === coords.x && draught.coords.y === coords.y));
                                    }, getOppositeDirection(possibleKill.direction))
                                    : [],
                            };
                            possiblePositions.push(position);
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (spacesBehindVictim_1_1 && !spacesBehindVictim_1_1.done && (_b = spacesBehindVictim_1.return)) _b.call(spacesBehindVictim_1);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (possibleKills_1_1 && !possibleKills_1_1.done && (_a = possibleKills_1.return)) _a.call(possibleKills_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        else if (!killingOnly) {
            return getPossibleNonKillingPositions(draught, draughts, switchSides);
        }
        return possiblePositions;
    };
    exports.fillStartingPosition = function (bottomColor) {
        if (bottomColor === void 0) { bottomColor = 'white'; }
        var draughts = new Array();
        var fillRow = function (y, color) {
            var offset = y % 2;
            for (var x = offset; x < 8; x += 2) {
                draughts.push({ coords: { x: x, y: y }, color: color, godMode: false, id: uuid.v4() });
            }
        };
        for (var y = 0; y < 3; ++y) {
            fillRow(y, bottomColor !== "black" ? "black" : "white");
        }
        for (var y = 5; y < 8; ++y) {
            fillRow(y, bottomColor === "black" ? "black" : "white");
        }
        return draughts;
    };
});
define("src/types", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("src/algorithm/should-enable-god-mode", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.shouldEnableGodMode = void 0;
    exports.shouldEnableGodMode = function (draught, bottomColor) {
        if (draught.coords.y === 0) {
            if (draught.color === bottomColor) {
                return true;
            }
        }
        if (draught.coords.y === 7) {
            if (draught.color !== bottomColor) {
                return true;
            }
        }
        return false;
    };
});
define("src/draught-reducer", ["require", "exports", "immer", "src/algorithm/should-enable-god-mode"], function (require, exports, immer_1, should_enable_god_mode_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createDraughtReducer = void 0;
    exports.createDraughtReducer = function (bottomColor) { return function (state, action) {
        if (action.type === "resetState") {
            return __assign(__assign({}, state), action.state);
        }
        return immer_1.default(state, function (draft) {
            switch (action.type) {
                case "selectDraught": {
                    draft.selectedDraught = action.draught;
                    draft.possibleMoves = action.possibleMoves;
                    break;
                }
                case "moveDraught": {
                    if (draft.selectedDraught) {
                        draft.selectedDraught.coords.x = action.position.coords.x;
                        draft.selectedDraught.coords.y = action.position.coords.y;
                        draft.possibleMoves = action.position.availableMoves;
                        draft.moveInProgress = action.position.availableMoves.length > 0;
                        if (action.position.killId) {
                            draft.killIds.push(action.position.killId);
                        }
                        var selectedDraught = draft.draughts.find(function (d) { var _a; return d.id === ((_a = draft.selectedDraught) === null || _a === void 0 ? void 0 : _a.id); });
                        if (selectedDraught) {
                            selectedDraught.coords = action.position.coords;
                            if (should_enable_god_mode_1.shouldEnableGodMode(selectedDraught, bottomColor)) {
                                selectedDraught.godMode = true;
                            }
                        }
                        if (!draft.moveInProgress) {
                            draft.draughts = draft.draughts.filter(function (d) { return !draft.killIds.includes(d.id); });
                            draft.killIds = [];
                            draft.activeColor = draft.activeColor === "white" ? "black" : "white";
                            draft.selectedDraught = undefined;
                        }
                    }
                    break;
                }
            }
        });
    }; };
});
define("src/draughts-action-creator", ["require", "exports", "src/algorithm/draughts-engine"], function (require, exports, draughts_engine_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getActionBySquareClick = void 0;
    exports.getActionBySquareClick = function (x, y, startColor, context) {
        if (context.selectedDraught) {
            var possibleMove = context.possibleMoves.find(function (m) { return (m === null || m === void 0 ? void 0 : m.coords.x) === x && (m === null || m === void 0 ? void 0 : m.coords.y) === y; });
            if (possibleMove) {
                return {
                    type: "moveDraught",
                    position: possibleMove,
                };
            }
        }
        if (!context.moveInProgress && context.activeColor === startColor) {
            var draught = context.draughts.find(function (d) { return d.coords.x === x && d.coords.y === y; });
            if (draught) {
                if (draught.color === context.activeColor) {
                    return {
                        type: "selectDraught",
                        draught: draught,
                        possibleMoves: draughts_engine_1.exploreMoves(draught, context.draughts, context.activeColor === "white"),
                    };
                }
            }
            return {
                type: "selectDraught",
                draught: undefined,
                possibleMoves: [],
            };
        }
        return undefined;
    };
});
define("index", ["require", "exports", "src/draught-reducer", "src/types", "src/draughts-action-creator", "src/algorithm/draughts-engine"], function (require, exports, draught_reducer_1, types_1, draughts_action_creator_1, draughts_engine_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(draught_reducer_1, exports);
    __exportStar(types_1, exports);
    __exportStar(draughts_action_creator_1, exports);
    __exportStar(draughts_engine_2, exports);
});
