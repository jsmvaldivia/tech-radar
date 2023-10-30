import { InMemoryTechRadarClient } from "@services/tech-radar/in-memory";
import type { RadarBlip } from "@services/tech-radar/client";
import { expect, test } from "vitest";

test("When calling the InMemoryTechRadarClient obtain a list of Radar Techs", () => {
  const radarTechs: RadarBlip[] = [
    {
      name: "Spring Boot",
      quadrant: "Languages and Frameworks",
      ring: "Adopt",
      isNew: false,
      notes: "This is a note",
      createdAt: "2021-01-01",
      createdBy: "me",
      modifiedAt: "2021-01-01",
      modifiedBy: "me",
      state: "active",
    },
  ];

  const client = new InMemoryTechRadarClient(radarTechs);
  client.getTechRadarBlips().then((blips) => {
    expect(blips.length).toEqual(1);
    expect(blips).toEqual(radarTechs);
  });
});
