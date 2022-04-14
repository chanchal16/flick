import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Portrait Photography",
    description:
      "Portrait photography, aims to capture the personality and mood of an individual or group. Images may be candid or posed, full body or close-ups.",
  },
  {
    _id: uuid(),
    categoryName: "Fashion Photography",
    description:
      "Fashion photography showcases and glamorizes fashion clothing, shoes, and accessories to make them more desirable to consumers.",
  },
  {
    _id: uuid(),
    categoryName: "Architectural Photography",
    description:
      "Both the interior and exterior design of buildings and structures are the subject of architectural photography.",
  },
];
