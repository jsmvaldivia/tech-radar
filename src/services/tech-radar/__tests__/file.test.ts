import { FileTechRadarClient } from "@services/tech-radar/file";
import type { RadarBlip } from "@services/tech-radar/client";
import { expect, test } from "vitest";

test("When calling the FileTechRadarClient obtain a list of Radar Techs", () => {
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

  const client = new FileTechRadarClient("fixture/test_radarTechs.json");
  client.getTechRadarBlips().then((techs) => {
    expect(techs.length).toEqual(2);
    expect(techs).toEqual(radarTechs);
  });
});
