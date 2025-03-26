import { world } from "@minecraft/server";
import SkyRatsManager from "./skyrats";

const SkyRatsMGR = new SkyRatsManager();

if (world.afterEvents?.entitySpawn ?? null) {
  try {
    world.afterEvents?.entitySpawn.subscribe(SkyRatsMGR.skyratsHandler);
    console.log("Subscribed to entity spawn event");
  } catch (e) {
    console.error(
      `SkyRats - Error in entity spawn subscription ${e}\n${e?.stack ?? ""}`
    );
  }
} else {
  console.error(
    "SkyRats - Unable to subscribe to entity spawning event! (Event not found)"
  );
}
