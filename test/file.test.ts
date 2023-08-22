import { FileTechRadarClient } from "src/services/tech-radar/file";
import { expect, test } from "vitest";

test("When calling the FileTechRadarClient obtain a list of Radar Techs", () => {
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
    {
      name: "React",
      quadrant: "Languages and Frameworks",
      ring: "Trial",
      isNew: false,
      notes: "This is a note",
      createdAt: "2021-01-01",
      createdBy: "me",
      modifiedAt: "2021-01-01",
      modifiedBy: "me",
      state: "active",
    },
  ];

  const client = new FileTechRadarClient("test_radarTechs.json");
  client.getTechRadarTechs().then((techs) => {
    expect(techs.length).toEqual(2);
    expect(techs).toEqual(radarTechs);
  });
});
