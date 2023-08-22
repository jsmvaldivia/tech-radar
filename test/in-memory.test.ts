import { InMemoryTechRadarClient } from "src/services/tech-radar/in-memory";
import { expect, test } from "vitest";

test("When calling the InMemoryTechRadarClient obtain a list of Radar Techs", () => {
  const radarTechs: RadarTech[] = [
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
  client.getTechRadarTechs().then((techs) => {
    expect(techs.length).toEqual(1);
    expect(techs).toEqual(radarTechs);
  });
});
