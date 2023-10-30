import type { RadarBlip, TechRadarClient } from "@services/tech-radar/client";

export class InMemoryTechRadarClient implements TechRadarClient {
  private memory: RadarBlip[] = [];

  constructor(private blips: RadarBlip[]) {}
  getTechRadarBlips(): Promise<RadarBlip[]> {
    this.memory = this.blips;
    return Promise.resolve(this.memory);
  }
}
