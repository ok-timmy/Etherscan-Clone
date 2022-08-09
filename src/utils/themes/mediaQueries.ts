const sizes = {
    phone: "600px",
    tabport: "760px",
    tabland: "992px",
    bigdesktop: "2000px",
  };
  
  export const mediaQueries = {
    phone: `@media screen and (max-width: ${sizes.phone})`,
    tabport: `@media screen and (max-width: ${sizes.tabport})`,
    tabland: `@media screen and (min-width: ${sizes.tabport}) and (max-width: ${sizes.tabland})`,
    bigdesktop: `@media screen and (max-width: ${sizes.bigdesktop})`,
  };
  
  export const devices = {
    phone: ` (max-width: ${sizes.phone})`,
    tabport: ` (max-width: ${sizes.tabport})`,
    tabland: ` (max-width: ${sizes.tabland})`,
    bigdesktop: ` (max-width: ${sizes.bigdesktop})`,
  };