export const styles = {
  global: {
    ":not(.chakra-dont-set-collapse) > .chakra-collapse": {
      overflow: "initial !important",
    },
    ".indicator": {
      cursor: "pointer",
    },

    ".indicator.active": {
      color: "#fff",
      background: "#666",
    },
    ".product-detail-box-item:nth-child(1)": {
      borderTopLeftRadius: "6px",
    },
    ".product-detail-box-item:nth-child(2)": {
      borderTopRightRadius: "6px",
    },
    ".product-detail-box-item:nth-child(5)": {
      borderBottomLeftRadius: "6px",
    },
    ".product-detail-box-item:nth-child(6)": {
      borderBottomRightRadius: "6px",
    },
  },
};
