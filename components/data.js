import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import product1 from "../public/img/procli.jpg";
import product2 from "../public/img/potato.jpg";

import product3 from "../public/img/tomato.jpg";

import product4 from "../public/img/carrot.jpg";

export const benefitOne = {
  title: "Бидний тухай",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Олон жилийн туршлага",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Итгэл даах түнш",
      desc: "Here you can add the next benefit point.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Найдвартай бүтээгдэхүүн",
      desc: "This will be your last bullet point in this section.",
      icon: <CursorClickIcon />,
    },
  ],
};
export const products = {
  title: "Бүтээгдэхүүн",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  product: [
    {
      title: "Брокли",
      desc: "Then explain the first point breifly in one or two lines.",
      image: product1,
    },
    {
      title: "Төмс",
      desc: "Here you can add the next benefit point.",
      image: product2,
    },
    {
      title: "Улаан лооль",
      desc: "This will be your last bullet point in this section.",
      image: product3,
    },
    {
      title: "Лууван",
      desc: "This will be your last bullet point in this section.",
      image: product4,
    },
  ],
};
export const contacts = {
  title: "Холбоо барих",
  contact: [
    {
      title: "Утас",
      desc: "+97988888888",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
    },
    {
      title: "И-майл",
      desc: "FandF@gmail.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
    },
    {
      title: "Хаяг",
      desc: "БЗД, 3-хороо, ХХХ гудамж, 18-12 ",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
    },
  ],
};
