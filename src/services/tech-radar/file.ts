import * as fs from "fs";
import type { RadarBlip, TechRadarClient } from "@services/tech-radar/client";

export class FileTechRadarClient implements TechRadarClient {
  constructor(private path: string) {}

  getTechRadarBlips(): Promise<RadarBlip[]> {
    console.log("cwd", process.cwd());
    const json = fs.readFileSync(this.path, "utf8");
    try {
      const radarTechs: RadarBlip[] = JSON.parse(json);
      return Promise.resolve(radarTechs);
    } catch (error) {
      console.error("Error parsing JSON string: ", error);
      return Promise.reject(error);
    }
  }
}
