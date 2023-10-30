export interface TechRadarClient {
  getTechRadarBlips(): Promise<RadarBlip[]>;
}

export interface RadarBlip {
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
