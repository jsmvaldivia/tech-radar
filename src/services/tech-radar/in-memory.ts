export class InMemoryTechRadarClient implements TechRadarClient {
  constructor(private techs: RadarTech[]) {}

  getTechRadarTechs(): Promise<RadarTech[]> {
    return Promise.resolve(this.techs);
  }
}
