import { Highlight } from "../types/highlight";

export const highlightsMock: Highlight[] = [
  {
    id: 1,
    day: "Day 1",
    directionTime: "40m",
    highlightsItems: [
      {
        id: 1,
        name: "Gullfoss Waterfall",
        curatorPick: true,
        image: "/region-1.jpg",
        info: ["1h", "Iconic hike", "Light traffic"],
      },
      {
        id: 2,
        name: "Reykjadalur Valley",
        curatorPick: true,
        image: "/region-2.jpg",
        info: ["1h", "Iconic hike", "Light traffic"],
      },
    ],
  },
  {
    id: 2,
    day: "Day 2",
    directionTime: "1h 40m",
    highlightsItems: [
      {
        id: 1,
        name: "Geysir Thermal Field",
        curatorPick: true,
        image: "/region-3.jpg",
        info: ["1h", "Iconic hike", "Light traffic"],
      },
      {
        id: 2,
        name: "Thingvellir",
        curatorPick: false,
        image: "/region-4.jpg",
        info: ["1h", "Iconic hike", "Light traffic"],
      },
    ],
  },
];
