/**
 * The `SkyRatsManager` class is responsible for managing the execution of commands triggered by entity spawning events.
 * It initializes with a predefined set of entity types that need to be removed and handles the spawning of these entities.
 * If a spawned entity matches the predefined types, it executes the corresponding logic to teleport and kill the entity.
 */
export default class SkyRatsManager {
    /**
     * Constructs an instance of the class.
     *
     * Sets up the `skyratTypeFactory` property with predefined entity types to be removed.
     *
     * Constructs the `skyratTypes` list by iterating over the `skyratTypeFactory` and
     * combining the namespace and type into a single string for each entity type.
     */
    constructor() {
        // Entity types to be yeeten into the sun and/or void
        this.skyratTypeFactory = [
            {
                namespace: "minecraft",
                types: ["phantom"],
            },
            {
                namespace: "tt",
                types: [
                    "blazebasalto",
                    "blazecarmesi",
                    "blazeretorcido",
                    "blazesould",
                    "bloodymeat",
                    "chest_blackstone",
                    "chest_crismon",
                    "chest_twisted",
                    "creeper_magmatico",
                    "creeper_magmatico_retorcido",
                    "creeper_pet_crimson",
                    "creeper_pet_twisted",
                    "creepycreeper",
                    "crimsoncreeper",
                    "cthulhu",
                    "fulgor",
                    "glare",
                    "golem_carmesi",
                    "golem_carmesi2",
                    "golem_retorcido",
                    "golem_retorcido2",
                    "hammer_item",
                    "hammer_item_basalt",
                    "hammer_item_carmesi",
                    "hammer_item_twisted",
                    "hongo_carmesi",
                    "hongo_carmesiblack",
                    "hongo_torcido",
                    "hongo_torcidoblack",
                    "infernalgolem",
                    "item",
                    "pig_nethercandy",
                    "pig_nethercandy2",
                    "pig_nethercandy3",
                    "pig_nethercandy4",
                    "soulstrider",
                    "twistedcreeper",
                ],
            },
        ];
        // construct the list of skyrat types
        this.skyratTypes = [];
        for (const factory of this.skyratTypeFactory) {
            for (const type of factory.types) {
                this.skyratTypes.push({ skyratTypes: [`${factory.namespace}:${type}`] });
            }
        }
        // Bind the handler to preserve this context
        this.skyratsHandler = this.skyratsHandler.bind(this);
    }
    /**
     * Handles the spawning of entities and checks if the spawned entity is a SkyRat.
     * If the entity is a SkyRat, it executes the corresponding SkyRat logic.
     *
     * @param event - The event triggered after an entity spawns.
     */
    skyratsHandler(event) {
        if (!event || !event.entity) {
            console.warn("SkyRats - Received invalid event or entity");
            return;
        }
        let entityId = event.entity.typeId;
        if (!entityId) {
            console.warn("SkyRats - Entity has no typeId");
            return;
        }
        if (this.skyratTypes && this.skyratTypes.some((type) => type.skyratTypes.includes(entityId))) {
            this.executeSkyRat(event);
        }
    }
    /**
     * Executes the SkyRat event by teleporting the entity to a specific location and then killing it.
     *
     * @param event - The event that triggers the execution, containing the entity to be manipulated.
     */
    executeSkyRat(event) {
        if (event && event.entity) {
            let mob_loc = event.entity.getHeadLocation();
            mob_loc.y = -64;
            event.entity.teleport({
                x: mob_loc.x,
                y: -200,
                z: mob_loc.z,
            });
            event.entity.kill();
        }
    }
}
