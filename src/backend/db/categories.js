import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Portrait Photography",
    img:'https://picturecorrect-wpengine.netdna-ssl.com/wp-content/uploads/2013/07/tips-for-portrait-photography.jpg',
    description:
      "Portrait photography, aims to capture the personality and mood of an individual or group. Images may be candid or posed, full body or close-ups.",
  },
  {
    _id: uuid(),
    categoryName: "Fashion Photography",
    img:'https://www.jdinstitute.edu.in/media/2021/07/Types-of-Fashion-Photography-Thumbnail.jpg',
    description:
      "Fashion photography showcases and glamorizes fashion clothing, shoes, and accessories to make them more desirable to consumers.",
  },
  {
    _id: uuid(),
    categoryName: "Architectural Photography",
    img:'https://fpimages.com/wp-content/uploads/2015/04/lhemisferic-2.jpg',
    description:
      "Both the interior and exterior design of buildings and structures are the subject of architectural photography.",
  },
];
