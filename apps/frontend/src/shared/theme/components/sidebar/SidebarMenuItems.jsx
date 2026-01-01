import { GridIcon, DocsIcon, PieChartIcon } from "@shared/theme/icons";

export const navItems = [
  {
    icon: <GridIcon />,
    name: "Dashboard",
    subItems: [{ name: "Ecommerce", path: "/" }],
  },
  {
    icon: <DocsIcon />,
    name: "Seguridad",
    subItems: [{ name: "Usuarios", path: "/user" }],
  }
];

export const othersItems = [
  {
    icon: <PieChartIcon />,
    name: "Charts",
    subItems: [
      { name: "Line Chart", path: "/line-chart" },
      { name: "Bar Chart", path: "/bar-chart" },
    ],
  }
];