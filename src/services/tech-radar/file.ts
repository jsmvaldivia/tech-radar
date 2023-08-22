import * as fs from "fs";

export class FileTechRadarClient implements TechRadarClient {
  constructor(private path: string) {}

  getTechRadarTechs(): Promise<RadarTech[]> {
    const jsonString = fs.readFileSync(this.path, "utf8");
    try {
      const radarTechs: RadarTech[] = JSON.parse(jsonString);
      return Promise.resolve(radarTechs);
    } catch (e) {
      console.error("Error parsing JSON string: ", e);
      return Promise.reject(e);
    }
  }
}
