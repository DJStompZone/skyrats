var _a, _b, _c, _d;
import { world } from "@minecraft/server";
import SkyRatsManager from "./skyrats";
const SkyRatsMGR = new SkyRatsManager();
if ((_b = (_a = world.afterEvents) === null || _a === void 0 ? void 0 : _a.entitySpawn) !== null && _b !== void 0 ? _b : null) {
    try {
        (_c = world.afterEvents) === null || _c === void 0 ? void 0 : _c.entitySpawn.subscribe(SkyRatsMGR.skyratsHandler);
        console.log("Subscribed to entity spawn event");
    }
    catch (e) {
        console.error(`SkyRats - Error in entity spawn subscription ${e}\n${(_d = e === null || e === void 0 ? void 0 : e.stack) !== null && _d !== void 0 ? _d : ""}`);
    }
}
else {
    console.error("SkyRats - Unable to subscribe to entity spawning event! (Event not found)");
}
