interface TechRadarClient {
  getTechRadarTechs(): Promise<RadarTech[]>;
}

interface RadarTech {
  name: string;
  quadrant: string;
  ring: string;
  isNew: boolean;
  notes: string;
  createdAt: string;
  createdBy: string;
  modifiedAt: string;
  modifiedBy: string;
  state: string;
}
