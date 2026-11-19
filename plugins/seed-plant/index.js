// Seed Plant Plugin for OpenClaw
export default {
  id: "seed-plant",
  name: "Seed Plant",
  description: "Plant seeds, water them, watch them grow, harvest them",

  tools: [
    {
      name: "plant_seed",
      description: "Plant a seed in your garden. Args: { seed: string, plot: string? }",
      execute: async (args) => {
        return { text: `🌱 Planted ${args.seed} in plot ${args.plot || "1"}. Water it to help it grow!` };
      }
    },
    {
      name: "water_plant",
      description: "Water a plant. Args: { plant: string }",
      execute: async (args) => {
        return { text: `💧 Watered ${args.plant}. It's growing! +1 growth.` };
      }
    },
    {
      name: "check_garden",
      description: "Check all plants in your garden",
      execute: async () => {
        return { text: `🌿 Your garden: Check your plots - keep watering daily for harvest!` };
      }
    },
    {
      name: "harvest_plant",
      description: "Harvest a grown plant. Args: { plant: string }",
      execute: async (args) => {
        return { text: `🌾 Harvested ${args.plant}! +10 seeds back. Nice work.` };
      }
    }
  ]
};
