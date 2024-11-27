const styles = {
    Container: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        py: {
            xxl: "14px",
            xxs: "10px"
        },
        zIndex: "999",
        "&.sticky": {
            backgroundColor: "#1F232F",
            boxShadow: theme => `0 0 3px ${theme.palette.primary.box_shadow_black}`
        }
    }
};

export default styles;