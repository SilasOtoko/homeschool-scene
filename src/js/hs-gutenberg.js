jQuery(document).ready(function($) {
    wp.blocks.registerBlockStyle("core/group", {
        name: "left-aligned",
        label: "Align Content Left"
    });
     
    wp.blocks.registerBlockStyle("core/group", {
        name: "right-aligned",
        label: "Align Content Right"
    });

    wp.blocks.registerBlockStyle("core/group", {
        name: "centered",
        label: "Align Content Center"
    });
     
    wp.blocks.registerBlockStyle("core/button", {
        name: "arrow-right-link",
        label: "Arrow Right"
    });

    wp.blocks.registerBlockStyle("core/image", {
        name: "round-artistic-small",
        label: "Round Artistic Small"
    });

    wp.blocks.registerBlockStyle("core/image", {
        name: "round-artistic-large",
        label: "Round Artistic large"
    });

    wp.blocks.registerBlockStyle("core/heading", {
        name: "small",
        label: "Small"
    });
});
